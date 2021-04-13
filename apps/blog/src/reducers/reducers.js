import { combineReducers } from 'redux'

const postsReducer = (posts = [], action) => {
	if (action.type === 'CLEAR_POSTS') return []
	if (action.type === 'FETCH_POSTS') return posts.concat(action.payload)
	return posts
}

export default combineReducers({
	posts: postsReducer,
})
