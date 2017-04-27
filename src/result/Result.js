import React from 'react';
import API from './API';
import Request from 'superagent';
import _ from 'lodash';
import Navbar from '../Navbar';

class Result extends React.Component{

  constructor() {
    super()
    this.state = {
      result: ""
    }
  }
  componentWillMount(){
    this.getResult()
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
      console.log(res.text)
      if(res.status == 200)
        this.setState({
          result: res.text
        })
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
    var retrievedObject = localStorage.getItem('attributes');
    var answers = JSON.parse(retrievedObject);
    console.log(answers)
     
    var display = Object.keys(answers).map(function(key, index) {
    return <h2> {key} : {answers[key]} </h2> 
    });
    return(
      <div>
      <Navbar />
      <div className="mv5 br2">
       <div className="pa1 w-70  ml7 bg-lightest-blue ba b--lightest-blue tc navy" >
                  <h1>Result</h1>
       </div>
      <div className="pa6 w-70 ml7 bg-white ba b--lightest-blue">
      <h2>THE STUDENT IS: {this.state.result}</h2>
      <br />
      {display}
      

      </div>
      </div>
      </div>
    );
  }
}

module.exports = Result;
