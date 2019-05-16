import React from 'react'
import {
	View,
	Text,
	StyleSheet,
} from 'react-native'


class Index extends React.Component {
	render() {
		return(
			<View style={styles.container}>
				<Text>Open up App.js to start working on your app!</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Index
