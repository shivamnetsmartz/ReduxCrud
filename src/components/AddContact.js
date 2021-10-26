import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react"
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const AddContact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) =>{
    e.preventDefault();

    const checkEmail = contacts.find((contact) => contact.email === email && email);
    
    const checkNumber = contacts.find((contact) => contact.number ===  parseInt(number));

    if(!email || !number || !name){
      return toast.warning("Please Fill all fields!");
    }

    if(checkEmail){
      return toast.error("This email is already Exists!");
    }
    if(checkNumber){
      return toast.error("This Phone Number is already Exists!");
    }

    const data ={
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      number
    }
   dispatch({type:"ADD_CONTACT", payload:data});
   toast.success("Student Added Successfully!");
   history.push("/");
  };

  
 

    return (
      <div className="container">
        <div className="row">
        <h1 className="display-3  my-5 text-center">
           Add Student
        </h1>
             <div className="col-md-6  shadow mx-auto p-5">
                <h1 className="heading "> React Redux Contact Book</h1>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      />
                  </div>
    

                  <div className="form-group mt-3">
                    <input type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                       />
                  </div>
                 
                  <div className="form-group mt-3">
                    <input type="number"
                      name="number"
                      id="number"
                      className="form-control"
                      placeholder="Phone Number"
                      value={number}
                      onChange={e => setNumber(e.target.value)}
                       />
                  </div>
                  <div className="form-group mt-3">
                  <input name="login" id="login" className="btn btn-block btn-dark" type="submit" value="Add Student"  />
                  </div>
                </form>
             </div>
        </div>
    </div>
    )
}

export default AddContact;
