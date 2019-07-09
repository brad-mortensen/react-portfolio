import React from 'react';
import styled from 'styled-components';

const StyledSocials = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-flow: column;
	align-items: flex-start;
	justify-content: center;
	width: 50%;
	padding-left: 10%;
	a {
		font-family: 'Carrois Gothic SC', sans-serif;
		font-size: 2rem;
		color: white;
		text-decoration: none;
		font-weight: lighter;
		margin-bottom: 40px;
	}
`;

const Socials = () => {

	return (
		<StyledSocials className="contact">
				<a href="https://github.com/brad-mortensen" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square"></i> /brad-mortensen</a>
				<a href="https://www.linkedin.com/in/bradmmortensen/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i> /bradmmortensen</a>
				<a href="https://twitter.com/bradmmortensen" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter-square"></i> /bradmmortensen</a>
		</StyledSocials>
	);
};

export default Socials;
