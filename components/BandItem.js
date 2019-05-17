import React from 'react'
import {
	View,
	Text,
} from 'react-native'

class BandItem extends React.Component {
	render() {
		return(
			<View style={{
				flex: 1,
				flexDirection: 'row',
				justifyContent: 'space-between',
			}}>
				<View>
					<Text>{this.props.band.band_name}</Text>
					<Text>{this.props.band.fans*1000} Fans</Text>
				</View>

				<View>
					<Text style={{
						textAlign: 'right'
					}}>{this.props.band.origin}, {this.props.band.formed}</Text>
					<Text style={{
						textAlign: 'right'
					}}></Text>
				</View>
			</View>
		)
	}
}

export default BandItem
