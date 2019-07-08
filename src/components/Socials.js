import React from 'react';
import styled from 'styled-components';

const StyledSocials = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-flow: column;
	align-items: center;
	a {
		font-family: 'Carrois Gothic SC', sans-serif;
		font-size: 2rem;
		color: black;
		text-decoration: none;
		font-weight: lighter;
	}
`;

const Socials = () => {

	return (
		<StyledSocials className="contact">
				<a href="https://github.com/brad-mortensen" target="_blank" rel="noopener noreferrer">/brad-mortensen</a>
				<a href="https://www.linkedin.com/in/bradmmortensen/" target="_blank" rel="noopener noreferrer">/bradmmortensen</a>
				<a href="https://twitter.com/bradmmortensen" target="_blank" rel="noopener noreferrer">/bradmmortensen</a>
		</StyledSocials>
	);
};

export default Socials;
