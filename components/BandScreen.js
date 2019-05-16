// use react
import React from 'react'
import {
	Text,
	View,
	FlatList,
} from 'react-native'

// import local components
import BandItem from './BandItem.js'

// import local data
import * as data from '../data/metal-50.json'

class BandScreen extends React.Component {
	constructor(props) {
		super(props)
	}

	// renderItem is a helper function.
	// this gets executed N times for each band item.
	// it returns a formatted JSX component for a band item.
	_renderItem = ({index, item}) => {
		return (
			<BandItem
				item={item}
			/>
		)
	}

	// keyExtractor is a helper function.
	// this get executed N timers for each band item.
	// it returns the unique ID for a band item.
	_keyExtractor = (item) => {
		return item.ID
	}

	render() {
		// console.log(data)
		console.log(data)
		return(
			<View>
				<Text>Band Screen</Text>
				{/* <FlatList
					data={data}
					renderItem={this._renderItem}
					_keyExtractor={this._keyExtractor}
				/> */}
				{/* Flat List items */}
			</View>
		)
	}
}

export default BandScreen
