import React, { Component } from 'react';
import Header from './static/Header';

export default class Blogs extends Component {
	constructor() {
		super();
	}

	render() {
		return(
			<div>
				<Header />
				<h1>Blog page</h1>
			</div>
		)
	}
}