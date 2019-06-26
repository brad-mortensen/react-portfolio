import React from 'react';
import styled from 'styled-components';

const StyledSocials = styled.div`
	border: 1px solid blue;
	width: 50%;
`;

const Socials = () => {

	return (
		<StyledSocials className="contact">
			<div className="contact-container">
				<a href="https://github.com/brad-mortensen" target="_blank">
					<img src="assets/github-1.svg" />
				</a>
				<a href="https://www.linkedin.com/in/bradmmortensen/" target="_blank">
					<img src="assets/linkedin.svg" />
				</a>
				<a href="https://twitter.com/bradmmortensen">
					<img src="assets/twitter.svg" />
				</a>
			</div>
		</StyledSocials>
	);
};

export default Socials;
