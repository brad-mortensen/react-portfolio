import React from 'react';
import styled from 'styled-components';

import ContactForm from './ContactForm';
import Socials from './Socials';

const StyledFooter = styled.div`
	display:flex;
	flex-flow: row wrap;
	justify-content: space-around;
	height: auto;
	padding: 20px 5% 50px 5%;
	background-color: black;
	box-sizing: border-box;
	@media(max-width: 700px) {
		flex-flow: column;
		
	}
	p {
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
		<StyledFooter id="contact">
			<p>Get in Touch</p>
			<ContactForm />
			<Socials />
		</StyledFooter>
	);
};

export default Footer;
