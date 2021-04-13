import _ from 'lodash'

import jsonPlaceholder from '../apis/jsonPlaceholer'

export const fetchPosts = () => async (dispatch) => {
	const response = await jsonPlaceholder.get('/posts')
	const randomPosts = _.shuffle(response.data).slice(0, 10)
	dispatch({
		type: 'FETCH_POSTS',
		payload: randomPosts,
	})
}
