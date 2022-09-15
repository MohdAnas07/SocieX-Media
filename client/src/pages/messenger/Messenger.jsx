import React from 'react'
import ChatOnline from '../../components/chatOnline/ChatOnline'
import Conversation from '../../components/coversation/Conversation'
import Message from '../../components/message/Message'
import Topbar from '../../components/topbar/Topbar'
import './messenger.css'

import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Messenger() {
    return (
        <>
            <Topbar />
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input type="text" className="chatMenuInput" placeholder='search for friends' />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                    </div>
                </div>

                <div className="chatBox">
                    <div className="chatBoxInfoBar">
                        <div className="chatBoxInfoBarLeft">
                            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt="" className="chatBoxInfoBarImg" />
                            <span className="chatBoxInfoBarName">john doe</span>
                        </div>
                        <div className="chatBoxInfoBarRight">
                            <VideocamIcon className='chatBoxIcons' />
                            <CallIcon className='chatBoxIcons' />
                            <MoreVertIcon className='chatBoxIcons' />

                        </div>
                    </div>
                    <div className="chatBoxWrapper">
                        <div className="chatBoxTop">
                            <Message />
                            <Message own={true} />
                            <Message />
                            <Message own={true} />
                            <Message />
                            <Message own={true} />
                            <Message />
                            <Message own={true} />
                            <Message />
                            <Message own={true} />
                            <Message />
                            <Message own={true} />
                            <Message />
                        </div>
                        <div className="chatBoxBottom">
                            <input type="text" className="chatMessageInput" placeholder='Type something...' />
                            <button className="chatSubmitButton">Send</button>
                        </div>
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <h3>Online Friends</h3>
                        <ChatOnline />
                        <ChatOnline />
                        <ChatOnline />
                        <ChatOnline />
                        <ChatOnline />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Messenger