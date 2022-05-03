import React, {useEffect, useState} from "react";
import {Avatar} from '@mui/material'
import './SidebarChat.css'

const SidebarChat = (props) => {
    const [seed, setSeed] = useState(0)

    const {roomName} = props;

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))

    }, [])

    return (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/b${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>{roomName}</h2>
                <p>Last message...</p>
            </div>
        </div>

    )

}

export default SidebarChat