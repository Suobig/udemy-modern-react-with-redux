import jsonPlaceholder from '../apis/jsonPlaceholer'

/*
 * Memoization approach
 */
// import _ from 'lodash'
// const fetchUser = (userId) => (dispatch) => {
// 	_fetchUser(userId, dispatch)
// }
// const _fetchUser = _.memoize(async (id, dispatch) => {
// 	const response = await jsonPlaceholder.get('/users', {
// 		params: {
// 			id: id,
// 		},
// 	})
// 	const user = response.data && response.data.length !== 0 ? response.data[0] : {}
// 	dispatch({
// 		type: 'FETCH_USER',
// 		payload: user,
// 	})
// })
// export default fetchUser

const fetchUser = (userId) => async (dispatch) => {
	const response = await jsonPlaceholder.get('/users', {
		params: {
			id: userId,
		},
	})

	const user = response.data && response.data.length !== 0 ? response.data[0] : {}

	dispatch({
		type: 'FETCH_USER',
		payload: user,
	})
}

export default fetchUser
