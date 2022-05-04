import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat'
import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js'
import axios from './components/axios';
import Login from './components/Login';
import {useStateValue} from './components/StateProvider'

function App() {
    const[messages, setMessages] = useState([])
    const[{user}, dispatch] = useStateValue()
    const [currentRoom, setRoom] = useState("1")

    useEffect(() => {
        axios.get("/messages/sync").then(res => {
            setMessages(res.data)
        })
    }, [])

    const changeRoom = (roomNum) => {
        setRoom(roomNum)
        axios.get("/messages/sync?room=" + roomNum).then(res => {
            setMessages(res.data)
        })
    };

    useEffect(() => {
        const pusher = new Pusher('e9eb5617509a018ef074', {
            cluster: 'us3'
        });

        const channel = pusher.subscribe('messages');
        channel.bind('inserted', (data) => {
            setMessages([...messages, data])
        });
        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        }
    }, [messages])

    console.log(messages)

    return (
        <div className="app">
            {!user ? <Login /> : (
            <div className="app_body">
                <Sidebar roomForChat={changeRoom}/>
                <Chat messages={messages} room={currentRoom} theUser ={user}/>
            </div>
            )}
        </div>
  );
}

export default App;
