import React from 'react';
import API from './API';
import Request from 'superagent';

class Result extends React.Component{

	componentWillMount(){
		this.getResult();
	}
	
	getResult(){
		var value=[1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0];
		var data={
			value:value
		}
		var success = (res) => {
        	console.log("Got Result");
        	console.log(res);
    	}
    	var failure = (res) => {
      		console.log("Can't load Result");
    	}
		API.post("http://localhost:3000/users/foo",data,success,failure);
	}
	render(){
		return(
			<div>
				<h1>helo</h1>
			</div>
			);
	}
}

module.exports = Result;