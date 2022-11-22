import { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component {

    render() {
        return (
            <input
                // className="search-box"
                className={`search-box ${this.props.className}`}
                type="search"
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
            // avoid putting anonymous function code inside an event handler
            // that may iccur performance hits because of how Javascript recreates the function every time
            // the component gets rendered. 
            // put it in a method instead.
            />
        );
    }
}

export default SearchBox