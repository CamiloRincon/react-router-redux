import React, {Component} from 'react';
import InputPreview from '../components/InputPreview';
import {connect} from 'react-redux';
import {setNumberOfContacts} from '../actions/actions';
import {Link} from 'react-router-dom';


class App extends Component {

	constructor() {
		super();
		this.handleOnChange = this.handleOnChange.bind(this);
	}

	handleOnChange = (value) => {
		console.log(this.props);
		this.props.dispatch(setNumberOfContacts(value))
	}


	render () {
		const {numberOfContacts} = this.props.data;
		return (
			<div>
				Enter number of contacts
				<InputPreview value={numberOfContacts} onChange={this.handleOnChange}/>
				<Link to ="/about">
					<button>Next</button>
				</Link>
			</div>
		)
	}
}
export default connect(state=>state)(App);
