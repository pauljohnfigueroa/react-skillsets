
// import { Component } from "react"; // we need this for our class component
import Card from '../card/card.component';

import './card-list.styles.css';

// you can also destructure the monsters variable in here. see next line.
// const CardList = ({monsters}) => {
const CardList = ({ monsters }) => ( // <- use () instead of {} when doing implicit return.
    //const { monsters } = props;

    // Arrow function's implicit return was used here. 
    // The return keyword was not used.
    //return ( // return statement is not used in explicit return.
    <div className="card-list">
        { // do not forget the bracket when outputing javascript
            monsters.map((monster) => {
                return (
                    <Card monster={monster} className="card-container" />
                )
            })
        }
    </div>
    //);
);

export default CardList;