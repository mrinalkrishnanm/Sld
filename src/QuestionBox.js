import React from 'react';
import _ from 'lodash';

class QuestionBox extends React.Component{
	constructor(){
		super()
	}
	quesUpdateForYes(){ 
		var answers = this.props.answers;
		var mark = this.props.question.mark;
		var attribute= this.props.question.attribute
		//console.log(answers)
		//console.log(attribute)
		for (var key in answers) {
					//console.log(key)
 			if (answers.hasOwnProperty(key)) {
 				if(_.includes(attribute,key))
   					answers[key] = answers[key] + mark
  				
  			}
		}
		//console.log(answers)
		this.props.quesUpdate(answers)
	}
	quesUpdateForNo(){ 
		var ans= this.props.answers
		this.props.quesUpdate(ans)
		}
	render(){
	    var current_question = this.props.question.question;
		return(
			<div className = "shadow-4 pa6 w-70 mv6 ml7 bg-washed-blue ba b--blue">
			  <h1 className="f1 lh-title">{current_question}</h1>
			  <input type = "submit" value = "YES" onClick={this.quesUpdateForYes.bind(this)} className="mh1 mt7 grow w-20"/>
			  <input type = "submit" value = "NO" onClick={this.quesUpdateForNo.bind(this)} className="mh6 fl mt7 grow w-20" />
			</div>
			)
	}
}

module.exports = QuestionBox;