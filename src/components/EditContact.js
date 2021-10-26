import React from 'react';
import { Link,useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';


const EditContact = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [number, setNumber] = useState("");
    const {id} = useParams();

    const contacts = useSelector(state=>state);
    const currenContact = contacts.find(contact=> contact.id === parseInt(id));
  

useEffect(() => {
  if (currenContact){
    setName(currenContact.name);
    setEmail(currenContact.email);
    setNumber(currenContact.number);
  }
}, [currenContact]);

const handleSubmit = (e) =>{
  e.preventDefault();

  const checkEmail = contacts.find(
    (contact) => contact.id !== parseInt(id) && contact.email === email
    );
  
  const checkNumber = contacts.find(
    (contact) => contact.id !== parseInt(id) && contact.number ===  parseInt(number)
    );

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
    id: parseInt(id),
    name,
    email,
    number
  }
 dispatch({type:"UPDATE_CONTACT", payload:data});
 toast.success("Student Updated Successfully!");
 history.push("/");
};



  

    return (
        <div className="container">
        {
          currenContact? (
            <>
            <div className="row">
        <h1 className="display-3  my-5 text-center">
           Edit Student {id}
        </h1>
             <div className="col-md-6  shadow mx-auto p-5">
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
                  <input name="login" id="login" className="btn  btn-dark" type="submit" value="Update Student" />
                   <Link to="/"  className="btn  btn-danger ml-3" >Cancel</Link>
                  </div>
                </form>
             </div>
        </div>
         </>
          ):(
            <h1 className="display-3  my-5 text-center">
            Student {id} Doesn't Exists
        </h1>
          )
         } 
        
    </div>
    );
};

export default EditContact
