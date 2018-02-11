import React from 'react';
import ReactDOM from 'react-dom';
import RiskCard from './riskCard.js'
import './index.css';

export default class RiskKey extends React.Component {

	constructor(props) {
		super(props);
		this.state = {risks: ['high', 'average', 'low']};
	}

	renderRiskList (risks) {
		let riskList = this.state.risks.map((risk) =>
			<li> <RiskCard risk={risk}/> </li>
		)
		return (
			<ul>
				{riskList}
			</ul>
		)
	}

	render () {
		return (
			<div>
				<h1> Key </h1>
				{this.renderRiskList(this.risks)}
			</div>
		)
	}
}
