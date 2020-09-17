import { indigo } from '@material-ui/core/colors';
import React from 'react'
import './styles.css'

class ChatViewComponent extends React.Component {

    componentDidUpdate = () => {
        const container = document.getElementById('chatview-container');
        if(container) 
            container.scrollTo(0, container.scrollHeight);
    }

    render() {

        const { chat, user } = this.props;

        if(chat === undefined) {
            return(<main id='chatview-container' className='content'></main>);
        } else {
            return(
                <div className="chatViewContainer">
                    <div className='chatHeader'>
                        Din samtale med {chat.users.filter(_usr => _usr !== user)[0]}
                    </div>
                    <main id='chatview-container' className='content'>
                        {
                        chat.messages.map((_msg, _index) => {
                            if(_index === 0) {
                                return null
                            } else {
                                return(
                                    <div key={_index} className={_msg.sender === user ? 'userSent' : 'friendSent'}>
                                        {_msg.message}
                                    </div>
                                );
                            }
                        })  
                        }
                    </main>
                </div>
            );
        }
    }
}

export default ChatViewComponent;