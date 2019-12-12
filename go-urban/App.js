import * as React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import EmployerScreen from './employer_screen'

class initialSplash extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.roundedContainer}>
          <Text style={styles.largeText}>You are a...</Text>
          <View style={styles.smallContainerTop}>
            <Image style={styles.descriptorLogo}
              source={require('./assets/employer.png')}
            />
            <TouchableOpacity style={styles.button}
              onPress={() => this.props.navigation.navigate('Employee')}>
              <Text style={styles.buttonText}>Job Seeker</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.smallContainerBottom}>
            <Image
              source={require('./assets/employee.png')}
              style={styles.descriptorLogo} />
            <TouchableOpacity style={styles.button}
              onPress={() => this.props.navigation.navigate('Employer')}>
              <Text style={styles.buttonText}>Job Poster</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

class EmployeeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text> EmployeeScreen</Text>
      </View>
    )
  }
}


const RootStack = createStackNavigator(
  {
    Home: initialSplash,
    Employee: EmployeeScreen,
    Employer: EmployerScreen,
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'bisque',
  },
  buttonText: {
    fontSize: 24,
    color:'white',
    fontWeight: 'bold',
  },
  button: {
    flex: 1,
    backgroundColor: 'slateblue',
    overflow: 'hidden',
    padding: 30,
    alignItems: 'center'
  },
  largeText: {
    fontSize: 40,
    textAlign: 'center',
    color:'white'
  },
  roundedContainer: {
    flex: 0.7,
    padding: 40,
    marginTop: 175,
    marginHorizontal: 20,
    backgroundColor: 'maroon',
    borderRadius: 20,
  },
  smallContainerTop: {
    flex: 1,
    backgroundColor: "slateblue",
    flexDirection: "row",
    marginTop: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    alignItems: "center",
  },
  smallContainerBottom: {
    margin: 0,
    backgroundColor: "slateblue",
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
    alignItems: "center"
  },
  descriptorLogo: {
    alignItems: "center",
    width: 100,
    height: 100,

  }
});
