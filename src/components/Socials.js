import React from 'react';
import styled from 'styled-components';

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
					<img src='' alt='github' />
				</a>
				<a href="https://www.linkedin.com/in/bradmmortensen/" target="_blank">
					<img src='' alt='linkedin' />
				</a>
				<a href="https://twitter.com/bradmmortensen">
					<img src='' alt='twitter' />
				</a>
			</div>
		</StyledSocials>
	);
};

export default Socials;
