import React from 'react'
import {Button} from '@material-ui/core'
import './Login.css'
import { auth, provider } from '../firebase'
//import { onAuthStateChanged } from 'firebase/auth'

const Login = () => {
    const signIn = () => {

        auth.signInWithPopup(provider)
        .then(result => console.log(result))
        .catch(error => alert(error.message))
        
        
    }
    return (
        <div className="login">
            <div className="login_container">
                <img src="logo512.png" alt="whatsapp" />
                <div className="login_text">
                    <h1>Sign in to Messaging App</h1>
                </div>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login