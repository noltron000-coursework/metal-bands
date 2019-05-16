import React from 'react'
import {
	Text,
	View
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChartBar } from '@fortawesome/free-solid-svg-icons'
import { faFistRaised } from '@fortawesome/free-solid-svg-icons'


class BandScreen extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<View>
				<Text>Band Screen</Text>
				<FontAwesomeIcon icon={ faChartBar } />
				<FontAwesomeIcon icon={ faFistRaised } />
			</View>
		)
	}
}

export default BandScreen
