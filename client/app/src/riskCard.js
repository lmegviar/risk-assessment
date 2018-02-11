import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default class RiskCard extends React.Component {
	render () {
		return (
			<span className="risk-card-main">
				{this.props.risk}
			</span>
		);
	};
}