import React, { Component } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';


class CharacterList extends Component {
	constructor(props){
		super(props);
		this.state = {
			characters: []
		};
	}

	componentDidMount() {
		this.fetchCharacters();
	}

	async fetchCharacters(){
		try{
			const charactersData = await axios.get('https://gateway.marvel.com/v1/public/characters',{
				params: {
					apikey: '5dc9e539c7edb2af06dfcc7c3ef50915',
					limit: 50
			}});
			console.log(charactersData.data.data.results);
			this.setState({
				characters: charactersData.data.data.results
			})
		} catch(error) {

		}
	}

	renderCharacters(){
		const characterList = this.state.characters.filter((character) => {
			// let returnToNewArray;
			// if (character.thumbnail.path.includes('image_not_available')){
			// 	return returnToNewArray = false
			// } else {
			// 	return returnToNewArray = true
			// }
			return !character.thumbnail.path.includes('image_not_available');
		}).map((character) =>{
			return (
				<CharacterCard
					character={character}
					key={character.id}
					fakeProp={'because why not?!'}
					myArr={[1, 2, 3]}
				/>);
		});
		return(
			<div className="character-list">{characterList}</div>
		);
	}

	renderEmptyState(){
		return(
			<p>Loading...</p>
		)
	}
	render() {
		return (
			<section className="CharacterList__Component">
				<h2>Characters List</h2>
				{ this.state.characters.length ? this.renderCharacters() : this.renderEmptyState() }
			</section>
		);
	}
}

export default CharacterList;