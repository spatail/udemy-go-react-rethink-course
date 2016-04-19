import React, {Component} from 'react';
import Channel from './Channel.jsx';

class ChannelList extends Component {
	render() {
		let channels = this.props.channels.map(chan =>			
			<Channel
				key={chan.id}
				channel={chan}
				{...this.props}
			/>
		);
		return (
			<ul>{channels}</ul>
		)
	}
}

ChannelList.propTypes = {
	channels: React.PropTypes.array.isRequired,
	setChannel: React.PropTypes.func.isRequired,
	activeChannel: React.PropTypes.object.isRequired
}

export default ChannelList