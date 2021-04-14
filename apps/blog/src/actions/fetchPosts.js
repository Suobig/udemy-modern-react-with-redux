import _ from 'lodash'

import jsonPlaceholder from '../apis/jsonPlaceholer'

const fetchPosts = () => async (dispatch) => {
	const response = await jsonPlaceholder.get('/posts')
	const randomPosts = _.shuffle(response.data).slice(0, 10)

	const randomPostsSorted = randomPosts.sort((a, b) => {
		if (a.userId !== b.userId) return a.userId - b.userId
		return a.id - b.id
	})

	dispatch({
		type: 'FETCH_POSTS',
		payload: randomPostsSorted,
	})
}

export default fetchPosts
