import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import NotificationImportant from '@material-ui/icons/NotificationImportant';
import './styles.css'

class ChatListComponent extends React.Component {
    render() {
        if(this.props.chats.length > 0) {
            return(
                <main className='chatlist-main-div'>
                    <List className='chatlist-list'>
                        {
                        this.props.chats.map((_chat, _index) => {
                            return(
                                <div key={_index} className="listDiv">
                                    <ListItem 
                                        onClick={() => this.selectChat(_index)} 
                                        className='listItem' 
                                        selected={this.props.selectedChatIndex === _index} 
                                            >
                                            <ListItemAvatar>
                                                <Avatar className="avatar" alt='Remy Sharp'>{_chat.users.filter(_user => _user !== this.props.userEmail)[0].split('')[0]}</Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                            className="primaryText"
                                            primary={_chat.users.filter(_user => _user !== this.props.userEmail)[0]}
                                            secondary={
                                                <React.Fragment>
                                                    <Typography className="listText" component='span'>
                                                        {
                                                            _chat.messages[_chat.messages.length - 1].message.substring(0, 30)
                                                        }
                                                    </Typography>
                                                </React.Fragment>
                                                }>                                            
                                            </ListItemText>
                                            {
                                                _chat.receiverHasRead === false && !this.userIsSender(_chat) ?
                                                <ListItemIcon>
                                                    <NotificationImportant className='unreadMessage'></NotificationImportant>
                                                </ListItemIcon> : null
                                            }
                                    </ListItem>
                                    <Divider></Divider>
                                </div>
                            )
                        })
                        }
                    </List>
                </main>
            );
        } else {
            return(
                <main className={'chatlist-main-div'}>
                    <List></List>
                </main>
            );
        }
    }

    selectChat = (index) => {
        this.props.selectChatFn(index);
    }

    userIsSender = (chat) => chat.messages[chat.messages.length -1].sender === this.props.userEmail;

}

export default ChatListComponent;