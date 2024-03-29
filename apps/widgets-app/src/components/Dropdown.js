import React, { useState, useEffect, useRef } from 'react'

const Dropdown = (props) => {
	const { options, selected, onSelectedChange } = props

	const ref = useRef()
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const onBodyClick = (event) => {
			if (ref.current.contains(event.target)) return
			setOpen(false)
		}
		document.body.addEventListener('click', onBodyClick, { capture: true })
		return () => {
			document.body.removeEventListener('click', onBodyClick, { capture: true })
		}
	}, [])

	const renderOptions = options.map((option) => {
		return (
			<div className="item" key={option.value} onClick={() => onSelectedChange(option)}>
				{option.label}
			</div>
		)
	})
	return (
		<div>
			<div ref={ref} className="ui form">
				<div className="field">
					<div className="label">Select a color</div>
					<div
						className={`ui selection dropdown ${open ? 'visible active' : ''}`}
						onClick={() => setOpen(!open)}
					>
						<i className="dropdown icon"></i>
						<div className="text">{selected.label}</div>
						<div className={`menu ${open ? 'visible transition' : ''}`}>{renderOptions}</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dropdown
