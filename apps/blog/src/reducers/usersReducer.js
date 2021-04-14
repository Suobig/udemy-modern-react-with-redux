const usersReducer = (users = {}, action) => {
	if (action.type === 'FETCH_USER') return payloadToUsers(users, action.payload)
	return users
}

export default usersReducer

const payloadToUsers = (users, payload) => {
	const newUsers = { ...users }
	const id = payload.id
	newUsers[id] = payload
	return newUsers
}
