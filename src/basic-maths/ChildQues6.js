import React from 'react';
import Modal from 'react-modal';
import BasicMathQuesList from './BasicMathQuesList';

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
	render(){
        var questions=[{id:1,question:"Multiply 38 by 10",answers:[300,0.38,3.8,380]},
        {id:2,question:"Add 3 and 8",answers:[5,11,9,14]},
        {id:3,question:"Which is bigger 7 or 5?",answers:[7,5,"Not sure"]},
        {id:4,question:"What does > symbol mean?",answers:["greater than","turn right","next page","not sure"]}
        ]
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
                <BasicMathQuesList questions={questions}/>
			</div>
			)
	}
}

module.exports = ChildQues6;