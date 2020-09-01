import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Friend from '../Friend/Friend';
import './Home.css'

const Home = () => {
const[friends,setFriends] = useState([]);
 useEffect(() => {
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data =>setFriends(data));
 }, [])
    return (
        <div>
            <h2 className="title-text">Total Friends: {friends.length}</h2>
            {
                friends.map((friend => <Friend friend={friend}></Friend>))
            }
        </div>
    );
};

export default Home;