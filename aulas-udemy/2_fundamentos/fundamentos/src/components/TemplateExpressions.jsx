const TemplateExpressions = () => {

    const name = "Gabriel";
    const data = {
        age: 26,
        job: "Dev FullStack"
    }

    return(
        <div>
            <p>Olá {name}, tudo bem?</p>
            <p>Você atua como: {data.job}</p>
        </div>
    )

}

export default TemplateExpressions