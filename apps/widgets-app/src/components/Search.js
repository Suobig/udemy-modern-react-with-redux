import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import wikiApi from '/src/api/wikiapi'

import './Search.css'

export default function Search() {
	const SEARCH_THROTTLE = 500 //ms

	const [term, setTerm] = useState('')
	const [debouncedTerm, setDebouncedTerm] = useState('')
	const [result, setResult] = useState([])
	// const [searchTimeoutId, setSearchTimeoutId] = useState(null)

	const renderResults = useMemo(() => {
		if (result.length === 0) {
			return
		}
		// console.log(result)
		const renderedItems = result.map(({ pageid, title, snippet }) => {
			return (
				<div key={pageid} className="item">
					<div className="content">
						<div className="header">{title}</div>
						<div>
							<span dangerouslySetInnerHTML={{ __html: snippet }}></span>
						</div>
					</div>
					<div className="floated right">
						<a
							href={`https://en.wikipedia.org?curid=${pageid}`}
							target="_blank"
							className="ui button"
						>
							Go
						</a>
					</div>
				</div>
			)
		})
		return (
			<div className="ui segment">
				<div className="ui items">{renderedItems}</div>
			</div>
		)
	}, [result])

	const search = async (term) => {
		const response = await axios.get(`https://en.wikipedia.org/w/api.php`, {
			params: { action: 'query', format: 'json', list: 'search', origin: '*', srsearch: term },
		})
		setResult(response?.data.query.search)
	}

	useEffect(() => {
		if (term === '') return
		const timeoutId = setTimeout(() => setDebouncedTerm(term), SEARCH_THROTTLE)
		return () => clearTimeout(timeoutId)
	}, [term])

	useEffect(() => {
		if (debouncedTerm === '') return
		search(term)
	}, [debouncedTerm])

	return (
		<div>
			<div className="ui segment">
				<div className="ui form">
					<label htmlFor="searchbar">Search</label>
					<input
						className="field"
						type="text"
						id="searchbar"
						value={term}
						onChange={(event) => setTerm(event.target.value)}
					/>
				</div>
			</div>
			{renderResults}
		</div>
	)
}
