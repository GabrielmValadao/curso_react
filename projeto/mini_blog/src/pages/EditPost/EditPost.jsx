// style
import styles from "./EditPost.module.css";

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocuments";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

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
    <div className={styles.create_post}>
      <h2>Criar post</h2>
      <p>Escreve sobre o que quiser e compartilhe com seus seguidores</p>
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

        {!response.loading && <button className="btn">Cadastrar</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}

        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default EditPost;
