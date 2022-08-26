import React,{useState,useEffect} from 'react';
import {  StyledContainer,StyledFormHeader,StyledFormContainer,StyledInputContainer,StyledButtonContainer} from './Login.styled'
import { Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {Button, IconButton} from "@mui/material";
import Headers from '../Header/Header';
import LoginIcon from '@mui/icons-material/Login';


export const Login = () => {
    const [registerData, setRegisterData] = useState({
        name:"",
        email :"",
        password:"",
        confirmedPassword:"",
        });


        const handleChange=(e)=>{
            setRegisterData((prevState)=>({
                ...prevState,
                [e.target.name]: e.target.value,

            }));

        }
        const submitData =(e)=>{
            e.preventDefault();
        }
        
        const {email, password} = registerData;

      
  return( <>
  <StyledContainer>
    <StyledFormHeader>
        <h1>
            <LoginIcon/>
            Login
            
        </h1>
        <p>Please Login to your account</p>
    </StyledFormHeader>

    <StyledFormContainer>
        <form onSubmit={submitData}>
           

            <StyledInputContainer>
                <input 
                type='email'
                id="email"
                name="email"
                value={email}
                placeholder = "Enter Your Email"
                onChange = {handleChange}

                />
                </StyledInputContainer>    

                <StyledInputContainer>
                <input 
                type='password'
                id="password"
                name="password"
                value={password}
                placeholder = "Enter Your Password"
                onChange = {handleChange}

                />
                </StyledInputContainer>

               

                 <StyledButtonContainer>

                    <Button disabled = {email ===''|| password ==='' }
                    variant='contained'
                    color ='primary'
                    type='submit'
                    >
                        Login
                    </Button>
                 </StyledButtonContainer>
   
 

     </form>
     </StyledFormContainer>
    

  </StyledContainer>
  </>
  )
}
export default Login;
