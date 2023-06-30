import axios from 'axios'
import { useEffect, useState } from 'react'

export function useAxios(url) {
    const [imagesList, setImagesList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        async function fetchData(){
            if(!url) return
            
            try {

                const response = await axios.get(url)
                setImagesList(response.data.images)
                return response

            } catch (error) {

                console.log(error)

            } finally {

                setIsLoading(false)

            }
        }

        setIsLoading(true)

        fetchData()

    }, [url])
    
  return ({ imagesList, isLoading })
}


