import React, {useContext, useRef, useState} from 'react'
import { UserContext } from '../../utils/Context'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

function SignInModal() {
  const { modalState, toggleModals, signIn, signInWithGoogle } = useContext(UserContext)
  const [validation, setValidation] = useState("")

  const navigate = useNavigate()
    
  const inputs = useRef([])

  //fonction qui récupère leséléments de type input
  const addInputs = el => {
    if(el && !inputs.current.includes(el)){
        inputs.current.push(el)
    }
  }

  const formRef = useRef()

  const handleForm = async (e) => {
    e.preventDefault();

    try {
        const credential = await signIn(
            inputs.current[0].value,
            inputs.current[1].value
        )
        setValidation("")
        formRef.current.reset()
        toggleModals("close")
        navigate('/private/private-favorites')
        /****************notification ***********************/
        toast("Welcome back guy's.😎", {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        })
        // console.log(credential)
    } catch {
        //console.dir(err)
        setValidation("Email and/or password incorrect !")
        
    }

  }
  /**login with google */
  const signGoogle = async () => {
    try {
      await signInWithGoogle()
      toggleModals("close")
      navigate('private/private-favorites')
    } catch (err) {

    }
  }

  // const resetPwd = async () => {
  //   try {
  //     await resetPassword(inputs.current[0].value)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  /**fonction qui permet de fermer les modals */
  const closeModal = () => {
    setValidation("")
    toggleModals("close")
  }

  return (
    <>
    {
      modalState.signInModal && (
      <div className="position-fixed top-0 vw-100 vh-100">
      <div
        className="w-100 h-100 bg-dark bg-opacity-75"
        onClick={closeModal}
      > </div>
      <div
        className="position-absolute top-50 start-50 translate-middle"
        style={{ minWidth: "400px", backgroundColor : "#fff", borderRadius : "10px", padding :"6px" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Sign In</h5>
              <button onClick={closeModal} className="btn-close"></button>
            </div>

            <div className="modal-body">
              <form
                ref={formRef}
                onSubmit={handleForm}
                className="sign-up-form"
              >
                <div className="mb-3">
                  <label htmlFor="signInEmail" className="form-label">
                    Email adress
                  </label>
                  <input
                    ref={addInputs}
                    name="email"
                    required
                    type="email"
                    className="form-control"
                    id="signInEmail"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="signInPwd" className="form-label">
                    Password
                  </label>
                  <input 
                    ref={addInputs}
                    name="pwd"
                    required
                    type="password"
                    className="form-control"
                    id="signInPwd"
                  />
                  <p className="text-danger mt-1"> {validation} </p>
                  
                </div>

                <div style={{display: "flex", flexDirection:"column", justifyContent: "center"}}>
                  <button className="btn btn-primary my-1 ">Sign In</button>
                </div> 

              </form>
              <div style={{display: "flex", flexDirection:"column", justifyContent: "center"}}>
                <button className="btn btn-danger my-1"
                  onClick={signGoogle}
                >
                  Sign In With Google
                </button>     
              </div>  
              <br />

              <p>Don't you have an account? <span style={{textDecoration:"underline", cursor:"mouse"}} onClick={() => toggleModals("signUp")}>Sign Up here</span> </p>
            </div>

          </div>
        </div>
      </div>
    </div>
    )
    }
    </>
  )
}

export default SignInModal
