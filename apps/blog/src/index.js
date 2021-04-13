import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import reducers from './redux-reducers'

const rootComponent = (
	<Provider store={createStore(reducers)}>
		<App />
	</Provider>
)

ReactDOM.render(rootComponent, document.getElementById('root'))
