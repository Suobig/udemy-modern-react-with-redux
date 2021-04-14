import React, { useEffect, useMemo } from 'react'
import { connect } from 'react-redux'

import { clearPosts, fetchPostsAndUsers } from '../actions'
import UserInfo from './UserInfo'

export const PostList = (props) => {
	const { fetchPostsAndUsers, clearPosts, posts } = props

	useEffect(() => {
		fetchPostsAndUsers()

		return () => {
			clearPosts()
		}
	}, [fetchPostsAndUsers, clearPosts])

	const renderPosts = useMemo(() => {
		return posts.map(({ id, userId, title, body }) => {
			return (
				<div key={id} className="item">
					<i className="huge middle aligned icon user" />
					<div className="content">
						<div className="description">
							<h2>{title}</h2>
							<p>{body}</p>
							<UserInfo userId={userId} />
						</div>
					</div>
				</div>
			)
		})
	}, [posts])

	return <div className="ui relaxed divided list">{renderPosts}</div>
}

const mapStateToProps = (state) => ({
	posts: state.posts,
})

const mapDispatchToProps = {
	fetchPostsAndUsers,
	clearPosts,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
