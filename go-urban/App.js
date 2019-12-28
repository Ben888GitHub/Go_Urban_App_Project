import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import EmployerScreen from './employer_screen';
import EmployeeScreen from './employee_screen';
import EmployerScreen2 from './employer_screen2';
import initialSplash from './initial_splash';
import { createStore } from 'redux'

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

const initialState = {
  jobType: 'none',
  gender: 'none',
  ageGroup: 'none',
  salary: 'none',
}

reducer = (state = initialState) => {
  return state
}

const store = createStore(reducer)

const AppContainer = createAppContainer(RootStack)

export default class App extends React.Component {
  render = () => <AppContainer />;

};