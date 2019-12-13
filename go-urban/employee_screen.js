import * as React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class EmployeeScreen extends React.Component {
  constructor(props) {  
    super(props);  
    this.state = {text: ''};  
}  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top_container}>
          <Text style={styles.pInfo}>Personal Information</Text>
        </View> 
        <View style={styles.bottom_container}>
          <View> 
            <TextInput  
              style={styles.inputBox}  
              placeholder="Full name"  
            />
          </View>
          <View>  
            <TextInput  
              style={styles.inputBox}  
              placeholder="Date of Birth" 
            />  
          </View>
          <View>  
            <TextInput  
              style={styles.inputBox}  
              placeholder="Username"  
            />  
          </View>
          <View>  
            <TextInput  
              style={styles.inputBox}  
              placeholder="Password"  
            />  
          </View>      
        </View> 
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
  },
  
  top_container: {
    flex: 2.5,
    flexDirection: 'column',
    backgroundColor:'slateblue',
  },

  bottom_container: {
    flex: 3.5,
    backgroundColor: 'bisque',
  },

  pInfo: {
    fontSize: 50,
    color: 'white',
    marginTop: 170,
    marginLeft: 20,
  },

  inputBox: {
    fontSize: 24,
    textAlign: "center",
    height: 60,
    borderColor: 'grey',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 25,
    marginRight: 10,
    marginLeft: 10,
  },

  fullNameStyle: {
    marginTop: 50,
    overflow: "hidden",
  }
});
