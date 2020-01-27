import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import EmployerScreen from './job_poster_screens/employer_screen';
import EmployeeScreen from './job_seeker_screens/employee_screen';
import Employee_list from './job_poster_screens/employee_list';
import CareerList from './job_seeker_screens/career_list';
import initialSplash from './initial_splash';
import SeekerSplash from './job_poster_screens/poster_splash';
import PosterSplash from './job_seeker_screens/seeker_splash';
import { createStore } from 'redux'

const RootStack = createStackNavigator(
  {
    Home: initialSplash,
    Employee: EmployeeScreen,
    Employer: EmployerScreen,
    Employeelist: Employee_list,
    PosterSplash: PosterSplash,
    SeekerSplash: SeekerSplash,
    Careerlist: CareerList,
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
  experience: 'none',
}

reducer = (state = initialSplash) => {
  return state
}

const store = createStore(reducer)

const AppContainer = createAppContainer(RootStack)

export default class App extends React.Component {
  render = () => <AppContainer />;
};