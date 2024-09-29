import {useState, useEffect} from 'react'

export const useFetch = (url) => {
    // 4 - custom hook
    const [data, setData] = useState(null)
    
    // 5 - refatorando post
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    // 6 - loading 
    const [loading, setLoading] = useState(false)

    // 7 - tratando erros
    const [error, setError] = useState(null)

    // desafio 
    const [itemId, setItemId] = useState(null)

    const httpConfig = (data, method) => {
        if(method === 'POST') {
            setConfig({
                method,
                Headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            setMethod(method)

            // desafio 
        } else if(method === 'DELETE') {
            setConfig({
                method,
                Headers: {
                    'Content-type': 'application/json'
                },
            })

            setMethod(method)
            setItemId(data)
        }
    }

    useEffect(() => {
        const fetchData = async () => {

            // 6 - loading
            setLoading(true)

            // 7 - tratamento de error
            try {
                const response = await fetch(url)

                const json = await response.json()

                setData(json)
            } catch (error) {
                console.log(error.mesage)
                setError("Houve um erro ao carregar os dados")
            }

            setLoading(false)
        }

        fetchData()
    }, [url, callFetch])

    // 5 - refatorando post 
    useEffect(() => {
        const httpRequest = async () => {

            let json

            if(method === 'POST') {
                
                let fetchOptions = [url, config];
                
                const response = await fetch(...fetchOptions);
                
                json = await response.json();
                
                // desafio
            } else if(method === "DELETE") {
                
                const deleteUrl = `${url}/${itemId}`
                
                const response = await fetch(deleteUrl, config)
                
                json = await response.json()
            }
            setCallFetch(json);
        }

        httpRequest()
    }, [config, method, url])

    return { data, httpConfig, loading, error}
}
