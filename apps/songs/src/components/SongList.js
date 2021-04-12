import React, { useMemo } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

const SongList = (props) => {
	const { songs, selectSong } = props

	const renderedSongs = useMemo(() => {
		const renderSong = (song) => {
			const { title } = song
			return (
				<div key={title} className="item">
					<div className="ui right floated content">
						<button className="ui primary button" onClick={() => selectSong(song)}>
							Select
						</button>
					</div>
					<div className="ui header content">{title}</div>
				</div>
			)
		}
		return songs.map(renderSong)
	}, [songs, selectSong])

	return <div className="ui divided list">{renderedSongs}</div>
}

const mapStateToProps = (state) => {
	return { songs: state.songs }
}

export default connect(mapStateToProps, { selectSong })(SongList)
