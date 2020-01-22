import * as React from 'react';
import { CheckBox, ListItem, Picker, Textarea } from 'native-base';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class EmployeeScreen2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
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
  // handleClick = () => {

  //   newJob = {
  //     companyName: this.state.companyName,
  //     profession: this.state.jobType,
  //     gender: this.state.gender,
  //     ageGroup: this.state.ageGroup,
  //     annualSalary: this.state.salary,
  //     jobDesc: this.state.jobDesc,
  //   };
  //   Alert.alert(
  //     'Post Job',
  //     `Are you sure you want to post this?` +
  //     `\n\nCompany Name: ${newJob.companyName}` +
  //     `\nProfession: ${newJob.profession}` +
  //     `\nGender: ${newJob.gender}` +
  //     `\nAge Group: ${newJob.ageGroup}` +
  //     `\nAnnual Salary: ${newJob.annualSalary}` +
  //     `\n\nJob Description: ${newJob.jobDesc}`,
  //     [
  //       {
  //         text: 'Cancel',
  //         onPress: () => { },
  //         style: 'cancel',
  //       },
  //       {
  //         text: 'Post',
  //         onPress: () => this.props.navigation.navigate('Employerlist')
  //       }
  //     ]
  //   )
  // }
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
            <Textarea style={styles.inputStyling} rowSpan={2} bordered placeholder="Full Name" />
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
                <Picker.Item label="18-30" value="young" />
                <Picker.Item label="30-40" value="thirties" />
                <Picker.Item label="40-50" value="forties" />
                <Picker.Item label="50+" value="Old" />
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
                <Picker.Item label="1 year of experience" value="1" />
                <Picker.Item label="2 years of experience" value="2" />
                <Picker.Item label="3 years of experience" value="3" />
                <Picker.Item label="4 years of experience" value="4" />
                <Picker.Item label="5 years of experience" value="5" />
                <Picker.Item label="5+ years of experience" value="5+" />
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
              <ListItem onPress={() => this.setState({ driving: !this.state.cleaning })}>
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
              onPress={() => this.props.navigation.navigate('Careerlist')}>
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
    backgroundColor: 'bisque',
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
    backgroundColor: "slateblue"

  },
  pInfo: {
    fontSize: 50,
  },
  inputStyling: {
    marginHorizontal: 30,
    backgroundColor: "white",
    fontSize: 18,
    borderRadius: 4,
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
    backgroundColor: 'bisque',
    overflow: 'hidden',
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 30,
    marginBottom: 40,
    borderRadius: 10,
  },

});