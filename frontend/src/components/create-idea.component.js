import React, {Component} from 'react';

export default class CreateIdea extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            description: '',
        }

        

    }

    render(){
        return(
            <div>
                <p>You are on the Create Idea Component!</p>
            </div>
        )
    }
}