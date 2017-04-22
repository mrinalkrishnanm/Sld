import React from 'react';
import QuestionList from './QuestionList';
import Navbar from '../Navbar';
class quiz extends React.Component{
	constructor(){
		super()
			this.state={
			answers: {
			DR: 0,
			DS: 0,
			DH: 0,
			DWE: 0,
			DBA: 0,
			DHA: 0,
            DA: 0,
            ED: 0,
            DM: 0,
            LM: 0,
            DSS: 0,
            DNS: 0,
            DLS: 0,
            DLL: 0,
            STL: 0,
            RG: 0
        },
        toChild: 0
		}
	}
	ansUpdate(new_answers){
		this.setState({answers:new_answers})
		console.log(this.state.answers)
	}
	updateChildButton(){
		var toChild = this.state.toChild
		this.setState({toChild: toChild + 1})
		//console.log(this.state.toChild);

	}
	render(){
		var questions = [{id:1,question: "Do you find your ward easily distracted?",mark: 10, attribute: ["DA","ED"]},
		{id:2,question: "Do they exhibit poorly aligned numbers?",mark:50, attribute: ["DA"]},
		{id:3,question: "Do they have trouble telling time? ",mark:25,attribute:["DA"]},
		{id:4, question: "Does your ward complain of eyes hurting when reading?", mark:50, attribute: ["ED"]},
		{id:5,question: "Does your ward like maths?",mark:50, attribute: ["DA"]},
		{id:6,question: "Does he/she enjoy going to school?  ",mark:50,attribute:["DNS"]},
		{id:7, question: "Does he/she constantly lose their belongings when unsupervised?", mark:50, attribute: ["DNS"]},
		{id:8,question: "Does he/she find it difficult to learn a new language other than their mother tongue? ",mark:25, attribute: ["DLL"]},
		{id:9,question: "Can your word use full stops  correctly? ",mark:50,attribute:["DLL"]},
		{id:10, question: "Do he/she use capitalised letters unnecessarily?", mark:25, attribute: ["DLL"]},
		{id:11,question: "Does she/he find learning from charts and maps difficult? ",mark:25, attribute: ["DLS"]},
		{id:12,question: "Does your ward find it difficult to take down notes while listening to you? ",mark:25,attribute:["DLS"]},
		{id:13, question: "How long does your ward take to learn four lines of an english poem by-heart?", mark:50, attribute: ["STL"]},
		{id:14, question: "Does he/she find it slow to learn a new game or complete a puzzle?", mark:50, attribute: ["STL"]},
		{id:15, question: " Has your student repeated a grade? ", mark:100, attribute: ["RG"]},
		{id:16, question: " How do you rate your child’s handwriting?", mark:10, attribute: ["DH"]},
		{id:17,question: "Does your child find it difficult in following directions?",mark:15,attribute:["DSS"]},
		{id:18, question: "Does he/she face any trouble within lines/spelling/pronouncing? ", mark:20, attribute: ["DSS"]},
		{id:19, question: " Does your ward forget easily?", mark:30, attribute: ["DSS"]},
		{id:20, question: " Is he/she impatient at the moment?", mark:100, attribute: ["LM"]}
		]

        var answers = this.state.answers
        //console.log(answers)
        if (this.state.toChild > 0)
        {	
        	var display = <button>To child questions</button>
		}
		else
	    {
	    	var display = <QuestionList questions={questions} answers={answers} ansUpdate={this.ansUpdate.bind(this)} updateChildButton={this.updateChildButton.bind(this)} />

	    }
		return(
			<div className="bg-lightest-gray vh-100">
			     <Navbar/>
				{display}
			</div>
			)
	}
}
module.exports = quiz;