/* This is the old class component that we converted to functional component */

import { Component } from "react";

import './card.styles.css';

class Card extends Component {

    render() {

        const { id, name, email, className } = this.props.monster;

        return (
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
}

export default Card;