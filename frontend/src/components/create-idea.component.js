import axios from 'axios';
import React, {Component} from 'react';

export default class CreateIdea extends Component {
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            description: '',
            users: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/users/')
        .then(response =>{
            if (response.data.length > 0){
                this.setState({
                    users: response.data.map(eachUser => eachUser.username),
                    username: response.data[0].username
                })
            }else{
                
            }
        })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        const idea = {
            username: this.state.username,
            description: this.state.description,
        }

        console.log(idea);

        axios.post('http://localhost:5000/ideas/add', idea)
        .then(res => console.log(res.data))
        .catch((error) => {
        console.log("catched");
        if (error.response){
            console.log("Response Error");
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }else if(error.request){           
            console.log("Request Error");
        }else if(error.message){
            console.log("Message Error");
        }});

        window.location = '/';
    }

    render(){
        return(
            <div>
                <h3>Create New Idea!</h3>
                <form onSubmit = {this.onSubmit}>

                    <div className = "form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function(user) {
                                return <option 
                                    key={user}
                                    value={user}>{user}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="submit" value="Create Idea" className="btn btn-primary" />
                    </div>

                </form>

            </div>
        )
    }
}