import React from 'react';
import Navbar from '../Navbar';
import Modal from 'react-modal';
import { browserHistory } from "react-router";
import _ from 'lodash';
class ChildQues4 extends React.Component{
	constructor(){
		super();
        this.state={
            counter: 10,
            visibility: "o-0",
            button_visibility:"o-90 bg-green w5 grow hover-bg-green mh4",
            ans_visibility:'o-0',
            modalIsOpen: true
        }
	}
 
    // afterOpenModal() {
    // // references are now sync'd and can be accessed. 
    //     this.refs.subtitle.style.color = '#f00';
    // }
 
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
       else{
        this.setState({visibility:"o-0",ans_visibility:"o-90"});
       }

    }

    submit(){
        if(this.refs.ans1.value<4)
        {  
            var retrievedObject = localStorage.getItem('attributes');
            var answers = JSON.parse(retrievedObject);
            var attribute = ["DS"]
            for (var key in answers) {
            //console.log(key)
            if (answers.hasOwnProperty(key)) {
                if(_.includes(attribute,key))
                    answers[key] = answers[key] + 30
          
            }
         }
        localStorage.setItem('attributes', JSON.stringify(answers));
        var retrievedObject = localStorage.getItem('attributes');
        console.log('retrievedObject: ', JSON.parse(retrievedObject));
        }
        if(this.refs.ans2.value<4)
        {  
            var retrievedObject = localStorage.getItem('attributes');
            var answers = JSON.parse(retrievedObject);
            var attribute = ["DH"]
            for (var key in answers) {
                //console.log(key)
                if (answers.hasOwnProperty(key)) {
                    if(_.includes(attribute,key))
                        answers[key] = answers[key] + 10
          
                     }
                }
            localStorage.setItem('attributes', JSON.stringify(answers));
            var retrievedObject = localStorage.getItem('attributes');
            console.log('retrievedObject: ', JSON.parse(retrievedObject));
        }
        if(this.refs.ans3.value<4)
        {  
            var retrievedObject = localStorage.getItem('attributes');
            var answers = JSON.parse(retrievedObject);
            var attribute = ["DH"]
            for (var key in answers) {
            //console.log(key)
            if (answers.hasOwnProperty(key)) {
                if(_.includes(attribute,key))
                    answers[key] = answers[key] + 10
          
            }
        }
        localStorage.setItem('attributes', JSON.stringify(answers));
        var retrievedObject = localStorage.getItem('attributes');
        console.log('retrievedObject: ', JSON.parse(retrievedObject));
        }
    browserHistory.push("/child5");

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
            <h1>one minute writing</h1>
            <h2>Rules</h2>
            <p>The game consist of passage that will appear for a minute. The parent should note down whether the child is able to write the complete passage without any spelling mistake.</p>
            <button onClick={this.closeModal.bind(this)}>close</button>
        </Modal>
         <div className="mv5 br2">
                <div className="pa1 w-70  ml7 bg-lightest-blue ba b--lightest-blue tc navy" >
                  <h1>One Minute Passage Writing</h1>
                </div>
             <div className="pa6 w-70 ml7 bg-white ba b--lightest-blue">
              <button onClick={this.start.bind(this)} className={button_visibility}>Start</button>
            <button onClick={this.openModal.bind(this)} className={button_visibility}>Instructions</button>
			 <div className={visibility}>
                <p>Timer:{counter}</p>
                <p>For although a man is judged by his actions, by what he has said and done, a man judges himself by what he might have done 
                - a judgment that is necessarily hampered, bot only the scope and limits of his imagination, but by the ever-changing measure of his
                doubt and self-esteem. </p>
             </div>
           

             <div className={ans_visibility}>
                <p>On the scale of 1-10, rate your child's spelling?</p>
                <input ref="ans1" type="text" className="w-10"/>
                <p>On the scale of 1-10, rate your child's writing speed?</p>
                <input ref="ans2" type="text" className="w-10"/>
                <p>On the scale of 1-10, rate your child's handwriting?</p>
                <input ref="ans3" type="text" className="w-10"/>
                <button onClick={this.submit.bind(this)}>Submit</button>
             </div>
             </div>
             </div>
            </div>
			);
	}
}


module.exports = ChildQues4;