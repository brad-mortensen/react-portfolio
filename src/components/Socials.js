import React from 'react';
import styled from 'styled-components';

const StyledSocials = styled.div`
	width: 50%;
	.contact-container {
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: space-around;
		a {
			font-family: 'Carrois Gothic SC', sans-serif;
			font-size: 2rem;
			color: white;
			text-decoration: none;
			font-weight: lighter;
		}
	}
`;

const Socials = () => {

	return (
		<StyledSocials className="contact">
			<div className="contact-container">
				<a href="https://github.com/brad-mortensen" target="_blank" rel="noopener noreferrer">/brad-mortensen</a>
				<a href="https://www.linkedin.com/in/bradmmortensen/" target="_blank" rel="noopener noreferrer">/bradmmortensen</a>
				<a href="https://twitter.com/bradmmortensen" target="_blank" rel="noopener noreferrer">/bradmmortensen</a>
			</div>
		</StyledSocials>
	);
};

export default Socials;
