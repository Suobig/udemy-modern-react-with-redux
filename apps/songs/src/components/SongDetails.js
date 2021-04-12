import React from 'react'
import { connect } from 'react-redux'

export const SongDetails = (props) => {
	const { title, duration } = props.song || {}
	return (
		<div className="ui segment">
			<h2>{title}</h2>
			<div>{duration}</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	song: state.selectedSong,
})

export default connect(mapStateToProps)(SongDetails)
