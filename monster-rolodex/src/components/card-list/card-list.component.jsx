import { Component } from "react"; // we need this for our class component
import Card from '../card/card.component';

import './card-list.styles.css';

class CardList extends Component {

    render() {
        //console.log('Render from CardList component.');
        const { monsters } = this.props;
        return (
            <div className="card-list">
                { // do not forget the bracket when outputing javascript
                    monsters.map((monster) => {
                        return (
                            <Card monster={monster} className="card-container" />
                        )
                    })
                }
            </div>
        );
    };
}

export default CardList;