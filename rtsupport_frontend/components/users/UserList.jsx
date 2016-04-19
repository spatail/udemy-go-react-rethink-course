import React, { Component } from 'react';
import User from './User.jsx';

class UserList extends Component {
	render() {
		let users = this.props.users.map(user =>
			<User
				key={user.id}
				user={user}
			/>
		);
		return (
			<ul>{users}</ul>
		);
	}
}

UserList.propTypes = {
	users: React.PropTypes.array.isRequired
}

export default UserList