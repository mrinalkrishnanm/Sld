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
            <div className="pa3 bg-dark-blue white bb bw3 b--gold ">
              <h1 className="dtc ph7 baskerville f2 lh-copy mr5"> SLD APP</h1>
            </div>
			);
	}
}

module.exports = Navbar;
