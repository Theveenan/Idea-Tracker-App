import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Idea = props => (
    <tr>
      <td>{props.idea.username}</td>
      <td>{props.idea.description}</td>
      <td>
        <Link to={"/edit/"+props.idea._id}>edit</Link> | <a href="#" onClick={() => { props.deleteIdea(props.idea._id) }}>delete</a>
      </td>
    </tr>
  )

export default class IdeasList extends Component {

    constructor(props){
        super(props);

        this.deleteIdea = this.deleteIdea.bind(this);

        this.state = {ideas: []};
    }

    componentDidMount(){
        axios.get('http://localhost:5000/ideas/')
        .then(response => {
            this.setState({ideas: response.data});
        })
        .catch((error) => {
            console.log(error);
        })
    }

    deleteIdea(id) {
        axios.delete('http://localhost:5000/ideas/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          ideas: this.state.ideas.filter(elementItem => elementItem._id !== id)
        })
    }

    ideaList() {
        return this.state.ideas.map(currentIdea => {
          return <Idea idea={currentIdea} deleteIdea={this.deleteIdea} key={currentIdea._id}/>;
        })
    }

    render(){
        return(
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th>Username</th>
                    <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    { this.ideaList() }
                </tbody>
                </table>
            </div>
        )
    }
}