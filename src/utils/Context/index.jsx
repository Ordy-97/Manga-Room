import React,{useState , createContext, useEffect} from 'react'
 import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider
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

//context for ID of favorite image
export const IdContext = createContext()

export const IdProvider = ({ children }) => {
  const [IdFavorite, setIdFavorite] = useState('')
  const ChangeId = (newId) => {
    setIdFavorite(newId)
  }

  return (
    <IdContext.Provider value={{IdFavorite, ChangeId}}>
      {children}
    </IdContext.Provider>
  )
}


//context ID for deleting an image favorite



//context for toggle modals

export const UserContext = createContext()

export function UserContextProvider({children}) {

  const googleProvider = new GoogleAuthProvider()

  const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)// fonction pour créer un user
  const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd)// fonction de connexion pour un user
  const resetPassword = (email) => sendPasswordResetEmail(auth, email)// fonction pour réinitialiser le mot de passe
  const signInWithGoogle = () => signInWithPopup(auth, googleProvider)// fonction pour l'authentification google

    const [loadingData, setLoadingdata] = useState(true)
    const [currentUser, setCurrentUser] = useState()

  /***onAuthStateChanged : fonction qui surveille si un utilisateur s'est connecté ou déconnecté.
   * renvoit un objet currentUser qui sera soit null(si aucun user n'est connecté) soit un profil user dans le cas contraire.
   * s'exécute à chaque rendu de l'application à travers la fonction unSubscribe.
  */
 
  useEffect(() =>{
    const unSubscribe = onAuthStateChanged((auth), (currentUser) => {
      setCurrentUser(currentUser)
      setLoadingdata(false)
    })

    return unSubscribe;
  }, [])


  // modal *****************************************************************************************/
  const [modalState, setModalState] = useState({
    signUpModal: false,
    signInModal: false
  })
  
  const toggleModals = (modal) => {
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
      <UserContext.Provider value={{modalState, toggleModals, signUp, signIn, resetPassword, signInWithGoogle, currentUser}}>
        {!loadingData && children}
      </UserContext.Provider>
    )
}
