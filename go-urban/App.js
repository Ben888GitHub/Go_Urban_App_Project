import * as React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


class initialSplash extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.roundedContainer}>
          <Text style={styles.largeText}>You are a...</Text>
          <View style={styles.smallContainerTop}>
            <View style={styles.descriptorText}>
              <Button
                title="Job Seeker"
                onPress={() => this.props.navigation.navigate('Employee')} />
            </View>
            <Image
              source={require('./assets/employer.png')}
              style={styles.descriptorLogo}
            ></Image>
          </View>
          <View style={styles.smallContainerBottom}>
            <Text style={styles.descriptorText}>Job Poster</Text>
            <Image
              source={require('./assets/employee.png')}
              style={styles.descriptorLogo}
            ></Image>
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

class EmployerScreen extends React.Component {
  render() {
    return (
      <View>
        <Text> EmployerScreen</Text>
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
    backgroundColor: 'green',
  },
  largeText: {
    fontSize: 40,
    textAlign: 'center',
  },
  roundedContainer: {
    flex: 0.7,
    padding: 40,
    marginTop: 175,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  smallContainerTop: {
    marginTop: 50,
    flex: 0.4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    alignItems: "center",
    borderWidth: 1,
    borderColor: 'grey',
  },
  smallContainerBottom: {
    margin: 0,
    flex: 0.4,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
    alignItems: "center",
    borderWidth: 1,
    borderColor: 'grey',
  },
  descriptorText: {
    flex: 0.7,
    fontSize: 20,
    padding: 40,
    textAlign: "left",
  },
  descriptorLogo: {
    alignItems: "center",
    width: 100,
    height: 100,
  }
});
