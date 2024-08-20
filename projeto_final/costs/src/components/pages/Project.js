import styles from "./Project.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../layout/Loading";
import Container from "../layout/Container";

function Project() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [error, setError] = useState(null); // Estado para armazenar mensagens de erro
  const [showProjectForm, setShowProjectForm] = useState(false);

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
    return (
      <>
        <Loading />
      </>
    );
  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  return (
    <>
      {project.name ? (
        <div className={styles.project_details}>
          <Container customClass="column">
            <div className={styles.details_container}>
              <h1>Projeto: {project.name}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                {!showProjectForm ? "Editar projeto" : "Fechar"}
              </button>
              {!showProjectForm ? (
                <div className={styles.project_info}>
                  <p>
                    <span>Categoria:</span> {project.categorie.name}
                  </p>
                  <p>
                    <span>Total de orçamento:</span> R$ {project.budget}
                  </p>
                  <p>
                    <span>Total utilizado:</span> R$ {project.cost}
                  </p>
                </div>
              ) : (
                <div className={styles.project_info}>
                  <p>formulario de edição</p>
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Project;
