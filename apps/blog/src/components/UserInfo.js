import React, { useEffect } from 'react'
import { connect } from 'react-redux'

export const UserInfo = ({ userId, user }) => {
	return (
		<div className="extra right floated">
			<em>{user ? user.name : 'Loading...'}</em>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => ({
	user: state.users[ownProps.userId],
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
