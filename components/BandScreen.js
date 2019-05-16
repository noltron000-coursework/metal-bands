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
import * as BandData from '../data/metal-50.json'

class BandScreen extends React.Component {
	constructor(props) {
		super(props)
	}

	// renderItem is a helper function.
	// this gets executed N times for each band item.
	// it returns a formatted JSX component for a band item.
	_renderItem = (item) => {
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
		return(
			<View>
				<Text>Band List Screen</Text>
				<Text>
				<FlatList
					data={BandData}
					renderItem={this._renderItem}
					keyExtractor={this._keyExtractor}
				/>
			</View>
		)
	}
}

export default BandScreen
