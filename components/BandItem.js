import React from 'react'
import {
	View,
	Text,
} from 'react-native'

class BandItem extends React.Component {
	render() {
		console.log(this.props)
		return(
			<View>
				<Text>{this.props.item.band_name}</Text>
			</View>
		)
	}
}

export default BandItem
