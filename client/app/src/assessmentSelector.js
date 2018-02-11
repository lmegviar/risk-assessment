import React from 'react';
import ReactDom from 'react-dom';
import './index.css';


export default class AssessmentSelector extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			corruption: false,
			freedom: false
		}
		this.handleChange = this.handleChange.bind(this);
	}

	assessments = [
		{value: 'corruption', label: 'Corruption'},
		{value: 'freedom', label: 'Freedom in the World'},
	]
	
	handleChange (event) {
	    const target = event.target;
	    const value = event.checked;
	    const name = target.name;
	    this.setState({
	      [name]: value
	    });
	    console.log('state', this.state);
  	}

	render () {
		return (
			<form>
				<p> Assessment Type(s): </p>
				<p> Selected: {this.state.corruption} {this.state.freedom} </p>
				<label>
					<input name="corruption" type="checkbox" checked={this.state.corruption} onChange={this.handleChange} />
					Corruption
				</label>
				<label>
					<input name="freedom" type="checkbox" checked={this.state.freedom} onChange={this.handleChange} />
					Freedom in the World
				</label>
				<br></br>
			</form>
		);
	}
}