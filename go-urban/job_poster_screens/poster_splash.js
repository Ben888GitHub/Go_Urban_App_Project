import * as React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { Textarea } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';

export default class SeekerSplash extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            companyids: [],
            companyID: '',
            isReady: false,

        };
    }

    componentDidMount() {
        axios.get('https://kwzcxp9w01.execute-api.us-east-1.amazonaws.com/dev/companies')
            .then(res => {
                const companies = res.data.body
                console.log(companies)
                listOfID = []
                for (let i = 0; i < companies.length; i++) {
                    listOfID.push(companies[i].id)
                }
                this.setState({ companyids: listOfID })
                this.setState({ isReady: true })
            })
    }

    handleNew = () => {
        this.props.navigation.navigate('Employer')
    }

    showAlert = (message) => {
        Alert.alert("Invalid ID",
            message)
    }

    handleNextClick = () => {
        if (this.state.companyID === '') {
            this.showAlert("Your ID cannot be empty.")
        }
        else if (isNaN(this.state.companyID)) {
            this.showAlert("Your ID should be numbers only.")
        }
        else if (this.state.companyID.length != "8") {
            this.showAlert("Your ID should be 8 digits long.")
        }
        else if (this.state.companyids.includes(parseInt(this.state.companyID)) === false) {
            this.showAlert("Your company ID does not exist.")
        }
        else {
            this.props.navigation.navigate('PosterProfile', {
                id: this.state.companyID
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
                            maxLength={8}
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