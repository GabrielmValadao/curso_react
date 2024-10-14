// style
import styles from "./EditPost.module.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocuments";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const EditPost = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setImage(post.image);
      setBody(post.body);

      const textTags = post.tagsArray.join(", ");

      setTags(textTags);
    }
  }, [post]);

  const { user } = useAuthValue();

  const { insertDocument, response } = useInsertDocument("posts");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    // validate image url
    try {
      new URL(image);
    } catch (formError) {
      setFormError("A imagem precisar ser uma URL");
      return;
    }

    // criar array de tags
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    // checar todos os campos
    if (!title || !image || !body || !tagsArray) {
      setFormError("Por favor, preencha todos os campos");
      return;
    }

    if (formError) return;

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // redirect home page
    navigate("/");
  };

  return (
    <div className={styles.edit_post}>
      {post && (
        <>
          <h2>Editando Post: {post.title}</h2>
          <p>Altere os dados do post como desejar</p>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Título</span>
              <input
                type="text"
                name="title"
                placeholder="Digite um título para sua publicação"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </label>

            <label>
              <span>Imagem</span>
              <input
                type="text"
                name="image"
                placeholder="Insira uma imagem"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />
            </label>
            <p className={styles.preview_title}>Preview da imagem atual:</p>
            <img
              className={styles.image_preview}
              src={post.image}
              alt={post.title}
            />
            <label>
              <span>Conteúdo</span>
              <textarea
                type="text"
                name="body"
                placeholder="Insira o conteúdo do post"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
              />
            </label>

            <label>
              <span>Tags</span>
              <input
                type="text"
                name="tags"
                placeholder="Insira as tags separadas por vírgulas"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                required
              />
            </label>

            {!response.loading && <button className="btn">Editar</button>}
            {response.loading && (
              <button className="btn" disabled>
                Aguarde...
              </button>
            )}

            {response.error && <p className="error">{response.error}</p>}
            {formError && <p className="error">{formError}</p>}
          </form>
        </>
      )}
    </div>
  );
};

export default EditPost;
