import React from 'react';
import API from './API';
import Request from 'superagent';
import _ from 'lodash';

class Result extends React.Component{

  componentWillMount(){
    this.getResult();
  }

  getResult(){
    var retrievedObject = localStorage.getItem('attributes');
    var answers = JSON.parse(retrievedObject);
    for (var key in answers) {
      //console.log(key)
      if (answers[key]>50) {
        answers[key] = 1

      }
      else{
        answers[key] = 0
      }

    }

    var array= Object.keys(answers).map(function(key){return answers[key];});
    Request.post("http://localhost:3000/users/foo")
    .send({value: array})
    .end((err,res) => {
      console.log(res)
    })
    // 	var value=[1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0];
    // 	var data={
    // 		value:value
    // 	}
    // 	var success = (res) => {
    //        	console.log("Got Result");
    //        	console.log(res);
    //    	}
    //    	var failure = (res) => {
    //      		console.log("Can't load Result");
    //    	}
    // 	API.post("http://localhost:3000/users/foo",data,success,failure);
    console.log(array);
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
