import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../styles/colors";
import { HomeScreen } from "../pages/HomeScreen";


const stackRoutes = createStackNavigator()

const AppRoutes: React.FC = () => (

  <stackRoutes.Navigator
    headerMode='none'
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      }
    }}
  >
    <stackRoutes.Screen name="Home Screen" component={HomeScreen}/>
  </stackRoutes.Navigator>


)

export default AppRoutes;