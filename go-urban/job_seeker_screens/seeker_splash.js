import * as React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Textarea } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';

export default class PosterSplash extends React.Component {

    constructor(props) {
        super(props)
    }

    handleNew = () => {
        this.props.navigation.navigate('Employee')
    }

    render() {
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
                            placeholder="10-digit user ID">

                        </TextInput>
                        <TouchableOpacity
                        style = {styles.proceedButon}
                        onPress = {() => this.props.navigation.navigate('Careerlist')}>
                            <Text style = {styles.proceedText}>
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