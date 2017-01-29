import React from 'react';
import Request from 'superagent';
import Router from 'react-router';
import { Navigation } from 'react-router';
import { browserHistory } from "react-router";

class Login extends React.Component{
	constructor(){
		super();
	}
	 HandleLogin(e) {
    	e.preventDefault;
    	var username = this.refs.username.value
    	var password = this.refs.password.value
    	var user={
    		username: username,
    		password: password
    	}
        console.log({user});
    	Request.post("http://localhost:3000/tokens/verify")
			.send({user:user})
			.end((err,res) => {
			console.log(res)
      		var response = JSON.parse(res.text).token
            localStorage.diary_user_token = response;
      		alert("login successful!!!");
            browserHistory.push("/dashboard");
		})
    }
	render(){
		return(
			<div className="login-wrapper">
				<div className="login-container">
            		<h1> Login</h1>
            		<input type="text" placeholder="Enter Username" ref="username" />
            		<input type="password" placeholder="Enter Password" ref="password" />
            		<input type="submit" label="Login" onClick = {this.HandleLogin.bind(this)}/>
            	</div>
            </div>
			);
	}
}


module.exports = Login;