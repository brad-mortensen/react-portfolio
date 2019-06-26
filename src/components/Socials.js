import React from 'react';
import styled from 'styled-components';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github-1.svg';
import twitter from '../assets/twitter.svg';

const StyledSocials = styled.div`
	border-bottom: 1px solid blue;
	width: 50%;
	.contact-container {
		box-sizing: border-box;
		width: 100%;
		border: 1px solid yellowgreen;
		box-sizing: border-box;

		a {
			border: 1px solid red;
			height: auto;
			img {
				width: 50px;
				border: 1px solid blue;
			}
		}
	}
`;

const Socials = () => {

	return (
		<StyledSocials className="contact">
			<div className="contact-container">
				<a href="https://github.com/brad-mortensen" target="_blank">
					<img src={github} alt='github' />
				</a>
				<a href="https://www.linkedin.com/in/bradmmortensen/" target="_blank">
					<img src={linkedin} alt='linkedin' />
				</a>
				<a href="https://twitter.com/bradmmortensen">
					<img src={twitter} alt='twitter' />
				</a>
			</div>
		</StyledSocials>
	);
};

export default Socials;
