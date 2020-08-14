import React from 'react'
import { Link } from 'react-router-dom'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import styles from './styles'
const firebase = require("firebase");


class SignupComponent extends React.Component {

    constructor() {
        super();

        this.state = {
            email: null,
            password: null,
            passwordConfirmation: null,
            signupError: ''
        }
    }

    render() {

        const { classes } = this.props;
        
        return(
            <main className={classes.main}>
                <Paper className={classes.paper}>
                <Typography component='h1' variant='h5'>
                    Opprett bruker!
                </Typography>
                <form onSubmit={(e) => this.submitSignup(e)} className={classes.form}>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='signup-email-input'>Fyll inn Epost</InputLabel>
                        <Input autoComplete='email' onChange={(e) => this.userTyping('email', e)} autoFocus id='signup-email-input'></Input>
                    </FormControl>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='signup-password-input'>Fyll inn passord</InputLabel>
                        <Input type='password' onChange={(e) => this.userTyping('password', e)} id='signup-password-input'></Input>
                    </FormControl>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='signup-password-confirmation-input'>Bekreft passord</InputLabel>
                        <Input type='password' onChange={(e) => this.userTyping('passwordConfirmation', e)} id='signup-password-confirmation-input'></Input>
                    </FormControl>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>Opprett bruker</Button>
                </form>
                {
                    this.state.signupError ? 
                    <Typography className={classes.errorText} component='h5' variant='h6'>
                        {this.state.signupError}
                    </Typography> :
                    null
                }
                <Typography component='h5' variant='h6' className={classes.hasAccountHeader}>Har allerede bruker?</Typography>
                <Link className={classes.logInLink} to='/login'>Log In!</Link>
                </Paper>
            </main>
        );
    }

    formIsValid = () => this.state.password === this.state.passwordConfirmation;

    userTyping = (type, e) => {
        switch (type) {
            case 'email':
                this.setState({ email: e.target.value });
                break;
            case 'password':
                this.setState({ password: e.target.value });
                break;
            case 'passwordConfirmation':
                this.setState({ passwordConfirmation: e.target.value });
                break;
            default:
                break;
        }
    }

    buildDocKey = () => [this.state.email, 'kriss122830@gmail.com'].sort().join(':');

    submitSignup = (e) => {
        e.preventDefault();

        if(!this.formIsValid()) {
            this.setState({ signupError: 'Password do not match!' });
            return;
        }

        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(authRes => {
            console.log(authRes)
            const userObj = {
                email: authRes.user.email,
                id: authRes.user.uid
            };
            const docKey = this.buildDocKey(this.state.email, 'kriss122830@gmail.com');
            console.log(docKey)
            firebase
                .firestore()
                .collection('users')
                .doc(this.state.email)
                .set(userObj)
                .then(() => {
                    this.props.history.push('/fellesinfo')
                }, dbError => {
                    console.log(dbError);
                    this.setState({ signupError: 'Failed to add user' });
                })
                firebase.firestore().collection('chats').doc(docKey).set({
                    receiverHasRead: false,
                    users: [this.state.email, 'kriss122830@gmail.com'],
                    messages: [{
                        message: 'En ny samtale er opprettet.',
                        sender: this.state.email
                    }]
                });
                console.log('chat exist')
        }, authError => {
            console.log(authError);
            this.setState({ signupError: 'Failed to add user '});
        })

    }

}

export default withStyles(styles)(SignupComponent);