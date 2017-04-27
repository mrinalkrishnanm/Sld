import React from 'react';
import Navbar from '../Navbar';
import Modal from 'react-modal';
import { browserHistory } from "react-router";
import _ from 'lodash';



class ChildQues1 extends React.Component{
	constructor(){
		super();
        this.state={
            counter: 10,
            visibility: "o-0",
            button_visibility:"o-90 bg-green w5 grow hover-bg-green mh6",
            ans_visibility:'o-0',
            modalIsOpen: true       
          }
	}

    closeModal(){
        this.setState({modalIsOpen: false});
    } 

    openModal(){
        this.setState({modalIsOpen: true});
    } 

    start(){
        this.setState({visibility:"o-90"});
        this.setState({button_visibility:"o-0"});
        setInterval(this.counterStart.bind(this),1000);
    }
    counterStart(){
        if(this.state.counter>0)
        {    
         this.setState({counter: this.state.counter-1});
           console.log(this.state.counter)
        }
       else
       {
         this.setState({visibility:"o-0",ans_visibility:"o-90"});
       }

    }

  submit(){
    if(this.refs.ans1.value<4)
    {  
      var retrievedObject = localStorage.getItem('attributes');
      var answers = JSON.parse(retrievedObject);
     var attribute = ["DA","DM"]
      for (var key in answers) {
          //console.log(key)
        if (answers.hasOwnProperty(key)) {
          if(_.includes(attribute,key))
              answers[key] = answers[key] + 20
          
          }
      }
      localStorage.setItem('attributes', JSON.stringify(answers));
      var retrievedObject = localStorage.getItem('attributes');
      console.log('retrievedObject: ', JSON.parse(retrievedObject));
    }
    if(this.refs.ans2.value<3)
    {  
      var retrievedObject = localStorage.getItem('attributes');
      var answers = JSON.parse(retrievedObject);
     var attribute = ["DR"]
      for (var key in answers) {
          //console.log(key)
        if (answers.hasOwnProperty(key)) {
          if(_.includes(attribute,key))
              answers[key] = answers[key] + 20
          
          }
      }
      localStorage.setItem('attributes', JSON.stringify(answers));
      var retrievedObject = localStorage.getItem('attributes');
      console.log('retrievedObject: ', JSON.parse(retrievedObject));
    }
    browserHistory.push("/child2");

  }
	render(){
        var visibility=this.state.visibility
        var button_visibility = this.state.button_visibility
        var counter = this.state.counter
        var ans_visibility = this.state.ans_visibility
		return(
            <div className="bg-washed-blue h-100">
              <Navbar />
              <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                // style={customStyles}
                contentLabel="Example Modal"
                >
                  <h1 className="tc">Memory Game</h1>
                  <h1 className="tc">Rules</h1>
                  <p>This game consist of 10 words that will appear for 60 seconds. The child is required to recall the words and the parents are required to note down
                  the number of words the child is able to memorise correctly.</p>
                  <button onClick={this.closeModal.bind(this)} className="bg-green w5 grow hover-bg-green mh6">close</button>
              </Modal>
              <div className="mv5 br2">
                <div className="pa1 w-70  ml7 bg-lightest-blue ba b--lightest-blue tc navy" >
                  <h1>Memory Game</h1>
                </div>
                <div className="pa6 w-70 ml7 bg-white ba b--lightest-blue">
			              <div className={visibility}>
                      <p>Timer:{counter}</p>
                      <h1 className="lh-title">Cat</h1>
                      <h1 className="lh-title">Farm</h1>
                      <h1 className="lh-title">Room</h1>
                      <h1 className="lh-title">Mother</h1>
                      <h1 className="lh-title">Elbow</h1>
                      <h1 className="lh-title">Right</h1>
                      <h1 className="lh-title">Dream</h1>
                      <h1 className="lh-title">Wonder</h1>
                      <h1 className="lh-title">Sentence</h1>
                      <h1 className="lh-title">Knowledge</h1>
                    </div>
                    <button onClick={this.start.bind(this)} className={button_visibility}>Start</button>
                    <button onClick={this.openModal.bind(this)} className={button_visibility}>Instructions</button>

                     <div className={ans_visibility}>
                      <h1>For Parents</h1>
                      <p>How many words was your child able to recollect</p>
                      <input type="text" ref="ans1" className="w-10"/>
                      <p>Rate your childs pronounciation on a scale of 1 to 10</p>
                      <input type="text" ref="ans2" className="w-10"/>
                      <button onClick={this.submit.bind(this)}>Submit</button>
                    </div>
              </div>
              </div>
            </div>
			);
	}
}


module.exports = ChildQues1;