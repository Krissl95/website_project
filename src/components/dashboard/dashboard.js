import React from 'react'
import ChatListComponent from '../chatlist/chatList'
import ChatViewComponent from '../chatview/chatView'
import ChatTextBoxComponent from '../chattextbox/chatTextBox'
import './styles.css'

const firebase = require("firebase");

class DashboardComponent extends React.Component {

    constructor() {
        super();

        this.state = {
            selectedChat: null, 
            email: null,
            chats: []
        };
    }

    render() {
        return(
        <div className={'main-body'}>
            <ChatListComponent 
            history={this.props.history}
            selectChatFn={this.selectChat}
            chats={this.state.chats}
            userEmail={this.state.email}
            selectedChatIndex={this.state.selectedChat}
            ></ChatListComponent>
            <ChatViewComponent
                user={this.state.email}
                chat={this.state.chats[this.state.selectedChat]}></ChatViewComponent>
            {
                this.state.selectedChat !== null && !this.state.newChatFormVisible ? 
                <ChatTextBoxComponent messageReadFn={this.messageRead} submitMessageFn={this.submitMessage}></ChatTextBoxComponent> : 
                null
            }
        </div>
        );
    }

    selectChat = async (chatIndex) => {
        await this.setState({ selectedChat: chatIndex, newChatFormVisible: false });
        this.messageRead();
    }

    submitMessage = (msg) => {
        const docKey = this.buildDocKey(this.state.chats[this.state.selectedChat].users.filter(_usr => _usr !== this.state.email)[0]);
        firebase
        .firestore()
        .collection('chats')
        .doc(docKey)
        .update({
            messages: firebase.firestore.FieldValue.arrayUnion({
                sender: this.state.email,
                message: msg,
                timestamp: Date.now()
            }),
            receiverHasRead: false
        });
    }

    buildDocKey = (friend) => [this.state.email, friend].sort().join(':');

    messageRead = () => {
        const docKey = this.buildDocKey(this.state.chats[this.state.selectedChat].users.filter(_usr => _usr !== this.state.email)[0]);
        if(this.clickedChatWhereNotSender(this.state.selectedChat)) {
            firebase
            .firestore()
            .collection('chats')
            .doc(docKey)
            .update({ receiverHasRead: true })
        } else {
            console.log('Clicked the message where the user was the sender');
        }
    }

    clickedChatWhereNotSender = (chatIndex) => this.state.chats[chatIndex].messages[this.state.chats[chatIndex].messages.length - 1].sender !== this.state.email;

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(async _usr => {
            if(!_usr)
            this.props.history.push('/login');
            else {
                await firebase
                .firestore()
                .collection('chats')
                .where('users', 'array-contains', _usr.email)
                .onSnapshot(async res => {
                    const chats = res.docs.map(_doc => _doc.data());
                    await this.setState({ 
                        email: _usr.email,
                        chats: chats
                     });
                     console.log(this.state);
                })
            }
        })
    }

}

export default DashboardComponent;