import React from "react";
import { Switch, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from "./components/navbar";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
const App= ()=> {
  return (
    <div className="App">
    {/* /add/edit/:id */}
    <ToastContainer />
    <Navbar />
    <Switch>
    <Route exact path="/" component={() => <Home/>}/>

  

    <Route exact path="/add">
  <AddContact />
    </Route>

    <Route exact path="/edit/:id">
    <EditContact />
    </Route>
    </Switch>
      
    </div>
  );
}

export default App;
