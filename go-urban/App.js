import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import EmployerScreen from './employer_screen';
import EmployeeScreen from './employee_screen';
import Employer_list from './employer_list';
import Careerlist from './career_list';
import initialSplash from './initial_splash';
import { createStore } from 'redux'

const RootStack = createStackNavigator(
  {
    Home: initialSplash,
    Employee: EmployeeScreen,
    Employer: EmployerScreen,
    Employerlist: Employer_list,
    Careerlist: Careerlist,
  },
  {
    initialRouteName: 'Employer',
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