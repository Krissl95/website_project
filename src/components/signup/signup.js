import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import './styles.css'

const firebase = require("firebase");


export default function Signup() {

    const history = useHistory()
    const [fullName, setFullName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [passwordConfirmation, setPasswordConfirmation] = useState(null)
    const [signupErr, setSignupErr] = useState('')

    function userTyping(type, e) {
        switch (type) {
            case 'fullName':
                setFullName(e.target.value)
                    break;
            case 'email':
                setEmail(e.target.value)
                break;
            case 'password':
                setPassword(e.target.value)
                break;
            case 'passwordConfirmation':
                setPasswordConfirmation(e.target.value)
                break;
            default:
                break;
        }
    }

    function passwordValid() {
        if(password === passwordConfirmation) {
            return true
        } else {
            return false
        }
    }

    function submitSignup(e) {
        e.preventDefault()

        if(!passwordValid()) {
            setSignupErr('Password do not match!')
            console.log(password, passwordConfirmation)
            return;
        }

        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(authRes => {
            console.log(authRes)
            const userObj = {
                fullName: fullName,
                email: authRes.user.email,
                id: authRes.user.uid
            };
            const docKey = [email, 'kriss122830@gmail.com'].sort().join(':');
            firebase
                .firestore()
                .collection('users')
                .doc(email)
                .set(userObj)
                .then(() => {
                    history.push('/login')
                }, dbError => {
                    console.log(dbError);
                    setSignupErr('Failed to add user')
                })
                firebase.firestore().collection('chats').doc(docKey).set({
                    receiverHasRead: false,
                    users: [email, 'kriss122830@gmail.com'],
                    messages: [{
                        message: 'En ny samtale er opprettet.',
                        sender: email
                    }]
                });
                console.log('chat exist')
        }, authError => {
            console.log(authError);
            setSignupErr('Failed to add user')
        })
    }

    return(
        <main className="signupMain">
            <Paper className="signupPaper">
            <Typography className="signupHeader" component='h1' variant='h5'>
                Opprett bruker!
            </Typography>
            <form onSubmit={(e) => submitSignup(e)} className="signupForm">
                <FormControl required fullWidth margin='normal'>
                    <InputLabel htmlFor='fullName'>Fyll inn fult navn</InputLabel>
                    <Input autoComplete='firstName' onChange={(e) => userTyping('fullName', e)} autoFocus id='firstName'></Input>
                </FormControl>
                <FormControl required fullWidth margin='normal'>
                    <InputLabel htmlFor='signup-email-input'>Fyll inn epost</InputLabel>
                    <Input autoComplete='email' onChange={(e) => userTyping('email', e)} id='signup-email-input'></Input>
                </FormControl>
                <FormControl required fullWidth margin='normal'>
                    <InputLabel htmlFor='signup-password-input'>Fyll inn passord</InputLabel>
                    <Input type='password' onChange={(e) => userTyping('password', e)} id='signup-password-input'></Input>
                </FormControl>
                <FormControl required fullWidth margin='normal'>
                    <InputLabel htmlFor='signup-password-confirmation-input'>Bekreft passord</InputLabel>
                    <Input type='password' onChange={(e) => userTyping('passwordConfirmation', e)} id='signup-password-confirmation-input'></Input>
                </FormControl>
                <Button type='submit' fullWidth variant='contained' color='primary' className="signupSubmit">Opprett bruker</Button>
            </form>
            {
                signupErr ? 
                <Typography className="signupErrText" component='h5' variant='h6'>
                    {signupErr}
                </Typography> :
                null
            }
            <NavLink className="loginLink" to='/login'>Har allerede bruker?</NavLink>
            </Paper>
        </main>
    )
}






