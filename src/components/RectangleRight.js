import React, {useState} from "react";
import "./RectangleRight.css"
import google from "./google.jpeg";
import fb from "./fb.png"

function RectangleRight(){
let [user, setUser]=useState({name:"", email:"", password:"", confirmPassword:""});
let [error, setError]=useState("");
let [success, setSuccess]=useState("");

function validateUser(event){
    event.preventDefault();
    if(user.name==="" || user.email===""|| user.password==="" || user.confirmPassword===""){
        setSuccess("");
        setError("Please fill all the fields!");
    }
    else{
        if(!user.email.includes("@")){
            setError("Email should conatin @");
        }
        else{
            if(user.password!==user.confirmPassword)
                setError("Please Make sure your password and confirm password match!")
            else{
                setSuccess("Successfully Created!");
                setError("")
            }
        }
    }
}
    return (
        <div className="signup">

            <h1>Create Account</h1>

            <div className="signUpButton">
                <button><img src={google} alt="google"/>Signup with Google</button>
                <button><img src={fb} alt="faceBook"/>Signup with Facebook</button>
            </div>

            <span>- OR -</span>
            
            <form className="signUpForm"  onSubmit={validateUser}>
                <input type="text" placeholder="Full Name" onChange={(event)=>setUser({...user, name:event.target.value})}/>
                <input type="email" placeholder="Email Address"onChange={(event)=>setUser({...user, email:event.target.value})}/>
                <input type="password" placeholder="Password"onChange={(event)=>setUser({...user, password:event.target.value})}/>
                <input type="password" placeholder="Confirm Password"onChange={(event)=>setUser({...user, confirmPassword:event.target.value})}/>
                <button type="sumbit">Create Account</button>
            </form>
            <div className="message">
                { error && <h5 className="error">Error: {error}</h5>}
                { success && <h5 className="success">{success}</h5>}
            </div>
            
          
          
        </div>
    );

}

export default RectangleRight;