import React from 'react';
import QuestionBox from './QuestionBox.js'

class QuestionList extends React.Component{
	constructor(){
		super()
		this.state={
			inc: 0
		}
	}
	quesUpdate(answers){
		if(this.state.inc==19)
		{
			this.props.updateChildButton();
        }
        else 
		{
			this.props.ansUpdate(answers);
			this.setState({inc: this.state.inc+1});
		}
	}
	render(){
		var i = this.state.inc
		var questions = this.props.questions
	    var ans = this.props.answers
		var q = questions[i]
		var display = <QuestionBox quesUpdate={this.quesUpdate.bind(this)} question={q} answers={ans} />

		return(
			<div>
			 {display}
			</div>
			)
	}
}

module.exports = QuestionList