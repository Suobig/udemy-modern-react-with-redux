import React, { useEffect, useMemo } from 'react'
import { connect } from 'react-redux'

import { fetchPosts, clearPosts } from '../actions'

export const PostList = (props) => {
	const { fetchPosts, clearPosts, posts } = props

	useEffect(() => {
		fetchPosts()

		return () => {
			clearPosts()
		}
	}, [fetchPosts, clearPosts])

	const renderPosts = useMemo(() => {
		return posts.map(({ id, title, body, user }) => {
			return (
				<div key={id} className="item">
					<i className="huge middle aligned icon user" />
					<div className="content">
						<div className="description">
							<h2>{title}</h2>
							<p>{body}</p>
							<div className="extra right floated">
								<em>{`by ${user.name} (${user.email})`}</em>
							</div>
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
	fetchPosts,
	clearPosts,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
