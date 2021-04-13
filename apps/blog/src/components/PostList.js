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
		return posts.map(({ id, title, body }) => {
			return (
				<div key={id} className="ui item">
					<div className="ui header">{title}</div>
					<div className="ui content">{body}</div>
				</div>
			)
		})
	}, [posts])

	return <div className="ui items">{renderPosts}</div>
}

const mapStateToProps = (state) => ({
	posts: state.posts,
})

const mapDispatchToProps = {
	fetchPosts,
	clearPosts,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
