import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import './FriendDetail.css'

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend,setFriend] = useState({});
       useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setFriend(data));
    }, [])
  
    return (
        <div className="detail-container">
            <br/>
            <div className="text-box">
            <h3 className="title-text">Friend No: {friendId}</h3>
            <h2 className="name-text">{friend.name}</h2>
            <h4>Mobile:{friend.phone}</h4>
            <h5 className="email-text">Email:{friend.email}</h5>
            <h5>Website:{friend.website}</h5>
            </div>
            <br/>
            <br/>
            <button onclick = "">Home</button>
        </div>
    );
};

export default FriendDetail;