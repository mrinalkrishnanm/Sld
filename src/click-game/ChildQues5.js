import React from 'react';
import Navbar from '../Navbar';
import Modal from 'react-modal';
import { browserHistory } from "react-router";
import _ from 'lodash';
class ChildQues5 extends React.Component{
	constructor(){
		super();
        this.state={
            counter: 10,
            modalIsOpen: true,
            score:5,
            button1_visibility:"o-90",
            button2_visibility:"o-0"
        }
	}
 
 
    closeModal(){
        this.setState({modalIsOpen: false});
    }
    
    start(){
        this.setState({button1_visibility:"o-0"});
        setInterval(this.counterStart.bind(this),3000);
    }

    counterStart(){
        if(this.state.counter%2==0 && this.state.counter>0)
        {    
           var position=Math.floor(Math.random() * 3) + 1;
           if(position==1){
               this.setState({button2_visibility:"o-90 ma1"});
           }
           else if(position==2){
               this.setState({button2_visibility:"o-90 ma4"});
           }

            else if(position==3){
               this.setState({button2_visibility:"o-90 ma5"});
           }
           this.setState({counter: this.state.counter-1});
            console.log(this.state.counter)

        }
        else if(this.state.counter==0)
        {
            this.setState({button2_visibility:"o-0"});
             browserHistory.push("/child6");

        }
        else
        {
            this.setState({button2_visibility:"o-0"});
            this.setState({counter: this.state.counter-1});
            console.log(this.state.counter)

        }
        console.log(this.state.score);
        
    }
    submit(){
        this.setState({score: this.state.score-1});
        if(this.state.score<5)
        {
            var retrievedObject = localStorage.getItem('attributes');
            var answers = JSON.parse(retrievedObject);
            var attribute = ["DA","ED"]
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

    }
	render(){
        var button1_visibility = this.state.button1_visibility
        var button2_visibility = this.state.button2_visibility
        var counter = this.state.counter
		return(
            <div>
             <Navbar />
             <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                // style={customStyles}
                contentLabel="Example Modal"
            >
            <h1>Click Game</h1>
            <h2>Rules</h2>
            <p>TIn this game a certain number of button will appear in random position at random time. The parent should note down whether the child is able to respond quickly and press the buttons as they appear.</p>
            <button onClick={this.closeModal.bind(this)}>close</button>
        </Modal>
              <div className="shadow-4 pa6 w-70 mv6 ml7 bg-washed-blue ba b--blue">
                <button onClick={this.start.bind(this)} className={button1_visibility}>Start</button>
                <button className={button2_visibility} onClick={this.submit.bind(this)}>Click</button>
              </div>
            </div>
			);
	}
}


module.exports = ChildQues5;