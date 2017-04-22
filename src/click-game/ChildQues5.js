import React from 'react';
import Navbar from '../Navbar';
import Modal from 'react-modal';

class ChildQues5 extends React.Component{
	constructor(){
		super();
        this.state={
            counter: 10,
            modalIsOpen: true,
            button1_visibility:"o-90",
            button2_visibility:"o-025"
        }
	}
 
    // afterOpenModal() {
    // // references are now sync'd and can be accessed. 
    //     this.refs.subtitle.style.color = '#f00';
    // }
 
    closeModal(){
        this.setState({modalIsOpen: false});
    }

    start(){
        this.setState({button2_visibility:"o-90 br-pill"});
        this.setState({button1_visibility:"o-025"});
    }
    startGame(){
        setInterval(this.counterStart.bind(this),1000);
    }
    counterStart(){
        if(this.state.counter>0)
        {    
       this.setState({counter: this.state.counter-1});
       console.log(this.state.counter)
       }
       else{
        this.setState({visibility:"o-025",ans_visibility:"o-90"});
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
            <p>please enter the rules that are to be followed by the parent. This space here tells the parent the about this exercise and the points that are to be noted</p>
            <button onClick={this.closeModal.bind(this)}>close</button>
        </Modal>
              <div className="shadow-4 pa6 w-70 mv6 ml7 bg-washed-blue ba b--blue">
                <button onClick={this.start.bind(this)} className={button1_visibility}>Start</button>
                <button className={button2_visibility} onClick={this.startGame.bind(this)}>Click</button>
              </div>
            </div>
			);
	}
}


module.exports = ChildQues5;