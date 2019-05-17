// use react
import React from 'react'
import {
	StyleSheet,
} from 'react-native'

// create primary export
const Styles = StyleSheet.create({
	container: {
		backgroundColor: 'black',
	},
	gridView: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	right: {
		textAlign: 'right',
	},
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 18,
		color: '#EEE',
	},
	title: {
		fontSize: 42,
		fontWeight: 'bold',
		color: 'black',
		textShadowRadius: 12,
		textShadowColor: 'red',
		textShadowOffset: {width: 1, height: 1},

	},
	label: {
		fontSize: 24,
		color: 'white',
	},
	strike: {
		fontWeight: 'normal',
		color: '#999',
		textDecorationLine: 'line-through',
	},
	bold: {
		fontWeight: 'bold',
	},
})

export default Styles
