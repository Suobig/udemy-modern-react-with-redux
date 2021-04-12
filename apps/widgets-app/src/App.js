import React, { useState } from 'react'
// import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
// import Search from './components/Search'

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

const options = [
	{ label: 'Red', value: 'red' },
	{ label: 'Green', value: 'green' },
	{ label: 'Blue', value: 'blue' },
]

export default () => {
	const [selected, setSelected] = useState(options[0])
	const [showDropdown, setShowDropdown] = useState(true)
	return (
		<div>
			{/* <Accordion items={items} /> */}
			{/* <Search /> */}
			{showDropdown ? (
				<Dropdown selected={selected} onSelectedChange={setSelected} options={options} />
			) : null}
			<button onClick={() => setShowDropdown(!showDropdown)}>Toggle dropdown</button>
		</div>
	)
}
