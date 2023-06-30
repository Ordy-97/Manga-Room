import React,{useState , createContext, useEffect} from 'react'
 import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
 } from "firebase/auth"

 import { auth } from '../../firebase-config'

//context for url
export const UrlContext = createContext()

export const UrlProvider = ({ children }) => {
    const [url, setUrl] = useState('https://api.waifu.im/search?many=true&is_nsfw=false&byte_size=<=400000') 
    const switchUrl = (newUrl) => {
        setUrl(newUrl)
    }

    return (
        <UrlContext.Provider value={{url, switchUrl}}>
            { children }
        </UrlContext.Provider>
    )
}

//context for toggle modals

export const UserContext = createContext()

export function UserContextProvider({children}) {

  const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)// fonction pour créer un user
  const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd)// fonction de connexion pour un user

    const [loadingData, setLoadingdata] = useState(true)
    const [currentUser, setCurrentUser] = useState()

  useEffect(() =>{
    const unSubscribe = onAuthStateChanged((auth), (currentUser) => {
      setCurrentUser(currentUser)
      setLoadingdata(false)
    })

    return unSubscribe;
  }, [])


    // modal
    const [modalState, setModalState] = useState({
      signUpModal: false,
      signInModal: false
    })
  
    const toggleModals = modal => {
      if(modal === "signIn") {
        setModalState({
          signUpModal: false,
          signInModal: true
        })
      }
      if(modal === "signUp") {
        setModalState({
          signUpModal: true,
          signInModal: false
        })
      }
      if(modal === "close") {
        setModalState({
          signUpModal: false,
          signInModal: false
        })
      }
    }
  
    return (
      <UserContext.Provider value={{modalState, toggleModals, signUp, signIn, currentUser}}>
        {!loadingData && children}
      </UserContext.Provider>
    )
  }
