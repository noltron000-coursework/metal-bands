// use react
import React from 'react'
import {
	Text,
	View,
	FlatList,
} from 'react-native'

// import local components
import BandItem from './BandItem.js'
import HorizontalRule from './HorizontalRule'

// import local data
import BandData from '../data/metal-50.json'

class BandScreen extends React.Component {
	constructor(props) {
		super(props)
	}

	// renderItem is a helper function for our flatlist.
	// this gets executed N times for each band item.
	// it returns a formatted JSX component for a band item.
	_renderItem = ({item}) => {
		return (
			<BandItem
				band={item}
			/>
		)
	}

	// keyExtractor is a helper function for our flatlist.
	// this gets executed N timers for each band item.
	// it returns the unique ID for a band item.
	_keyExtractor = (item) => {
		key = item.ID + '-' + item.formed
		return (key)
	}

	// itemSeparator is a helper function for our flatlist.
	// this gets injected N-1 times to separate band items.
	// it returns a simple component which renders a line.
	_itemSeparator = () => {
		return (
			<HorizontalRule />
		)
	}

	render() {
		return(
			<View>
				<Text>Band List Screen</Text>
				<FlatList
					data={BandData}
					renderItem={this._renderItem}
					keyExtractor={this._keyExtractor}
					ItemSeparatorComponent={this._itemSeparator}
				/>
			</View>
		)
	}
}

export default BandScreen
