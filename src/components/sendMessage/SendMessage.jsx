import React, { useState } from 'react';
import { APIURL } from '../../helpers/Contants';
import { postData } from '../../helpers/Functions';

const SendMessage = ({userId, channelId}) => {

    const[message, setMessage] = useState();

    const handleOnChange = (e) => {
        setMessage(e.target.value);
    }

    const handleOnSubmit = async (e) => {
        //e.preventDefault()
        await postData(`${APIURL}/channels/${channelId}/channel_messages`, { message: message, user_id:  userId})
        setMessage("")
    }
    
    return (
    <div>
        <form onSubmit={handleOnSubmit}>
                <input className="message-input" onChange={handleOnChange} value={message}/>

            <button type="submit" className="message-submit">
                Send Message
            </button>
        </form>
    </div>
    )
};

export default SendMessage;