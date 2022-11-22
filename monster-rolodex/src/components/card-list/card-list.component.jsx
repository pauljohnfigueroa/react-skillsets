import { Component } from "react"; // we need this for our class component

class CardList extends Component {

    render() {
        console.log('Render from CardList component.');
        const { monsters } = this.props;

        return (
            <div> {/* make sure that there is only one top level component */}
                { // do not forget the bracket when outputing
                    monsters.map((monster) => {
                        return <h2 key={monster.id}>{monster.name}</h2>
                    })
                }
            </div>
        );
    };
}

export default CardList;