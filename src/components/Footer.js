import React from 'react';
import styled from 'styled-components';

import ContactForm from './ContactForm';
import Socials from './Socials';

const StyledFooter = styled.div`
	display:flex;
	flex-flow: row;
	height: auto;
`;

const Footer = () => {

	return (
		<StyledFooter>
			<ContactForm />
			<Socials />
		</StyledFooter>
	);
};

export default Footer;
