import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';

const Container = styled.div`
	box-sizing: border-box;
	/* width: 1200px;
	margin: 0 auto; */
`;

function App() {
	return (
		<Container className="App">
			<Header />
			<Projects />
			<Skills />
			<Footer />
		</Container>
	);
}

export default App;
