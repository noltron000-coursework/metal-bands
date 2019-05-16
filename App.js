// use react
import React from 'react'

// use react navigation
import { 
	createBottomTabNavigator,
	createAppContainer,
} from 'react-navigation'

// import local components
import BandScreen from './components/BandScreen'
import StatScreen from './components/StatScreen'

// main tab navigation at bottom
const MainNavigator = createBottomTabNavigator({
	Bands: BandScreen,
	Stats: StatScreen,
})

const App = createAppContainer(MainNavigator)

export default App
