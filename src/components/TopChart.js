import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { HomeLink } from './utilities'
import { apiUrl } from '../config';

class TopChart extends Component {
	constructor(props) {
		super(props);
		this.state = { status: 'loading' };
	}
	componentDidMount() {
		fetch(apiUrl + '/topchart')
			.then(res => res.json())
			.then(data => {
				this.setState({
					status: 'loaded',
					users: data,
				});
			})
			.catch(err => {
				this.setState({ status: 'failed' });
				// throw err;
			});
		
	
	}

	toUserTable(users) {
		const userRows = users.map((user, i) => (
			<tr key={i}>
				<td> <Link to={`/user/${user.id}/games`}>{i+1}</Link> </td>
				<td> <Link to={`/user/${user.id}/games`}>{user.name}</Link> </td>
				<td> <Link to={`/user/${user.id}/games`}>{user.points} </Link> </td>
			</tr> 
		));

		if ( userRows.length > 0 ) {
			return (
				<table className="table is-centered game-table">
					<thead>
						<tr>
							<td>#</td>
							<td>Name</td>
							<td>Points</td>
						</tr>
					</thead>
					<tbody>{userRows}</tbody>
				</table>
			);
		}
		
		return null;
	}

	render() {
		const { status, users } = this.state;
	

		let topUsers;
		
		if ( status === 'loading' ) {
			topUsers =  <p> Loading... </p>;
		} else if ( status === 'failed' ) {
			topUsers = <p> Failed to load </p>;
		} else {
			topUsers = this.toUserTable(users);
		}


		return (
			<div>
				<p className="title has-text-grey is-spaced">
					Top players
				</p>
				{topUsers}
				<HomeLink />
			</div>
		)
	}
}

export default TopChart;