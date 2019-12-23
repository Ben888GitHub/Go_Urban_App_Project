import * as React from 'react';
import { StyleSheet, Text, View, Image, Button, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class EmployeeScreen2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top_container}>
          <Text style={styles.pInfo}>Personal {"\n"}Information</Text>
        </View> 
        <View style={styles.bottom_container}>
            
          <View style={styles.inputBox}> 
              <TextInput  
                style={styles.inputText} 
              />
          </View>
          <View style = {styles.titleContainer}>
            <Text style={styles.fullNameStyle}>Full Name</Text>
          </View>           
        </View> 
      </View>
    )
  }
};

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight   = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
  },
  
  top_container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    backgroundColor:'slateblue',
  },

  bottom_container: {
    flex: 5,
    backgroundColor: 'bisque',
  },

  titleContainer: {
    padding: 2,
    marginTop: 12,
    marginLeft: 50,
    position: "absolute",
    borderWidth: 2,
    backgroundColor: 'bisque'
  },

  pInfo: {
    fontSize: 50,
    color: 'white',
  },

  inputText: {
    fontSize: 24,
    textAlign: "center",
    height: 60,
    borderColor: 'grey',
    borderRadius: 15,
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: 25,
    marginRight: 10,
    marginLeft: 10,
    overflow: "hidden"
  },

  inputBox: {
    width: screenWidth,
    position: "absolute",
    overflow: "hidden",
  },

  fullNameStyle: {
    fontSize: 22,
  },
});