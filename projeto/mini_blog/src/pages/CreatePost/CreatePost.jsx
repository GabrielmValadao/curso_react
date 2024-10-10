// style
import styles from "./CreatePost.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocuments";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [formError, setFormError] = useState("");

  const { insertDocument, response } = useInsertDocument("posts");

  const { user } = useAuthValue();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    // validate image url

    // criar array de tags

    // checar os valores

    insertDocument({
      title,
      image,
      body,
      tags,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // redirect home page
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
      </form>
    </div>
  );
};

export default CreatePost;
