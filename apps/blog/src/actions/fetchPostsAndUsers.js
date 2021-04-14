import _ from 'lodash'

import fetchPosts from './fetchPosts'
import fetchUser from './fetchUser'

const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts())
	const posts = getState().posts
	fetchUniqueUsers(dispatch, posts)
}

const fetchUniqueUsers = (dispatch, posts) => {
	const uniqueUserIds = _.uniq(posts.map(({ userId }) => userId))
	uniqueUserIds.forEach((id) => dispatch(fetchUser(id)))
}

export default fetchPostsAndUsers
