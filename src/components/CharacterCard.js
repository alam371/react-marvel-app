import React from 'react';

function CharacterCard(props){
	console.log(props);
	return (
		<div className="character-card">
			<img src={`${props.character.thumbnail.path}.${props.character.thumbnail.extension}`}/>
			<h1>{props.character.name}</h1>
		</div>

	);
}

export default CharacterCard;