
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Navbar from "./components/navbar.component";
import IdeasList from "./components/ideas-list.component";
import EditIdea from "./components/edit-idea.component";
import CreateIdea from "./components/create-idea.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (
    <div>
        
        <Router>
          <div className="container">
          <Navbar/>
          <br/>
          <Routes>
            <Route exact path="/" element={<IdeasList />}/>
            <Route path="/edit/:id" element={<EditIdea/>}/>
            <Route path="/create" element={<CreateIdea/>}/>
            <Route path="/user" element={<CreateUser/>}/>
          </Routes>
          </div>
        </Router>

    </div>
  );
}

export default App;
