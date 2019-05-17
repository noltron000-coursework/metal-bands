// use react
import React from 'react'

// use react navigation
import { 
	createBottomTabNavigator,
	createAppContainer,
} from 'react-navigation'

// import font awesome stuff
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChartBar } from '@fortawesome/free-solid-svg-icons'
import { faFistRaised } from '@fortawesome/free-solid-svg-icons'

// import local components
import Styles from './components/Styles.js'
import BandScreen from './components/BandScreen.js'
import StatScreen from './components/StatScreen.js'

// main tab navigation at bottom
const MainNavigator = createBottomTabNavigator({
	Bands: {
		screen: BandScreen,
		navigationOptions: {
			tabBarIcon: ({TintColor}) => {
				return (<FontAwesomeIcon icon={ faFistRaised } color='red' />)
			}
		}
	},
	Stats: {
		screen: StatScreen,
		navigationOptions: {
			tabBarIcon: ({TintColor}) => {
				return (<FontAwesomeIcon icon={ faChartBar } color='red' />)
			}
		}
	}
},{
	tabBarOptions: {
		style: {
			backgroundColor: '#000',
		}
	}
})

const App = createAppContainer(MainNavigator)

export default App
