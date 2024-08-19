import styles from "./Project.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Project() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [error, setError] = useState(null); // Estado para armazenar mensagens de erro

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3001/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Não foi possível carregar o projeto."); // Mensagem de erro
          }
          return response.json();
        })
        .then((data) => {
          setProject(data);
          setError(null); // Limpa o erro caso a requisição seja bem-sucedida
        })
        .catch((error) => {
          setError(error.message); // Armazena a mensagem de erro
        });
    }
  }, [id]);

  if (error) {
    return <p className={styles.error}>Erro: {error}</p>; // Exibe a mensagem de erro
  }

  if (!project) {
    return <p>Carregando...</p>; // Estado de carregamento
  }

  return (
    <div className={styles.project_container}>
      <p>{project.name}</p>
    </div>
  );
}

export default Project;
