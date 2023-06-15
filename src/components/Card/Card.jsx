import React from 'react';
// import './Card.scss';

const Card = ({ title, content , img }) => {
    return (
        <div className="card">
            <img src={img} alt=''/>
            <p className="card-title">{title}</p>
            <h5 className="card-content">{content}</h5>
        </div>
        
    );
};

export default Card;