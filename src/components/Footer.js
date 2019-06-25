import React, {useState} from 'react';

const Footer = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
	return (
		<div>
			<form className="contact-form" onSubmit={(e) => formSubmit(e)}>
				<label class="message" htmlFor="message-input">
					Your Message
				</label>
				<textarea
					onChange={(e) => setMessage(e.target.value)}
					name="message"
					class="message-input"
					type="text"
					placeholder="Please write your message here"
					value={message}
					required
				/>

				<label class="message-name" htmlFor="message-name">
					Your Name
				</label>
				<input
					onChange={(e) => setName(e.target.value)}
					name="name"
					class="message-name"
					type="text"
					placeholder="Your Name"
					value={name}
				/>

				<label class="message-email" htmlFor="message-email">
					Your Email
				</label>
				<input
					onChange={(e) => setEmail(e.target.value)}
					name="email"
					class="message-email"
					type="email"
					placeholder="your@email.com"
					required
					value={email}
				/>

				<div className="button--container">
					<button type="submit" className="button button-primary">
						{state.buttonText}
					</button>
				</div>
			</form>
		</div>
	);
};

export default Footer;
