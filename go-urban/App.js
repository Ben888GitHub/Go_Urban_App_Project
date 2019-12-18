import * as React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import EmployerScreen from './employer_screen';
import EmployeeScreen from './employee_screen';
import EmployerScreen2 from './employer_screen2';
import initialSplash from './initial_splash';


const RootStack = createStackNavigator(
  {
    Home: initialSplash,
    Employee: EmployeeScreen,
    Employer: EmployerScreen,
    Employer2: EmployerScreen2,


  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack)

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
};