import * as React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'; 

export default class initialSplash extends React.Component {
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
              onPress={() => this.props.navigation.navigate('PosterSplash')}>
              <Text style={styles.buttonText}>Job Seeker</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.smallContainerBottom}>
            <Image
              source={require('./assets/employee.png')}
              style={styles.descriptorLogo} />
            <TouchableOpacity style={styles.button}
              onPress={() => this.props.navigation.navigate('SeekerSplash')}>
              <Text style={styles.buttonText}>Job Poster</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'bisque',
  },
  buttonText: {
    fontSize: 24,
    color:'white',
    fontWeight: 'bold',
    textAlign: 'center',
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
    color:'black',
    marginBottom: 20
    
  },
  roundedContainer: {
    flex: 0.9,
    padding: 20,
    marginTop: 100,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  smallContainerTop: {
    flex: 1,
    overflow: "hidden",
    backgroundColor: "slateblue",
    flexDirection: "row",
    alignSelf: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    alignItems: "center",
  },
  smallContainerBottom: {
    margin: 0,
    backgroundColor: "slateblue",
    overflow: "hidden",
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
