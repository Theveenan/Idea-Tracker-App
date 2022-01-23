import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class IdeasList extends Component {

    // constructor(props){
    //     super(props);

    //     this.deleteIdea = this.deleteIdea.bind(this);

    //     this.state = {ideas: []};
    // }

    // componentDidMount(){
    //     axios.get('http://localhost:5000/ideas/')
    //     .then(response => {
    //         this.setState({ideas: response.data});
    //     })
    // }

    render(){
        return(
            <div>
                <p>You are on the Ideas List Component!</p>
            </div>
        )
    }
}