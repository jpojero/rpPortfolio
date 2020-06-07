import React, {Component} from 'react';
import './header.css';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            people: []
        }
    }

    componentDidMount(){
        fetch('/api/people')
            .then(res => res.json())
            .then(people => this.setState({people},() => console.log("People Fetched... ", people)));
    }

    render(){
        return(
            <div>
                <p class="test">Test</p>
                <ul>
                    {this.state.people.map(people =>
                        <li key={people.id}>{people.fName} {people.lName} </li>    
                    )}
                </ul>
            </div>
        );
    }
}

export default Header;