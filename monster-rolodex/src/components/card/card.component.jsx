//import { Component } from "react";

import './card.styles.css';

// you can also destructure here, const Card = ({monster}}) => {
// or you can also destructure like this, 
// const Card = ({ monster: { id, name, email, className } }}) => {
const Card = (props) => {

    // and then use here, 
    // const { id, name, email, className } = monster;

    // I want to be explicit for now so I can understand how the "props" works better.
    const { id, name, email, className } = props.monster;

    return ( // Using explicit return
        <div key={id} className={className}>
            <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;