import React from 'react';
import { browserHistory } from "react-router";

class Navbar extends React.Component{
	constructor(){
		super();
	}
	toNotePage(){
		browserHistory.push("/note");
	}
	toAllUser(){
		browserHistory.push("/allusers");
	}
	toDashboard(){
		browserHistory.push("/quiz");
	}
	render(){
		return(
            <div className="pa3 bg-blue white ">
              <div className="dtc ph5"> SLD APP</div>
              <div className="dtc ph5 grow"  onClick={this.toDashboard}> Dashboard </div>
              <div className="dtc ph5 grow"  onClick={this.toNotePage}> View score</div>
              <div className="dtc ph5 grow "> logout</div>
            </div>
			);
	}
}

module.exports = Navbar;
