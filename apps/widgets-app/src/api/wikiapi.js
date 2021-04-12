import axios from 'axios'

export default axios.create({
	method: 'GET',
	baseURL: 'https://en.wikipedia.org/w/api.php',
})
