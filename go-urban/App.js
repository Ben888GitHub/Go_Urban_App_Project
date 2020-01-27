import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import EmployerScreen from './job_poster_screens/employer_screen';
import EmployeeScreen from './job_seeker_screens/employee_screen';
import Employer_list from './job_poster_screens/employer_list';
import CareerList from './job_seeker_screens/career_list';
import CareerDetail from './job_seeker_screens/career_detail';
import initialSplash from './initial_splash';
import SeekerSplash from './job_poster_screens/poster_splash';
import PosterSplash from './job_seeker_screens/seeker_splash';
import Employee_Profile from './job_seeker_screens/employee_profile';
import Career_Offer from './job_seeker_screens/career_offer';
import Setting from './setting';
import { createStore } from 'redux'

const RootStack = createStackNavigator(
  {
    Home: initialSplash,
    Employee: EmployeeScreen,
    Employer: EmployerScreen,
    Employerlist: Employer_list,
    PosterSplash: PosterSplash,
    SeekerSplash: SeekerSplash,
    Careerlist: CareerList,
    CareerDetail: CareerDetail,
    Employee_profile: Employee_Profile,
    Career_offer: Career_Offer,
    Setting_screen: Setting,
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