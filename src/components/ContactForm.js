import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Contact = styled.form`
	width: 50%;
	border: 1px solid green;
	display: flex;
	flex-flow: column;
	align-items: center;
	label{
		width: 50%;
		color: white;
	}
	input {
		width: 50%;
		background-color: white;
	}
	textarea {
		width: 50%;
	}
	.button--container {
		width: 50%;
		display: flex;
		justify-content: flex-start;
		border: 1px solid red;
		button {
			width: 100px;
			height: 40px;
			background-color: white;
		}
	}
`;

const ContactForm = () => {

	const [message, setMessage] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [buttonText, setButtonText] = useState('Send!');

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
				console.log(`Message not sent ${err}`)
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
			<label className="message-name" htmlFor="message-name">Your Name</label>
			<input
				onChange={(e) => setName(e.target.value)}
				name="name"
				className="message-name"
				type="text"
				placeholder="Your Name"
				value={name}
			/>
			<label className="message-email" htmlFor="message-email">Your Email</label>
			<input
				onChange={(e) => setEmail(e.target.value)}
				name="email"
				className="message-email"
				type="email"
				placeholder="your@email.com"
				required
				value={email}
			/>
			<label className="message" htmlFor="message-input">Your Message</label>
			<textarea
				onChange={(e) => setMessage(e.target.value)}
				name="message"
				className="message-input"
				type="text"
				placeholder="Please write your message here"
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
