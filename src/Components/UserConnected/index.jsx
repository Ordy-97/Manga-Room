import React, {useContext} from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBBtn } from 'mdb-react-ui-kit';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../utils/Context';
import { toast } from 'react-hot-toast';


export default function UserConnected() {

    const { currentUser } = useContext(UserContext)

    const navigate = useNavigate()

    const logOut = async () => {
        try {
          await signOut(auth)
          navigate('/')
          toast('Good bye ! Hope we will see each other soon 👋.')
          console.log('Good bye ! Hope we will see each other soon 👋.')
        } catch (error) {
            alert("For some reasons, we can't deconnect! Please check your internet connexion and retry.")
        }

    }


    return (
        <>
        <MDBDropdown group>
            <MDBDropdownToggle color='dark' style={{backgroundColor: "#000"}}>
                <i class="fa-solid fa-user-check fa-lg" style={{color: "#8fafe6"}} />
            </MDBDropdownToggle>
            <MDBDropdownMenu style={{padding : "7px"}}>
                <MDBDropdownItem>
                    <h4>{currentUser.email}</h4> 
                </MDBDropdownItem>
                <MDBDropdownItem style={{
                    display : "flex", 
                    flexDirection : "column", 
                    justifyContent:"center",
                    margin : "7px"
                    }}
                >
                    <MDBBtn onClick={
                        logOut
                    }>
                        Log Out 
                    </MDBBtn>
                
                </MDBDropdownItem>
            </MDBDropdownMenu>
        </MDBDropdown>
    </>
  );
}