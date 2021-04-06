import React from 'react'
import Accordion from './components/Accordion'

const items = [
	{
		title: 'What is react',
		content: 'React is a front end javascript framework',
	},
	{
		title: 'Why use react?',
		content: 'React is a favorite JS Library among engineers',
	},
	{
		title: 'How do you use react?',
		content: 'You use React by writing components',
	},
]

export default () => {
	return (
		<div>
			<Accordion />
		</div>
	)
}
