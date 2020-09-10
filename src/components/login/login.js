import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './styles.css'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const firebase = require("firebase");

export default function Login() {

    const history = useHistory();

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [loginErr, setLogginErr] = useState('')

    function userTyping(type, e) {
        switch (type) {
            case 'email':
                setEmail(e.target.value)
                break;
            case 'password':
                setPassword(e.target.value)
                break;
            default:
                break;
        }
    }

    function submitLogin(e) {
        e.preventDefault();
        
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            history.push('/fellesinfo');
        }, err => {
            setLogginErr('Server error')
            console.log(err);
        });
    }

    return(
        <main className="main">
            <Paper className="paper">
                <Typography className="loginHeader" component='h1' variant='h5'>
                    Logg In!
                </Typography>
                <form className="loginForm" onSubmit={(e) => submitLogin(e)}>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='login-email-input'>Fyll inn Epost</InputLabel>
                        <Input autoComplete='email' autoFocus id='login-email-input' onChange={(e) => userTyping('email', e)}></Input>
                    </FormControl>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='login-password-input'>Fyll inn passord</InputLabel>
                        <Input type='password' id='login-password-input' onChange={(e) => userTyping('password', e)}></Input>
                    </FormControl>
                    <Button type='submit' fullWidth variant='contained' color='primary' className="formSubmit">Log In</Button>
                </form>
                {
                    loginErr ?
                    <Typography className="formErrorText" component='h5' variant='h6'>
                        Feil brukernavn eller passord..
                    </Typography> :
                    null
                }
                <NavLink className="signupLink" to='/signup'>Opprett bruker!</NavLink>
            </Paper>
        </main>
    )
}
