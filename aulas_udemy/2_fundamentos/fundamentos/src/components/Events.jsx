const Events = () => {
    
    const handleMyEvent = (e) => {
        console.log(e)
        console.log('Ativou o evento')
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
        </div>
    )
}

export default Events