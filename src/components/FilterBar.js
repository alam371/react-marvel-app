import React, { Component } from 'react';
import "./FilterBar.scss";

class FilterBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			searchQuery: ''
		}
	}
	handleSearchChange = (event) => {
		console.log(event.target.value);
		this.setState({
			searchQuery: event.target.value
		})
	}

	handleFormSubmit = (event) => {
		event.preventDefault();
		this.props.onFilterSubmit(this.state.searchQuery);
		this.setState({
			searchQuery: ''
		})
	}

	render(){
		return (
			<div className="FilterBar__Component">
				<form onSubmit={this.handleFormSubmit}>
					<label
						className="visually-hidden"
						htmlFor="search">
						Search Characters:
					</label>
					<input
						type="text"
						value={this.state.searchQuery}
						onChange={this.handleSearchChange}
						placeholder="Search characters" id="search"
					/>
					<button type="submit">Submit</button>
				</form>
			</div>)
	}
};


export default FilterBar;
