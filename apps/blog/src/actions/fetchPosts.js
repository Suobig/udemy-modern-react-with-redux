import _, { random } from 'lodash'

import jsonPlaceholder from '../apis/jsonPlaceholer'

export const fetchPosts = () => async (dispatch) => {
	const response = await jsonPlaceholder.get('/posts')
	const randomPosts = _.shuffle(response.data).slice(0, 10)

	const userDictionary = await fetchUserDictionary()

	const randomPostsWithUsers = randomPosts
		.map((post) => {
			const newPost = {
				...post,
				user: userDictionary[post.userId],
			}
			return _.omit(newPost, 'userId')
		})
		.sort((a, b) => {
			if (a.user.id !== b.user.id) return a.user.id - b.user.id
			return a.id - b.id
		})

	dispatch({
		type: 'FETCH_POSTS',
		payload: randomPostsWithUsers,
	})
}

const fetchUserDictionary = async () => {
	const response = await jsonPlaceholder.get('/users')
	return _.keyBy(response.data, 'id')
}
