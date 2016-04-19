import React, { Component } from 'react';

class MessageForm extends Component {
	onSubmit(e) {
		e.preventDefault();
		const node = this.refs.message;
		const message = node.value;
		this.props.addMessage(message);
		node.value = '';
	}

	render() {		
		let input;
		if (this.props.activeChannel.id !== undefined) {
			input = (
				<input
					className='form-control'
					type='text'
					placeholder='Add Message...'
					ref='message'
				/>
			)
		}
		return (
			<div className='form-group'>
				<form onSubmit={this.onSubmit.bind(this)}>
					{input}
				</form>
			</div>
		);
	}
}

MessageForm.propTypes = {
	activeChannel: React.PropTypes.object.isRequired,
	addMessage: React.PropTypes.func.isRequired
}

export default MessageForm
