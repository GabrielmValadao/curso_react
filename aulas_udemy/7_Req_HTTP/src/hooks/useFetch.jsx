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
        }
    }

    useEffect(() => {
        const fetchData = async () => {

            // 6 - loading
            setLoading(true)

            const response = await fetch(url)

            const json = await response.json()

            setData(json)

            setLoading(false)
        }

        fetchData()
    }, [url, callFetch])

    // 5 - refatorando post 
    useEffect(() => {
        const httpRequest = async () => {

            if(method === 'POST') {
                
                let fetchOptions = [url, config];
                
                const response = await fetch(...fetchOptions);
                
                const json = await response.json();
                
                setCallFetch(json);
            }
        }

        httpRequest()
    }, [config, method, url])

    return { data, httpConfig, loading }
}
