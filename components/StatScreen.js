// use react
import React from 'react'
import {
	Text,
	View,
} from 'react-native'

// import local components
import Styles from './Styles.js'

// import local data
import BandData from '../data/metal-50.json'

// create primary export
class StatScreen extends React.Component {
	countBands = () => {
		return (
			BandData.reduce((counter_dict, band) => {
				// always increment total
				counter_dict.total += 1
				if (band.split === '-') {
					// count num. active
					counter_dict.active += 1
				} else {
					// count num. inactive
					counter_dict.broken += 1
				}
				return counter_dict
			// have a dictionary to store each value
			}, {active: 0, broken: 0, total: 0})
		)
	}
	getAllCountries = () => {
		return (
			BandData.reduce((country_dict, band) => {
				country_dict[band.origin] = 'exists'
				return country_dict
			}, { })
		)
	}

	getNumCountries = () => {
		return Object.keys(this.getAllCountries()).length
	}

	getTotalFans = () => {
		return (
			BandData.reduce((fans_counter, band) => {
				return fans_counter + band.fans * 1000
			},0)
		)
	}

	numWithCommas = (number) => {
		// this function was retrieved from Stack Overflow:
		// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	}

	render() {
		return(
			<View style={[Styles.container, Styles.center]}>
				<View style={{marginBottom: 24}}>
					<Text style={[Styles.text, Styles.title]}>
						METAL {'\ud83e\udd18'}
					</Text>
				</View>

				<Text style={[Styles.text, Styles.label]}>
					<Text style={Styles.bold}>Total Fans: </Text>
					{this.numWithCommas(this.getTotalFans())}
				</Text>

				<Text style={[Styles.text, Styles.label]}>
					<Text style={Styles.bold}>Countries: </Text>
					{this.numWithCommas(this.getNumCountries())}
				</Text>

				<Text style={[Styles.text, Styles.label]}>
					<Text style={Styles.bold}>Total Bands: </Text>
					{this.numWithCommas(this.countBands().total)}
				</Text>

				<Text style={[Styles.text, Styles.label]}>
					<Text style={Styles.bold}>Active Bands: </Text>
					{this.numWithCommas(this.countBands().active)}
				</Text>

				<Text style={[Styles.text, Styles.label]}>
					<Text style={Styles.bold}>Split Bands: </Text>
					{this.numWithCommas(this.countBands().broken)}
				</Text>
</
			View>
		)
	}
}

export default StatScreen
