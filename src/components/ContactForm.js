import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Contact = styled.form`
	width: 50%;
	display: flex;
	flex-flow: column;
	align-items: center;
	font-family: 'Carrois Gothic SC', sans-serif;

	label{
		width: 60%;
		color: white;
		font-size: 1rem;
		margin-bottom: 15px;
	}
	input {
		width: 60%;
		background-color: white;
		margin-bottom: 15px;
		height: 40px;
	}
	textarea {
		width: 60%;
		margin-bottom: 30px;
	}
	.button--container {
		width: 60%;
		display: flex;
		justify-content: flex-start;
		button {
			width: 75%;
			height: 50px;
			background-color: white;
			font-family: 'Carrois Gothic SC', sans-serif;
			font-size: 1.5rem;
			text-transform: uppercase;
		}
	}
`;

const ContactForm = () => {

	const [message, setMessage] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [buttonText, setButtonText] = useState('Send');

	const apiURL = 'https://email-api-server.herokuapp.com/api/v1'

	const formSubmit = (e) => {
		e.preventDefault()

		setButtonText('...sending');

		let data = {
			name: name,
			email: email,
			message: message
		}

		axios.post(apiURL, data)
			.then(res => {
				console.log(res.status)
				resetForm();
			})
			.catch((err) => {
				console.log(`Message not sent: ${err}`)
			})
	}
	const resetForm = () => {
		setButtonText('Message Sent!');
		setName('');
		setEmail('');
		setMessage('');
	}

	console.log('render');

	return (
		<Contact onSubmit={(e) => formSubmit(e)}>
			<label className="message-name" htmlFor="message-name"> Name</label>
			<input
				onChange={(e) => setName(e.target.value)}
				name="name"
				className="message-name"
				type="text"
				value={name}
			/>
			<label className="message-email" htmlFor="message-email"> Email</label>
			<input
				onChange={(e) => setEmail(e.target.value)}
				name="email"
				className="message-email"
				type="email"
				required
				value={email}
			/>
			<label className="message" htmlFor="message-input"> Message</label>
			<textarea
				onChange={(e) => setMessage(e.target.value)}
				name="message"
				className="message-input"
				type="text"
				value={message}
				required
			/>
			<div className="button--container">
				<button type="submit">{buttonText}</button>
			</div>
		</Contact>
	);
};

export default ContactForm;
