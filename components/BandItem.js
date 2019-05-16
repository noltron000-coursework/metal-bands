import React from 'react'
import {
	View,
	Text,
} from 'react-native'

class BandItem extends React.Component {
	render() {
		return(
			<View>
				<Text>{this.props.band.band_name}</Text>
				<Text>{this.props.band.fans*1000}</Text>
				<Text>{this.props.band.origin}</Text>
				<Text>{this.props.band.formed}</Text>
			</View>
		)
	}
}

export default BandItem
