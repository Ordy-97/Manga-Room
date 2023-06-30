// import React, {useContext} from 'react'
// import { UserContext } from '../../utils/Context'

// function SignInModal() {
//   const { modalState, toggleModals, signIn } = useContext(UserContext)
//   const closeModal = () => {
//     toggleModals("close")
//   }

//   return (
//     <>
//     {
//       modalState.signInModal && (
//       <div className="position-fixed top-0 vw-100 vh-100">
//       <div
//         className="w-100 h-100 bg-dark bg-opacity-75"
//         onClick={closeModal}
//       > </div>
//       <div
//         className="position-absolute top-50 start-50 translate-middle"
//         style={{ minWidth: "400px", backgroundColor : "#fff", borderRadius : "10px", padding :"6px" }}
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Sign In</h5>
//               <button onClick={closeModal} className="btn-close"></button>
//             </div>

//             <div className="modal-body">
//               <form
//                 className="sign-up-form"
//               >
//                 <div className="mb-3">
//                   <label htmlFor="signInEmail" className="form-label">
//                     Email adress
//                   </label>
//                   <input
                    
//                     name="email"
//                     required
//                     type="email"
//                     className="form-control"
//                     id="signInEmail"
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="signInPwd" className="form-label">
//                     Password
//                   </label>
//                   <input
                    
//                     name="pwd"
//                     required
//                     type="password"
//                     className="form-control"
//                     id="signInPwd"
//                   />
                  
//                 </div>

//                 <button className="btn btn-primary">Submit</button>
//               </form> <br />

//               <p>Don't you have an account? <span style={{textDecoration:"underline", cursor:"mouse"}} onClick={() => toggleModals("signUp")}>Sign Up here</span> </p>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     )
//     }
//     </>
//   )
// }

// export default SignInModal
import React, {useContext, useRef, useState} from 'react'
import { UserContext } from '../../utils/Context'
import { useNavigate } from 'react-router-dom'

function SignInModal() {
  const { modalState, toggleModals, signIn } = useContext(UserContext)
  const [validation, setValidation] = useState("")

  const navigate = useNavigate()
    
  const inputs = useRef([])

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
        // console.log(credential)
    } catch {
        //console.dir(err)
        setValidation("Email and/or password incorrect !")
        
    }

  }


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

                <button className="btn btn-primary">Submit</button>
              </form> <br />

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
