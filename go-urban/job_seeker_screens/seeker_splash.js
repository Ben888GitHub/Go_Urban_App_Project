import * as React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Alert, Image, TouchableOpacity } from 'react-native';
import { Textarea } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';

export default class PosterSplash extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            employeeids: [],
            employeeID: '',
            isReady: false,
        };
    }
    componentDidMount() {
        axios.get('https://kwzcxp9w01.execute-api.us-east-1.amazonaws.com/dev/employees')
            .then(res => {
                const employees = res.data.body
                console.log(employees)
                listOfID = []
                for (let i = 0; i < employees.length; i++) {
                    listOfID.push(employees[i].id)
                }
                this.setState({ employeeids: listOfID })
                this.setState({ isReady: true })
            })
    }


    handleNew = () => {
        this.props.navigation.navigate('Employee')
    }


    showAlert = (message) => {
        Alert.alert("Invalid ID",
            message)
    }

    handleNextClick = () => {
        if (this.state.employeeID === '') {
            this.showAlert("Your ID cannot be empty.")

        }
        else if (isNaN(this.state.employeeID)) {
            this.showAlert("Your ID should be numbers only.")
        }
        else if (this.state.employeeID.length != "10") {
            this.showAlert("Your ID should be 10 digits long.")
        }
        else if (this.state.employeeids.includes(parseInt(this.state.employeeID)) === false) {
            this.showAlert("Your company ID does not exist.")
        }
        else {
            this.props.navigation.navigate('Employee_profile', {
                id: this.state.employeeID
            })
        }
    }

    render() {
        if (!this.state.isReady) {
            return (
                <View style={styles.containerTop}>
                    <Image source={require('./../assets/loading.gif')}></Image>
                </View>
            )
        }
        return (
            <View style={styles.container}>

                <View style={styles.containerTop}>
                    <Text style={styles.titleText}>
                        Job Seeker
                    </Text>
                </View>
                <View style={styles.containerBottom}>
                    <View>
                        <Text style={styles.bodyText}>
                            Please enter the 10-digit user ID number provided with your registry.
                        </Text>
                        <TextInput
                            maxLength={10}
                            style={styles.idinput}
                            value={this.state.employeeID}
                            onChangeText={(employeeID) => this.setState({ employeeID })}
                            placeholder="10-digit user ID">

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
        backgroundColor: "lightgrey"
    },
    proceedText: {
        fontSize: 16,
    },
    proceedButon: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: "lightgrey",
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
        backgroundColor: "crimson"
    }
})