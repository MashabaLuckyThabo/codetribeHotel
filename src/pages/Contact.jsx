import React, {useState} from 'react'
import  {useHistory} from "react-router-dom";
import {Link} from "react-router-dom"
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../config/firebase'
const Contact = () => {

     const [email, setEmail] = useState('');
     const [password, setPassword] = useState("");

    let history = useHistory();
    const Register = () => {
        createUserWithEmailAndPassword(auth,email, password).then(()=>{
            history.push("/");
        }).catch((error)=>{
            console.log(error);
        })
    

    };
return (
<div className="container contact">
   
   
            <div className="card shadow-lg border-0 p-4">
         
                <div class="form-group">
                     <label for="lastname">Username</label>
                     <input type="text" name="usertname" id="username" class="form-control"/>
                     <small class="form-text text-muted">
                        This should be your username.
                     </small>
                </div>
                <div class="form-group">
                     <label for="username">Email</label>
                     <input type="email" name="email" id="email" class="form-control" onChange={(e)=>setEmail(e.target.value)} required/>
                     <div class="invalid-feedback">Please enter a valid email.</div>
               </div>
               <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" name="password" id="password" class="form-control" onChange={(e)=>setPassword(e.target.value)}  />
                </div>
                <div className="mt-5 col-md-6 col-12 ">
                <button onClick={Register} class="btn btn-primary">Submit</button>
                </div>
            
            </div>
      

   

 


</div>
)
}
export default Contact