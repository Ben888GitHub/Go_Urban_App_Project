import * as React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { Textarea } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';

export default class SeekerSplash extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            companyID: '',
        };
    }

    handleNew = () => {
        this.props.navigation.navigate('Employer')
    }

    showAlert = (message) => {
        Alert.alert("Invalid ID",
        message)
    } 

    handleNextClick = () => {
        if(this.state.companyID === ''){
            this.showAlert("Your ID cannot be empty.")

        }
        else if(isNaN(this.state.companyID)){
            this.showAlert("Your ID should be numbers only.")
         }
        else if (this.state.companyID.length != "8") {
            this.showAlert("Your ID should be 8 digits long.")
        } 
        else {
            this.props.navigation.navigate('Employeelist', {
                index: this.state.companyID
            })
        }
    }


    render() {
        return (
            <View style={styles.container}>

                <View style={styles.containerTop}>
                    <Text style={styles.titleText}>
                        Job Poster
                    </Text>
                </View>
                <View style={styles.containerBottom}>
                    <View>
                        <Text style={styles.bodyText}>
                            Please enter the 8-digit company ID number provided with your registry.
                        </Text>
                        <TextInput
                            style={styles.idinput}
                            maxLength = {8}
                            value={this.state.companyID}
                            onChangeText={(companyID) => this.setState({ companyID })}
                            placeholder="8-digit ID">

                        </TextInput>
                        <TouchableOpacity
                            style={styles.proceedButon}
                            onPress={this.handleNextClick}>
                            <Text style={styles.proceedText}>
                                Next
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={this.handleNew}>
                        <Text style={styles.newText}>
                            New Here? Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "bisque"
    },
    proceedText: {
        fontSize: 16,
    },
    proceedButon: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: "bisque",
        alignSelf: "center"
    },
    newText: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
        marginBottom: 20,
    },
    bodyText: {
        fontSize: 20,
        color: "white",
    },
    idinput: {
        padding: 5,
        backgroundColor: "white",
        marginVertical: 10,
        borderRadius: 5,
        height: 40,
    },
    containerTop: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    titleText: {
        fontSize: 40,
    },
    containerBottom: {
        padding: 10,
        flex: 6,
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "slateblue"
    }
})