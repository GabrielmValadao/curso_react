const Challenge = () => {
    
    const a = 5
    const b = 10
    
    const sumValues = (e) => {
        console.log(a + b)
    }

    return(
        <div>
            <p>A: {a}</p>
            <p>B: {b}</p>
            <button onClick={sumValues}>Clique para ver a soma</button>
        </div>
    )
}

export default Challenge