import React, {useContext, useRef, useState} from 'react'
import { UserContext } from '../../utils/Context'
import { useNavigate } from 'react-router-dom'
import { Toaster, toast } from 'react-hot-toast'

function SignUpModal() {
  const { modalState, toggleModals, signUp, signInWithGoogle } = useContext(UserContext)
  const [validation, setValidation] = useState("")

  const navigate = useNavigate()
    
  const inputs = useRef([])

  const addInputs = el => {
    if(el && !inputs.current.includes(el)){
        inputs.current.push(el)
    }
  }

  const formRef = useRef()

  /**sending request for sign up */
  const handleForm = async (e) => {
    e.preventDefault();
    if((inputs.current[1].value.length || inputs.current[2].value.length) < 6) {
        setValidation("At least six characters !")
        return;
    }
    if(inputs.current[1].value !== inputs.current[2].value){
        setValidation("Passwords do not match !")
  
        return;
    }

    try {
        const credential = await signUp(
            inputs.current[0].value,
            inputs.current[1].value
        )
        
        setValidation("")
        toggleModals("close")
        formRef.current.reset()
        navigate('/private/private-favorites')
        /*******************************notification ***************************************/
        toast.success('Your account has been created succesfully !😇', {
            position: 'top-center',
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
              },
        })
         console.log(credential)
    } catch (err) {
        //console.dir(err)
        if(err.code === "auth/email-already-in-use"){
            setValidation("Email already used")
        }
        if(err.code === "auth/invalid-email"){
            setValidation("Email invalid")
        }
        
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

/**closing modal */
  const closeModal = () => {
    setValidation("")
    toggleModals("close")
  }

  return (
    <>
    {
      modalState.signUpModal && (
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
              <h5 className="modal-title">Sign Up</h5>
              <button onClick={closeModal} className="btn-close"></button>
            </div>

            <div className="modal-body">
              <form
                ref={formRef}
                onSubmit={handleForm}
                className="sign-up-form"
              >
                <Toaster
                    position="bottom-left"
                    reverseOrder={false}
                />
                <div className="mb-3">
                  <label htmlFor="signUpEmail" className="form-label">
                    Email adress
                  </label>
                  <input
                    ref={addInputs}
                    name="email"
                    required
                    type="email"
                    className="form-control"
                    id="signUpEmail"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="signUpPwd" className="form-label">
                    Password
                  </label>
                  <input 
                    ref={addInputs}
                    name="pwd"
                    required
                    type="password"
                    className="form-control"
                    id="signUpPwd"
                  />
                  
                </div>
                <div className="mb-3">
                        <label htmlFor="repeatPwd" className="form-label">
                          Repeat Password
                        </label>
                        <input
                          ref={addInputs}
                          name="pwd"
                          required
                          type="password"
                          className="form-control"
                          id="repeatPwd"
                        />
                 <p className="text-danger mt-1"> {validation} </p>

                </div>
                
                <div style={{display: "flex", flexDirection:"column", justifyContent: "center"}}>
                  <button className="btn btn-primary my-1 ">Sign Up</button>
                </div> 

              </form>
              <div style={{display: "flex", flexDirection:"column", justifyContent: "center"}}>
                <button className="btn btn-danger my-2"
                  onClick={signGoogle}
                >
                  Sign In With Google
                </button>     
              </div>
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

export default SignUpModal
