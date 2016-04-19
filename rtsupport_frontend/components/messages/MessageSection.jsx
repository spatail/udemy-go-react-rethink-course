import React, { Component } from 'react';
import MessageList from './MessageList.jsx';
import MessageForm from './MessageForm.jsx';

class MessageSection extends Component {
	render() {
		return (
			<div className='messages-container panel panel-default'>
				<div className='panel-heading'>
					<strong>{this.props.activeChannel.name}</strong>
				</div>
				<div className='panel-body messages'>
					<MessageList messages={this.props.messages}/>
					<MessageForm
						activeChannel={this.props.activeChannel}
						addMessage={this.props.addMessage}/>
				</div>
			</div>
		);
	}
}

MessageSection.propTypes = {
	messages: React.PropTypes.array.isRequired,
	activeChannel: React.PropTypes.object.isRequired,
	addMessage: React.PropTypes.func.isRequired
}

export default MessageSection