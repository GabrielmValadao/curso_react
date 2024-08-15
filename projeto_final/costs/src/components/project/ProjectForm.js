import { useEffect, useState } from "react";

import styles from "./ProjectForm.module.css";

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([]);
  const [selectOption, setSelectedOption] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <form className={styles.form_controler}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total para o projeto"
      />
      <Select
        name="categorie_id"
        text="Selecione a categoria"
        options={categories.map((categorie) => ({
          value: categorie.id,
          label: categorie.name,
        }))}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
