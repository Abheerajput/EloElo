import React, { useState, useEffect } from "react";
import NoteContext from "./NoteContext";
import { io } from "socket.io-client"; // if using socket.io-client

const NoteState = (props) => {
    // Initialize WebSocket state
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [name, setName] = useState("ertyu");
    const [className, setClassName] = useState("6b");

    // Connect to WebSocket server
    useEffect(() => {
        const newSocket = io("http://localhost:4000" , { transports: ["websocket"]  , auth : {
            token : localStorage.getItem('token')
        }}); // replace with your WebSocket URL
        console.log(`newSocket ${newSocket?.connected}`)
        setSocket(newSocket);

        // Handle incoming messages from WebSocket server
        newSocket.on("message", (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        // Clean up WebSocket connection when the component is unmounted
        return () => {
            newSocket.disconnect();
        };
    }, []);

    // Send a message through the WebSocket
    const sendMessage = (message) => {
        if (socket) {
            socket.emit("message", message);
        }
    };

    // Define your state
    const state = {
        name,
        class: className,
        messages,
        sendMessage, // Provide method to send messages
    };

    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
