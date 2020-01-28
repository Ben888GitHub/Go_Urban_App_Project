import * as React from 'react';
import { CheckBox, ListItem, Picker, Textarea } from 'native-base';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
const axios = require('axios').default;

export default class EmployeeScreen2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      idNum: Math.floor(Math.random() * 9000000000 + 1000000000),
      name: "",
      location: "",
      gender: "none",
      ageGroup: "none",
      education: "none",
      experience: "none",
      cleaning: false,
      driving: false,
      mason: false,
      dish: false,
      housekeeping: false,
      factory: false,
      gardening: false,
    }
  }

  updateName = (name) => {
    this.setState({ name })
  }
  
  updateLocation = (location) => {
    this.setState({ location })
  }

  handleOnPress = () => {
    if (this.state.name === "" ||
      this.state.gender === "" ||
      this.state.ageGroup === "none" ||
      this.state.education === "none" ||
      this.state.experience === "none")
      Alert.alert("Empty fields",
        "Some of the fields have not been selected.",
        [
          { text: 'OK' }
        ])
    else {
      skillsList = []
      if(this.state.cleaning){
        skillsList.push("cleaning")
      }
      if(this.state.driving){
        skillsList.push("driving")
      }
      if(this.state.mason){
        skillsList.push("mason")
      }
      if(this.state.dish){
        skillsList.push("dish")
      }
      if(this.state.housekeeping){
        skillsList.push("housekeeping")
      }
      if(this.state.cleaning){
        skillsList.push("factory")
      }
      if(this.state.gardening){
        skillsList.push("gardening")
      }
      if(skillsList.length== 0){
        skillsList.push("other")
      }
      newEmployee = {
          "profession" : skillsList,
          "id" : this.state.idNum,
          "employeeName" : this.state.name,
          "gender" : this.state.gender,
          "ageGroup" : this.state.ageGroup,
          "education" : this.state.education,
          "salary" : "N/A",
          "experience" : this.state.experience,
          "location" : this.state.location
      }
      console.log(newEmployee)
      Alert.alert(
        'New Employee Listing',
        `Are you sure you want to post this?` +
        `\n\nEmployee Name: ${newEmployee.employeeName}` +
        `\n\nID Number : ${newEmployee.id}`,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Post',

            onPress: () => {
              this.props.navigation.navigate('ThankPoster', 
              {idNum: newEmployee.id}
              )
              axios.post('https://kwzcxp9w01.execute-api.us-east-1.amazonaws.com/dev/addEmployees', newEmployee)
                .then(response => {
                  console.log(JSON.stringify(response.data.body))
                }).catch((error) => {
                  console.log(error)
                })

            }
          }
        ]
      )
    }
  }
  updateAgeGroup = (ageGroup) => {
    this.setState({ ageGroup: ageGroup })
  }
  updateGender = (gender) => {
    this.setState({ gender: gender })
  }
  updateEducation = (education) => {
    this.setState({ education: education })
  }
  updateExperience = (experience) => {
    this.setState({ experience: experience })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top_container}>
          <Text style={styles.pInfo}>Personal {"\n"}Information</Text>
        </View>
        <View style={styles.bottom_container}>
          <ScrollView>
            <Text style={styles.mediumText}>New Employee Listing</Text>
            <Text style={styles.labelText}>Your name:</Text>
            <TextInput 
            style={styles.inputStyling} 
            onChangeText = {this.updateName}
            bordered placeholder="Full Name" />
            <Text style={styles.labelText}>Your current country:</Text>
            <TextInput 
            style={styles.inputStyling} 
            onChangeText = {this.updateLocation}
            bordered placeholder="Your country " />
            <Text style={styles.labelText}>More about yourself</Text>
            <View style={styles.containerStyling}>
              <Picker
                selectedValue={this.state.gender}
                onValueChange={this.updateGender}>
                <Picker.Item label="Gender..." value="none" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
              </Picker>
            </View>
            <View style={styles.containerStyling}>
              <Picker
                selectedValue={this.state.ageGroup}
                onValueChange={this.updateAgeGroup}>
                <Picker.Item label="Age Group..." value="none" />
                <Picker.Item label="18-30" value={18} />
                <Picker.Item label="30-40" value={30} />
                <Picker.Item label="40-50" value={40} />
                <Picker.Item label="50+" value={50} />
              </Picker>

            </View>
            <View style={styles.containerStyling}>
              <Picker
                selectedValue={this.state.education}
                onValueChange={this.updateEducation}>
                <Picker.Item label="Education..." value="none" />
                <Picker.Item label="No formal education" value="no" />
                <Picker.Item label="Attended primary school" value="primary" />
                <Picker.Item label="Attended secondary school" value="secondary" />
                <Picker.Item label="Finished 10th grade" value="high" />
                <Picker.Item label="Have a diploma" value="diploma" />
                <Picker.Item label="Have a degree" value="degree" />
              </Picker>
            </View>
            <View style={styles.containerStyling}>
              <Picker
                selectedValue={this.state.experience}
                onValueChange={this.updateExperience}>
                <Picker.Item label="Experience..." value="none" />
                <Picker.Item label="No previous work experience" value="no" />
                <Picker.Item label="1 year of experience" value="1 year" />
                <Picker.Item label="2 years of experience" value="2 years" />
                <Picker.Item label="3 years of experience" value="3 years" />
                <Picker.Item label="4 years of experience" value="4 years" />
                <Picker.Item label="5 years of experience" value="5 years" />
                <Picker.Item label="5+ years of experience" value="5+ years" />
              </Picker>
            </View>
            <Text style={styles.labelText}>Your skills</Text>
            <View style={styles.containerStyling}>
              <ListItem onPress={() => this.setState({ cleaning: !this.state.cleaning })}>
                <CheckBox
                  checked={this.state.cleaning}
                  onPress={() => this.setState({ cleaning: !this.state.cleaning })} />
                <Text style={styles.checkBoxStyling}>Cleaning</Text>
              </ListItem>
              <ListItem onPress={() => this.setState({ driving: !this.state.driving })}>
                <CheckBox
                  checked={this.state.driving}
                  onPress={() => this.setState({ driving: !this.state.driving })} />
                <Text style={styles.checkBoxStyling}>Driving</Text>
              </ListItem>
              <ListItem onPress={() => this.setState({ mason: !this.state.mason })}>
                <CheckBox
                  checked={this.state.mason}
                  onPress={() => this.setState({ mason: !this.state.mason })} />
                <Text style={styles.checkBoxStyling}>Construction/ Mason</Text>
              </ListItem>
              <ListItem onPress={() => this.setState({ dish: !this.state.dish })}>
                <CheckBox
                  checked={this.state.dish}
                  onPress={() => this.setState({ dish: !this.state.dish })} />
                <Text style={styles.checkBoxStyling}>Dishwashing</Text>
              </ListItem>
              <ListItem onPress={() => this.setState({ housekeeping: !this.state.housekeeping })}>
                <CheckBox
                  checked={this.state.housekeeping}
                  onPress={() => this.setState({ housekeeping: !this.state.housekeeping })} />
                <Text style={styles.checkBoxStyling}>Housekeeping</Text>
              </ListItem>
              <ListItem onPress={() => this.setState({ factory: !this.state.factory })}>
                <CheckBox
                  checked={this.state.factory}
                  onPress={() => this.setState({ factory: !this.state.factory })} />
                <Text style={styles.checkBoxStyling}>Factory</Text>
              </ListItem>
              <ListItem onPress={() => this.setState({ gardening: !this.state.gardening })}>
                <CheckBox
                  checked={this.state.gardening}
                  onPress={() => this.setState({ gardening: !this.state.gardening })} />
                <Text style={styles.checkBoxStyling}>Gardening</Text>
              </ListItem>
            </View>
            <TouchableOpacity style={styles.button}
              onPress={this.handleOnPress}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top_container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    backgroundColor: 'lightgrey',
  },
  mediumText: {
    marginTop: 10,
    fontSize: 25,
    color: 'white',
    alignSelf: 'center',
  },
  checkBoxStyling: {
    fontSize: 18,
    padding: 5,
  },
  bottom_container: {
    flex: 5,
    backgroundColor: "crimson"

  },
  pInfo: {
    fontSize: 50,
  },
  inputStyling: {
    marginVertical: 10,
    marginHorizontal: 30,
    backgroundColor: "white",
    fontSize: 18,
    borderRadius: 4,
    padding: 10,
  },
  labelText: {
    fontSize: 20,
    color: 'white',
    marginHorizontal: 30,
    marginTop: 10,
    marginBottom: 5,
  },
  containerStyling: {
    marginHorizontal: 30,
    marginVertical: 4,
    backgroundColor: "white",
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'lightgrey',
    overflow: 'hidden',
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 30,
    marginBottom: 40,
    borderRadius: 10,
  },

});