import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Picker } from 'native-base';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

export default class EmployerScreen extends React.Component {
  state = { 
    jobType: 'none',
    gender: 'none',
    ageGroup: 'none',
    salary: 'none',
  }
  updateJobType = (jobType) => {
    this.setState({ jobType: jobType })
  }
  updateGender = (gender) => {
    this.setState({ gender: gender })
  }
  updateAgeGroup = (ageGroup) => {
    this.setState({ ageGroup: ageGroup })
  }
  updateSalary = (salary) => {
    this.setState({ salary: salary })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.horizontalContainer}>
          <Image style={styles.logo}
            source={require('./assets/placeholder-logo.png')}>
          </Image>
          <View style={styles.nameHolder}>
            <Text style={styles.largeText}>
              Spartan Fitness
            </Text>
          </View>
        </View>
        <View style={styles.scrollHolder}>
          <ScrollView>
            <Text style={styles.mediumText}>
              New Job Listing
            </Text>
            <Text style={styles.labelText}>
              Pick a profession:
            </Text>
            <View style={styles.containerStyling}>
              <Picker
                selectedValue={this.state.jobType}
                onValueChange={this.updateJobType}>
                <Picker.Item label="Choose..." value="none" />
                <Picker.Item label="Cleaning" value="cleaning" />
                <Picker.Item label="Driving" value="driving" />
                <Picker.Item label="Construction/ Mason" value="mason" />
                <Picker.Item label="Dish Washing" value="dish" />
                <Picker.Item label="Housekeeping" value="housekeeping" />
                <Picker.Item label="Factory Worker" value="factory" />
                <Picker.Item label="Gardening" value="gardening" />
                <Picker.Item label="Other..." value="other" />
              </Picker>
            </View>
            <Text style={styles.labelText}>
              Pick a preferred gender:
            </Text>
            <View style={styles.containerStyling}>
              <Picker
                selectedValue={this.state.gender}
                onValueChange={this.updateGender}>
                <Picker.Item label="Choose..." value="none" />
                <Picker.Item label="No preferences" value="any" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
              </Picker>
            </View>
            <Text style={styles.labelText}>
              Pick an age group: 
            </Text>
            <View style={styles.containerStyling}>
              <Picker
                selectedValue={this.state.ageGroup}
                onValueChange={this.updateAgeGroup}>
                <Picker.Item label="Choose..." value="none" />
                <Picker.Item label="No preferences" value="any" />
                <Picker.Item label="18-30" value="young" />
                <Picker.Item label="30-40" value="thirties" />
                <Picker.Item label="40-50" value="forties" />
                <Picker.Item label="50+" value="Old" />
              </Picker>
            </View>
            <Text style={styles.labelText}>
              Pick an annual salary:
            </Text>
            <View style={styles.containerStyling}>
              <Picker
                selectedValue={this.state.salary}
                onValueChange={this.updateSalary}>
                <Picker.Item label="Choose..." value="none" />
                <Picker.Item label="Available upon request" value="inquire" />
                <Picker.Item label="less than $10,000" value="minimum" />
                <Picker.Item label="$10,000 - $20,000" value="10k" />
                <Picker.Item label="$20,000 - $30,000" value="20k" />
                <Picker.Item label="$30,000+" value="30k"/>
              </Picker>
            </View>
            <Text style={styles.labelText}>
              Give a description of your job:
            </Text>
            <TextInput style={styles.inputStyling}              
              multiline
              numberOfLines={5}
            >
            </TextInput>
            <TouchableOpacity style={styles.button}
              onPress={() => this.props.navigation.navigate('Employer2')}>
              <Text style={styles.buttonText}>Post</Text>
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
    flexDirection: "column",
    backgroundColor: 'bisque',
  },
  labelText: {
    fontSize: 20,
    color: 'white',
    marginHorizontal: 30,
  },
  scrollHolder: {
    backgroundColor: "slateblue",
    flex: 5,
    marginTop: 20,
  },
  nameHolder: {
    flex: 0.7,
  },
  largeText: {
    fontSize: 30,
    alignSelf: "center",
  },
  mediumText: {
    marginVertical: 20,
    fontSize: 25,
    color: 'white',
    alignSelf: 'center',
  },
  containerStyling: {
    marginHorizontal: 30,
    marginVertical: 10,
    backgroundColor:"white",
  },
  inputStyling: {
    height: 400,
    marginHorizontal: 30,
    marginVertical: 10,
    backgroundColor:"white",
    fontSize: 20,
    padding: 20,
  },
  horizontalContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    flex: 0.3,
    resizeMode: 'contain',
    margin: 10,
  },
  buttonText: {
    fontSize: 24,
    color:'black',
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
})