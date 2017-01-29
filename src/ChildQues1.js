import React from 'react';
import Navbar from './Navbar';
import Modal from 'react-modal';

class ChildQues1 extends React.Component{
	constructor(){
		super();
        this.state={
            counter: 10,
            visibility: "o-05",
            button_visibility:"o-90",
            ans_visibility:'o-025',
            modalIsOpen: true
        }
	}

    closeModal(){
        this.setState({modalIsOpen: false});
    }

    start(){
        this.setState({visibility:"o-90"});
        this.setState({button_visibility:"o-025"});
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
        var visibility=this.state.visibility
        var button_visibility = this.state.button_visibility
        var counter = this.state.counter
        var ans_visibility = this.state.ans_visibility
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
                <h1>Memory Game</h1>
                <h2>Rules</h2>
                <p>please enter the rules that are to be followed by the parent. This space here tells the parent the about this exercise and the points that are to be noted</p>
                <button onClick={this.closeModal.bind(this)}>close</button>
             </Modal>
             <div className="shadow-4 pa6 w-70 mv6 ml7 bg-washed-blue ba b--blue">
			 <div className={visibility}>
                <p>Timer:{counter}</p>
                <h1 className="lh-title">Word 1</h1>
                <h1 className="lh-title">Word 2</h1>
                <h1 className="lh-title">Word 3</h1>
                <h1 className="lh-title">Word 4</h1>
                <h1 className="lh-title">Word 5</h1>
             </div>
            <button onClick={this.start.bind(this)} className={button_visibility}>Start</button>
             <div className={ans_visibility}>
                <p>Question 1</p>
                <input type="text" className="w-10"/>
                <p>Question 2</p>
                <input type="text" className="w-10"/>
             </div>
             </div>
            </div>
			);
	}
}


module.exports = ChildQues1;