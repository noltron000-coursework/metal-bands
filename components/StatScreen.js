import React from 'react'
import {
	Text,
	View,
} from 'react-native'

class StatScreen extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<View style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}>
				<Text>METAL {'\ud83e\udd18'}</Text>
				<Text>Total Bands:</Text>
				<Text>Total Fans:</Text>
				<Text>Countries:</Text>
				<Text>Active Bands:</Text>
				<Text>Split Bands:</Text>
			</View>
		)
	}
}

export default StatScreen
