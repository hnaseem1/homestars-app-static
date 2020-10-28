import './App.css';
import SendMessage from './components/sendMessage/SendMessage';
import ChannelMessage from './components/channelMessages/ChannelMessages';
import UserForm from './components/userForm/UserFrom';
import ChannelForm from './components/channelForm/ChannelForm';
import { useState } from 'react';

function App() {

  const[channelId, setChannelId] = useState(1);
  const [userId, setUserId] = useState(1);

  return (
    <div className="App">
      <ChannelForm setChannelId={setChannelId}/>
      <br />
      <br /> 
      <UserForm setUserId={setUserId}/>
      <br />
      <br /> 
      <ChannelMessage userId={userId} channelId={channelId}/>
      <br />
      <br /> 
      <SendMessage userId={userId} channelId={userId}/>
    </div>
  );
}

export default App;
