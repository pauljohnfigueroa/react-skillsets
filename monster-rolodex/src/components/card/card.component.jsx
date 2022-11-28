//import { Component } from "react";

import './card.styles.css';


const Card = (props) => {

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