const Events = () => {
    
    const handleMyEvent = (e) => {
        console.log(e)
        console.log('Ativou o evento')
    }

    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Renderizando else</h1>
        }
    }
    
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            {/* colocando a logica dentro do evento, se a logica for maior que essa, não é recomendado o uso */}
            <div>
                <button onClick={() => console.log('clicou')}>Clique aqui novamente</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events