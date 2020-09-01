import React from 'react';
import './Friend.css'
import { Link, useHistory } from 'react-router-dom';
const Friend = (props) => {
    const{name,email,id} = props.friend;
    const history = useHistory();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url)

    }
    return (
        <div className="friend-container">
           <h2 className="name-text">Name:{name}</h2> 
           <h3 className="email-text">Email:{email}</h3>
   <Link to={`/friend/${id}`}>
   <button className="main-btn">Show Details</button>
   </Link>
   {/* <button onclick={() => handleClick(id)}>Show Details</button> */}

        </div>
    );
};

export default Friend;