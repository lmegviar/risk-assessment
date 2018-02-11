import React from 'react';
import ReactDOM from 'react-dom';
import RiskKey from './riskKey.js';
import Header from './header.js';
import AssessmentSelector from './assessmentSelector.js';
import map from './world_map.png'
import './index.css';

class Dashboard extends React.Component {

	risks = ['very high', 'high', 'average', 'low', 'very low']

	render () {
		return (
			<div className="dash-main">
				<Header />
				<img src={map} width='100%'/>
				<RiskKey />
				<AssessmentSelector /> 
			</div>

		)
	};
}

ReactDOM.render(
  <Dashboard />,
  document.getElementById('root')
);
