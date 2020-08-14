import React from 'react'
import TextField from '@material-ui/core/TextField'
import Send from '@material-ui/icons/Send'
import './styles.css'

class ChatTextBoxComponent extends React.Component {

    constructor() {
        super();

        this.state = {
            chatText: ''
        };
    }

    render() {

        return(
        <div className='chatTextBoxContainer'>
            <TextField
            placeholder='Send en melding... '
            onKeyUp={(e) => this.userTyping(e)}
            id='chattextbox'
            className='chatTextBox'
            onFocus={this.userClickedInput}></TextField>
            <Send onClick={this.submitMessage} className='sendBtn'></Send>
        </div>)
    }

    userTyping = (e) => e.keyCode === 13 ? this.submitMessage() : this.setState({ chatText: e.target.value });
    messageValid = (txt) => txt && txt.replace(/\s/g, '').length;
    submitMessage = () => {
        if(this.messageValid(this.state.chatText)) {
            this.props.submitMessageFn(this.state.chatText);
            document.getElementById('chattextbox').value = '';
        }
    }

    userClickedInput = () => this.props.messageReadFn();

}

export default ChatTextBoxComponent;