// use react
import React from 'react'
import {
	View,
	Text,
} from 'react-native'

// import local components
import Styles from './Styles.js'

// create primary export
class BandItem extends React.Component {
	bandNameStatus = () => {
		if (this.props.band.split === '-') {
			return this.props.band.band_name
		} else {
			return (
				<Text style={Styles.strike}>{this.props.band.band_name}</Text>
			)
		}
	}

	numFansWithCommas = () => {
		// this function was retrieved from Stack Overflow:
		// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
		return (this.props.band.fans*1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	}

	render() {
		return(
			<View style={Styles.gridView}>
				<View>
					<Text style={[Styles.text, Styles.label, Styles.bold]}>{this.bandNameStatus()}</Text>
					<Text style={Styles.text}>{this.numFansWithCommas()} Fans</Text>
				</View>

				<View>
					<Text style={[Styles.text, Styles.right, Styles.label]}>{this.props.band.formed}</Text>
					<Text style={[Styles.text, Styles.right]}>{this.props.band.origin}</Text>
				</View>
			</View>
		)
	}
}


export default BandItem
