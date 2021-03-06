import React from 'react';
import styled from 'styled-components';


const Socials = () => {

	return (
		<StyledSocials className="contact">
			<a href="https://github.com/brad-mortensen" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i> /brad-mortensen</a>
			<a href="https://www.linkedin.com/in/bradmmortensen/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> /bradmmortensen</a>
			<a href="mailto:bradmmortensen@gmail.com?subject=Hey!" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope-square"></i> /bradmmortensen</a>
		</StyledSocials>
	);
};

export default Socials;


const StyledSocials = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-flow: column;
	align-items: flex-start;
	justify-content: center;
	width: 50%;
	padding-left: 10%;
	@media(max-width:835px) {
		width: 100%;
		align-items: center;
		padding: 0;
		margin-top: 40px;
	}
	a {
		font-family: 'Carrois Gothic SC', sans-serif;
		font-size: 2rem;
		color: white;
		text-decoration: none;
		font-weight: lighter;
		margin-bottom: 40px;
		@media(max-width: 350px) {
			font-size: 1.5rem;
		}
	}
`;