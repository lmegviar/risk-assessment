import React from 'react';
import ReactDom from 'react-dom';
import './index.css';


export default class AssessmentSelectorDropdown extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedAssessment: this.assessments[0].value
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	assessments = [
		{value: 'corruption', label: 'Corruption'},
		{value: 'freedom', label: 'Freedom in the World'},
	]
	
	handleChange (event) {
		this.setState({selectedAssessment: event.target.value});
		console.log('This.state', this.state.selectedAssessment);
	}

	handleSubmit (event) {
		console.log('this.state in handle submit: ', this.state);
		alert('You selected ' + this.state.selectedAssessment);
		event.preventDefault();
	}

	render () {
		return (
			<form onSubmit={this.handleSubmit}>
				<label> 
					Assessment Type(s):
					<br></br>
					<select value={this.state.selectedAssessments} onChange={this.handleChange}>
						<option value={this.assessments[0].value}>{this.assessments[0].label}</option>
						<option value={this.assessments[1].value}>{this.assessments[1].label}</option>
					</select>
				</label>
				<br></br>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}