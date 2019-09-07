import React from 'react'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import IconFa from 'react-native-vector-icons/FontAwesome5'

import Home from '../screens/Home'
import Bill from '../screens/Bill/Bill'
import Food from '../screens/Food/Food'
import EndRe from '../screens/end/end'
import Open from '../screens/open'
import Callsc from '../screens/Call/Call'
import Modal from '../components/modals/modal_yesno'


const StackPublic = createAppContainer(createStackNavigator(
  {
    Open:Open,
    Home:Home,
    Bill:Bill,
    Food:Food,
    Callsc:Callsc,
    Modal:Modal,
    EndRe:EndRe,
    
  }, 
  {
    initialRouteName: "Open",
    headerMode: 'none'
  }
)
)
// HomeNavigator.navigationOptions = ({ navigation }) => {
//   let tabBarVisible = true;
//   if (navigation.state.index > 0) {
//     tabBarVisible = false;
//   }
//   return {
//     tabBarVisible
//   };
// };

export default StackPublic