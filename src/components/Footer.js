import React from 'react';
import './Footer.scss';

function Footer(props){
	return(
		<footer className="Footer__Component">{props.copy}</footer>
	);
};

export default Footer;