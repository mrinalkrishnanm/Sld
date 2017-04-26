import React from 'react';
import Modal from 'react-modal';
import { browserHistory } from "react-router";
import _ from 'lodash';
class ChildQues7 extends React.Component{
    constructor(){
		super();
        this.state={
            modalIsOpen: true
        }
	}
	closeModal(){
        this.setState({modalIsOpen: false});
    }
    
    submit(){
         var bhe=0
         if(this.refs.quesOne.value!=323){
            bhe=bhe+1;
        }
          if(this.refs.quesTwo.value!=48){
            bhe=bhe+1;
        }
          if(this.refs.quesThree.value!=220){
            bhe=bhe+1;
        }
          if(this.refs.quesFour.value!=12){
            bhe=bhe+1;
        }
        console.log(bhe)
        if(bhe>3)
        {  
            var retrievedObject = localStorage.getItem('attributes');
            var answers = JSON.parse(retrievedObject);
            var attribute = ["DHA"]
            for (var key in answers) {
            //console.log(key)
            if (answers.hasOwnProperty(key)) {
                if(_.includes(attribute,key))
                    answers[key] = answers[key] + 50
          
            }
         }
        localStorage.setItem('attributes', JSON.stringify(answers));
        var retrievedObject = localStorage.getItem('attributes');
        console.log('retrievedObject: ', JSON.parse(retrievedObject));
        }
        browserHistory.push("/result");

    }
	render(){
		return(
			<div>
				<Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                contentLabel="Example Modal"
           		>
                    <h1>Higher mathematics</h1>
                    <h2>Rules</h2>
                    <p>please enter the rules that are to be followed by the parent. This space here tells the parent the about this exercise and the points that are to be noted</p>
                    <button onClick={this.closeModal.bind(this)}>close</button>
            	</Modal>
                <h1>Ellen had 380 legos, but she lost 57 of them. How many legos does she have now?</h1>
                <input type="text" placeholder="Answer me" ref="quesOne" />
                <h1>Arthur baked 35 muffins. How many more muffins does Arthur have to bake to have 83 muffins?</h1>
                <input type="text" placeholder="Answer me" ref="quesTwo" />
                <h1>There are 10 stickers on a page. If you have 22 pages of stickers, How many stickers do you have? </h1>
                <input type="text" placeholder="Answer me" ref="quesThree"  />
                <h1>There are 96 cupcakes for 8 children to share. How much will each person get if they share equally?</h1>
                <input type="text" placeholder="Answer me" ref="quesFour" />
                <button onClick={this.submit.bind(this)}>Submit</button>
			</div>
			)
	}
}

module.exports = ChildQues7;