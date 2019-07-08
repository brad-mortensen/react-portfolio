import React from 'react';
import styled from 'styled-components';

import ContactForm from './ContactForm';
import Socials from './Socials';

const StyledFooter = styled.div`
	display:flex;
	flex-flow: row wrap;
	height: auto;
	padding: 20px 2% 50px 2%;
	background-color: black;
	box-sizing: border-box;
	@media(max-width:510px) {
		flex-flow: column;
	}
	h1 {
		width: 100%;
		color: white;
		font-size: 2rem;
		font-family: 'Carrois Gothic SC', sans-serif;
		font-weight: lighter;
		text-transform: uppercase;
		margin-bottom: 60px;
	}
`;

const Footer = () => {

	return (
		<StyledFooter>
			<h1>Get in Touch</h1>
			<ContactForm />
			<Socials />
		</StyledFooter>
	);
};

export default Footer;
