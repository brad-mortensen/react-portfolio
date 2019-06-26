import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
	return (
		<div className="App">
			<Header />
			<Projects />
			<Skills />
			<Footer />
		</div>
	);
}

export default App;
