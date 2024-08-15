import { useNavigate } from "react-router-dom";

import styles from "./NewProject.module.css";
import ProjectForm from "../project/ProjectForm";

function NewProject() {
  const navigate = useNavigate();

  function createPost(project) {
    // inicializa cost no service
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:3001/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // redirecionamento
        navigate("/projects");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
    </div>
  );
}

export default NewProject;
