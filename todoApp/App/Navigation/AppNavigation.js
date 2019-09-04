import { createStackNavigator, createAppContainer } from 'react-navigation'

import styles from './Styles/NavigationStyles'
import  Home  from '../Containers/Home';

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  Home: { screen: Home }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
