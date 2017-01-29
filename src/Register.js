import React from 'react';
import Request from 'superagent';
import Router from 'react-router';


class Register extends React.Component{
	constructor(){
		super()
	}
    HandleSubmit(e) {
    	e.preventDefault;
    	var firstname = this.refs.firstname.value
    	var lastname = this.refs.lastname.value
    	var username = this.refs.username.value
    	var email = this.refs.email.value
    	var password = this.refs.password.value
    	var user={
    		first_name: firstname,
    		last_name: lastname,
    		username: username,
    		email: email,
    		password: password,
    	}
        console.log({user});
    	Request.post("http://localhost:3000/users")
			.send({user:user})
			.end((err,res) => {
			console.log(res)
			if(res.status==200)
				alert("Registered");
            else
                alert("Registration failed");
		})
    }
	render(){
		return(
			<div className="register-wrapper">
                <div className="register-container">
                    <h1>Register</h1>
            	   <input type = "text" ref = "firstname" placeholder = "First Name" name="firstname"/>
            	   <input type = "text" ref = "lastname" placeholder = "Last Name" name="lastname"/>
            	   <input type = "text" ref = "username" placeholder = "User Name" name="username" />
            	   <input type = "text" ref = "email" placeholder = "E-Mail" name="email" />
            	   <input type = "password" ref = "password" placeholder = "Password" name="encrypted_password" />
            	   <input type = "submit" label = "Sign Up" onClick = {this.HandleSubmit.bind(this)} />
			    </div>
            </div>
			);
	}
}

module.exports = Register;