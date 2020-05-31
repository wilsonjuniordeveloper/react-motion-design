import React from 'react'
import {Container} from '../styles/index'
import {useAuth} from '../context/auth'


function Login (){
    const { signed, user, signIn } = useAuth()

    console.log(signed, user)
    
    async function handleSignIn(){
        signIn();    
    } 

    return(
        <Container>
            <img onClick={handleSignIn} src="https://cdn.dribbble.com/users/452635/screenshots/9708664/downloads/358.3.sign_up.png" alt="login" style={{width: '100%', marginTop:-50}}/>
        </Container>
    )
} 
export default Login