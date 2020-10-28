import { React, useState, useEffect } from 'react';
import { APIURL } from '../../helpers/Contants';

const ChannelMessage = ({userId, channelId}) => {

    const [messages, setMessages] = useState([
        { message: "Loading ...", created_at: "" }
    ]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let unmounted = false;
        const getMessages = async () => {
            const response = await fetch(`${APIURL}/channels/${channelId}/channel_messages`);
            const body = await response.json();
            if (!unmounted) {
                setMessages(body.map(({ message, created_at }) => ({ message: message, created_at: created_at })));
                setLoading(false);
            }
        }
        getMessages();
        return () => {
            unmounted = true;
        };
    }, [channelId])
    
    
    return (
        <div name="messages" id="messages" disabled={loading} >
        {
            messages.map(({ message, created_at }) => (
                <div key={message}> 
                    <p>{message}</p>
                    <span class="time-right">{created_at}</span>
                </div>
            ))
        }
        </div>
    )
};

export default ChannelMessage;