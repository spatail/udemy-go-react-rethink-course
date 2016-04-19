import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './users/UserSection.jsx';
import MessageSection from './messages/MessageSection.jsx';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			channels: [],
			activeChannel: {},
			users: [],
			messages: [],
		};
	}	

	newChannel(channel) {
		let {channels} = this.state;
		channels.push(channel);
		this.setState({channels});
	}

	addChannel(name) {
		let {channels} = this.state;
		channels.push({id: channels.length, name});
		this.setState({channels});
		console.log('Channels are', JSON.stringify(this.state.channels));
	}

	setChannel(activeChannel) {
		console.log('Setting active channel to', JSON.stringify(activeChannel));
		this.setState({activeChannel});
		console.log(this.state.activeChannel.name);
		console.log('State is', JSON.stringify(this.state));
	}

	addUser(userName) {
		let {users} = this.state;
		users.push({id: users.length, name: userName});
		this.setState({users});
	}

	addMessage(body) {
		console.log('Adding message', body);
		let {messages, users} = this.state;
		let createdAt = new Date;
		let author = users.length > 0 ? users[0].name : 'anonymous';
		messages.push({id: messages.length, body, createdAt, author});
		this.setState({messages});
	}

	render() {
		return (
			<div className='app'>
				<div className='nav'>
					<ChannelSection
						{...this.state}
						addChannel={this.addChannel.bind(this)}
						setChannel={this.setChannel.bind(this)}
					/>
					<UserSection
						users={this.state.users}
						addUser={this.addUser.bind(this)}
					/>
				</div>
				<MessageSection
					messages={this.state.messages}
					activeChannel={this.state.activeChannel}
					addMessage={this.addMessage.bind(this)}
				/>
			</div>
		)
	}
}

export default App