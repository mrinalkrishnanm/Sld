import React from 'react';
import Navbar from '../Navbar';
import Modal from 'react-modal';
import { browserHistory } from "react-router";
import _ from 'lodash';
class ChildQues3 extends React.Component{
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
 
    // afterOpenModal() {
    // // references are now sync'd and can be accessed. 
    //     this.refs.subtitle.style.color = '#f00';
    // }
    openModal(){
        this.setState({modalIsOpen: true});
    } 
    closeModal(){
        this.setState({modalIsOpen: false});
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
                    answers[key] = answers[key] + 20
          
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
    browserHistory.push("/child4");

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
            <h1>No sense passage writing</h1>
            <h2>Rules</h2>
            <p>The following is a jumbled passage. The parent should note down whether the child is able to write down the passage in a meaningful way.</p>
            <button onClick={this.closeModal.bind(this)}>close</button>
        </Modal>
             <div className="mv5 br2">
             <div className="pa1 w-70  ml7 bg-lightest-blue ba b--lightest-blue tc navy ">
                <h1>No Sense Passage Writing</h1>
             </div>
            <div className="pa6 w-70 ml7 bg-white ba b--lightest-blue">
             <div className={visibility}>
                <p>Timer:{counter}</p>
                <p>An person is a astronaut to go into trained outer space. An must complete of training before astronaut two years flying
                before into space. Astronaut are space mission able to go on they have training their once completed. space missions 
                during perform experiments astronaut and repair satellites.</p>
             </div>
            <button onClick={this.start.bind(this)} className={button_visibility}>Start</button>
            <button onClick={this.openModal.bind(this)} className={button_visibility}>Instructions</button>

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


module.exports = ChildQues3;