import React, { Component } from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
	render() {
		let messages = this.props.messages.map(message =>
			<Message
				key={message.id}
				message={message}
			/>
		);
		return (
			<ul>{messages}</ul>
		);
	}
}

MessageList.propTypes = {
	messages: React.PropTypes.array.isRequired
}

export default MessageList