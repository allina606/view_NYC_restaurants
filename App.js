import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import BizzesShowScreen from './src/screens/BizzesShowScreen'

const navigator = createStackNavigator(
  {
  Search: SearchScreen,
  BizzesShow: BizzesShowScreen
  }, 
  {
    initialRouteName: 'Search', 
    defaultNavigationOptions: {
      title: "Business Search"
    }
  }
)

export default createAppContainer(navigator)