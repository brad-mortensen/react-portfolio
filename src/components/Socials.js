import React from 'react';
import styled from 'styled-components';

const StyledSocials = styled.div`
	width: 50%;
	.contact-container {
		box-sizing: border-box;
		width: 100%;
		box-sizing: border-box;
		display: flex;
		flex-flow: column;
		a {
			height: auto;
			img {
				width: 50px;
			}
		}
	}
`;

const Socials = () => {

	return (
		<StyledSocials className="contact">
			<div className="contact-container">
				<a href="https://github.com/brad-mortensen" target="_blank" rel="noopener noreferrer">
					<img src='' alt='github' />
				</a>
				<a href="https://www.linkedin.com/in/bradmmortensen/" target="_blank" rel="noopener noreferrer">
					<img src='' alt='linkedin' />
				</a>
				<a href="https://twitter.com/bradmmortensen" target="_blank" rel="noopener noreferrer">
					<img src='' alt='twitter' />
				</a>
			</div>
		</StyledSocials>
	);
};

export default Socials;
