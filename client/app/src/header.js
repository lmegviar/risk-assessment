import React from 'react';
import ReactDom from 'react-dom';
import FishSelector from './fishSelector.js';
import './index.css';

export default class Header extends React.Component {

	render () {
		return (
			<div>
				<h1> Main Dash for Risk Assessment </h1>
				<FishSelector />
			</div>
		)
	};

}