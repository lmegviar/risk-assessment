import React from 'react';
import ReactDom from 'react-dom';
// import Shrimp from './images/shrimp';
// import Tuna from './images/tuna';
// import Salmon from './images/salmon';
import './index.css';

export default class FishSelector extends React.Component {
	render () {
		return (
			<div>
				<button> Shrimp </button>
				<button> Salmon </button>
				<button> Tuna </button>
			</div>
		)
	}
}