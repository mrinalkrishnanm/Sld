import React from 'react';
import Modal from 'react-modal';
import { browserHistory } from "react-router";
import _ from 'lodash';
class ChildQues6 extends React.Component{
    constructor(){
		super();
        this.state={
            modalIsOpen: true
        }
	}
	closeModal(){
        this.setState({modalIsOpen: false});
    }
    
    submit(){
         var bme=0
         if(this.refs.quesOne.value!=30){
            bme=bme+1;
        }
          if(this.refs.quesTwo.value!=6){
            bme=bme+2;
        }
          if(this.refs.quesThree.value!=5){
            bme=bme+3;
        }
          if(this.refs.quesFour.value!=8){
            bme=bme+4;
        }
          if(this.refs.quesFive.value!=4){
            bme=bme+5;
        }
          if(this.refs.quesSix.value!=100){
            bme=bme+6;
        }
        console.log(bme)
        if(bme>3)
        {  
            var retrievedObject = localStorage.getItem('attributes');
            var answers = JSON.parse(retrievedObject);
            var attribute = ["DBA"]
            for (var key in answers) {
            //console.log(key)
            if (answers.hasOwnProperty(key)) {
                if(_.includes(attribute,key))
                    answers[key] = answers[key] + 50
          
            }
         }
        localStorage.setItem('attributes', JSON.stringify(answers));
        var retrievedObject = localStorage.getItem('attributes');
        console.log('retrievedObject: ', JSON.parse(retrievedObject));
        }
        browserHistory.push("/child7");

    }
	render(){
		return(
			<div>
				<Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                contentLabel="Example Modal"
           		>
                    <h1>Basic mathematics</h1>
                    <h2>Rules</h2>
                    <p>please enter the rules that are to be followed by the parent. This space here tells the parent the about this exercise and the points that are to be noted</p>
                    <button onClick={this.closeModal.bind(this)}>close</button>
            	</Modal>
                <h1>Multiply 3 by 10</h1>
                <input type="text" placeholder="Answer me" ref="quesOne" />
                
                <h1>Add 5 and 1</h1>
                <input type="text" placeholder="Answer me" ref="quesTwo" />
                
                <h1>Subtract 3 from 8</h1>
                <input type="text" placeholder="Answer me" ref="quesThree"  />
                
                <h1>Subtract 1 from 9</h1>
                <input type="text" placeholder="Answer me" ref="quesFour" />
                
                <h1>Which is bigger <span className="">4</span> or <span className="f1 lh-title">2</span></h1>
                <input type="text" placeholder="Answer me" ref="quesFive" />
                
                <h1>Which is smaller <span className="f1 lh-title">100 </span> or <span>1000</span></h1>
                <input type="text" placeholder="Answer me" ref="quesSix" />
                
                <button onClick={this.submit.bind(this)}>Submit</button>
			</div>
			)
	}
}

module.exports = ChildQues6;