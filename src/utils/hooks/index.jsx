import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import { IdContext } from '../Context'

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

//hook qui récupère les images favoris
export function useGetFavoritesFetch() {
    const url = 'https://api.waifu.im/fav'
    const [imagesFavList, setImagesFavList] = useState([])
    // eslint-disable-next-line no-unused-vars
    const [isLoading, setIsLoading] = useState(false)
    const { IdFavorite } = useContext(IdContext)

        const headers = new Headers();
        headers.append('Accept-Version', 'v6');
        headers.append('Authorization', 'Bearer 2A6iar3Ux3UgiWhblLAwokr-jjK7L6W5uCfwdG4KrIJFoqnReLAZm4C7NpnkuFpKCHRExsWsmC8g2387qJiw_p8JKC9P5MwZQui1WXofd-8Ixcxd_ZJgbBuEKV-9XyJvdaMOzLeJFfJV6v5CvmgQdp34OdWWgF3xQTWG7FJoLsE');
        headers.append('Content-Type', 'application/json');

        const FetchFavorites = async () => {
            setIsLoading(true)
            if(!url) return
            
            try {

                const response = await fetch(url, { headers })
                if (!response.ok) {
                    throw new Error(`Erreur : ${response.status}`);
                }
                const data = await response.json()
                setImagesFavList(data.images)
                return data

            } catch (error) {

                console.log(error)

            } finally {

                setIsLoading(false)

            }
        }


    useEffect(() => {
        FetchFavorites()
    }, [IdFavorite])
    
  return ({ imagesFavList, FetchFavorites, isLoading })
}

//hook pour supprimer une image favorite
export function useDeleteFavFetch(){
    const apiUrl = 'https://api.waifu.im/fav/delete'
    const [isLoading3, setIsLoading] = useState(false)


        const headers = new Headers();
        headers.append('Accept-Version', 'v6');
        headers.append('Authorization', 'Bearer 2A6iar3Ux3UgiWhblLAwokr-jjK7L6W5uCfwdG4KrIJFoqnReLAZm4C7NpnkuFpKCHRExsWsmC8g2387qJiw_p8JKC9P5MwZQui1WXofd-8Ixcxd_ZJgbBuEKV-9XyJvdaMOzLeJFfJV6v5CvmgQdp34OdWWgF3xQTWG7FJoLsE');
        headers.append('Content-Type', 'application/json');
        
        async function DeleteFav(id,refreshFavorites) {
            setIsLoading(true)
            try {
                const response = await fetch(apiUrl, {
                    method : 'post',
                    headers : headers,
                    body : JSON.stringify({ image_id : id }),
                })
                if (response.ok) {
                    refreshFavorites();
                }
                return response
            }catch (error) {
                console.log("ERROR :" + error)
            } finally {
                setIsLoading(false)
            }
        }


    return {isLoading3, DeleteFav}
}

export function usePostFetch(){
    const apiUrl = 'https://api.waifu.im/fav/insert';
    const [isLoading2, setIsLoading] = useState(false)
    

    //const { IdFavorite } = useContext(IdContext)

        const headers = new Headers();
        headers.append('Accept-Version', 'v6');
        headers.append('Authorization', 'Bearer 2A6iar3Ux3UgiWhblLAwokr-jjK7L6W5uCfwdG4KrIJFoqnReLAZm4C7NpnkuFpKCHRExsWsmC8g2387qJiw_p8JKC9P5MwZQui1WXofd-8Ixcxd_ZJgbBuEKV-9XyJvdaMOzLeJFfJV6v5CvmgQdp34OdWWgF3xQTWG7FJoLsE');
        headers.append('Content-Type', 'application/json');

        async function AddFav(id, refreshFavorites){
            setIsLoading(true)
            try {
                const response = await fetch(apiUrl, {
                    method : 'post',
                    headers : headers,
                    body : JSON.stringify({ image_id : id })
                })
                if (response.ok) {
                    refreshFavorites();
                }
                return response
            } catch (error) {
                console.log("ERROR :" + error)
            } finally {
                setIsLoading(false)
                
                
            }
        }
        

    return {isLoading2, AddFav}
}


