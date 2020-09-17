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
    const [adresse, setAdresse] = useState(null)
    const [password, setPassword] = useState(null)
    const [passwordConfirmation, setPasswordConfirmation] = useState(null)
    const [telefon, setTelefon] = useState(null)
    const [age, setAge] = useState(null)
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [gender, setGender] = useState(null)
    const [goals, setGoals] = useState(null)
    const [signupErr, setSignupErr] = useState('')

    function userTyping(type, e) {
        switch (type) {
            case 'fullName':
                setFullName(e.target.value)
                    break;
            case 'email':
                setEmail(e.target.value)
                break;
            case 'adresse':
                setAdresse(e.target.value)
                break;
            case 'password':
                setPassword(e.target.value)
                break;
            case 'passwordConfirmation':
                setPasswordConfirmation(e.target.value)
                break;
            case 'telefon':
                setTelefon(e.target.value)
                break;
            case 'alder':
                setAge(e.target.value)
                break;
            case 'høyde':
                setHeight(e.target.value)
                break;
            case 'vekt':
                setWeight(e.target.value)
                break;
            case 'gender':
                setGender(e.target.value)
                break;
            case 'goals':
                setGoals(e.target.value)
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

        if(!fullName || !email || !adresse || !password || !passwordConfirmation || !telefon || gender === null || !age || !height || !weight || !goals) {
            e.preventDefault()
            alert('Alle felt må fylles ut..')
        } else {
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
                adress: adresse, 
                id: authRes.user.uid,
                number: telefon,
                age: age,
                height: height,
                weight: weight,
                gender: gender,
                goals: goals
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
                        message: '',
                        sender: email
                    }]
                });
                console.log('chat exist')
        }, authError => {
            console.log(authError);
            setSignupErr('Failed to add user')
        })
        }
    }

    return(
        <main className="signupMain">
            <Paper className="signupPaper">
            <Typography className="signupHeader" component='h1' variant='h5'>
                Opprett bruker!
            </Typography>
            <form onSubmit={(e) => submitSignup(e)} className="signupForm">
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='fullName'>Fult navn</InputLabel>
                        <Input autoComplete='firstName' onChange={(e) => userTyping('fullName', e)} autoFocus id='firstName'></Input>
                    </FormControl>
                    <div className="emailOgFultNavn">
                    <FormControl required margin='normal'>
                        <InputLabel htmlFor='signup-email-input'>Epost</InputLabel>
                        <Input autoComplete='email' onChange={(e) => userTyping('email', e)} id='signup-email-input'></Input>
                    </FormControl>
                    <FormControl required  margin='normal'>
                        <InputLabel htmlFor='signup-adresse-input'>Adresse...</InputLabel>
                        <Input type='adress' onChange={(e) => userTyping('adresse', e)} id='signup-adresse-input'></Input>
                    </FormControl>
                    </div>
                    <div className="passwordSection">
                    <FormControl required margin='normal'>
                        <InputLabel htmlFor='signup-password-input'>Passord</InputLabel>
                        <Input type='password' onChange={(e) => userTyping('password', e)} id='signup-password-input'></Input>
                    </FormControl>
                    <FormControl required margin='normal'>
                        <InputLabel htmlFor='signup-password-confirmation-input'>Bekreft passord</InputLabel>
                        <Input type='password' onChange={(e) => userTyping('passwordConfirmation', e)} id='signup-password-confirmation-input'></Input>
                    </FormControl>
                    </div>
                    <div className="adresseOgTelefon">
                    <FormControl required  margin='normal'>
                        <InputLabel htmlFor='signup-telefon-input'>Telefon...</InputLabel>
                        <Input type='telefon' onChange={(e) => userTyping('telefon', e)} id='signup-telefon-input'></Input>
                    </FormControl>
                    <FormControl required  margin='normal'>
                        <InputLabel htmlFor='signup-alder-input'>Alder...</InputLabel>
                        <Input type='age' onChange={(e) => userTyping('alder', e)} id='signup-alder-input'></Input>
                    </FormControl>
                    </div>
                    <div className="alderHøydeVekt">
                    <FormControl required  margin='normal'>
                        <InputLabel htmlFor='signup-høyde-input'>Høyde...</InputLabel>
                        <Input type='height' onChange={(e) => userTyping('høyde', e)} id='signup-høyde-input'></Input>
                    </FormControl>
                    <FormControl required  margin='normal'>
                        <InputLabel htmlFor='signup-vekt-input'>Vekt...</InputLabel>
                        <Input type='weight' onChange={(e) => userTyping('vekt', e)} id='signup-vekt-input'></Input>
                    </FormControl>
                    </div>
                    <br />
                    <select onChange={(e) => userTyping('gender', e)}>
                        <option value="0">Velg kjønn</option>
                        <option value="1">Mann</option>
                        <option value="2">Kvinne</option>
                    </select>
                    <br/>
                    <br/> 
                    <textarea className="textArea" onChange={(e) => userTyping('goals', e)} placeholder="Fyll inn din målsetting... *"></textarea>
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






