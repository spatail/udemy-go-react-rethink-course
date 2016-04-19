import React, { Component } from 'react';
import UserList from './UserList.jsx';
import UserForm from './UserForm.jsx';

class UserSection extends Component {
	render() {
		return (
			<div className='support panel panel-primary'>
				<div className='panel-heading'>
					<strong>Users</strong>
				</div>
				<div className='panel-body users'>
					<UserList users={this.props.users}/>
					<UserForm addUser={this.props.addUser}/>
				</div>
			</div>
		);
	}
}

UserSection.propTypes = {
	users: React.PropTypes.array.isRequired,
	addUser: React.PropTypes.func.isRequired
}

export default UserSection
