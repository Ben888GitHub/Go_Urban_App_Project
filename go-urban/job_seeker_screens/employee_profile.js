import * as React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ThemeConsumer } from 'react-native-elements';

export default class PosterProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            employees: [],
            currentEmployee: {},
            myEmployeeID: this.props.navigation.state.params.id,
            skills: ''
        }
    }

    updateCurrentEmployee = (currentEmployee) => {
        this.setState({ currentEmployee })
    }

    componentDidMount() {
        axios.get('https://kwzcxp9w01.execute-api.us-east-1.amazonaws.com/dev/employees')
            .then(res => {
                const employees = res.data.body
                this.setState({ employees })
                for (let i = 0; i < employees.length; i++) {
                    if (this.state.employees[i].id == this.state.myEmployeeID) {
                        this.updateCurrentEmployee(this.state.employees[i])
                    }
                    this.setState({ isReady: true })
                }
                skills = ''
                skills = this.state.currentEmployee.profession.join(", ")
                this.setState({ skills: skills })
            })
    }

    render() {
        if (!this.state.isReady) {
            return (
                <View style={styles.loadingView}>
                    <Image source={require('./../assets/loading.gif')}></Image>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <View style={styles.containerTop}>
                    <Text style={styles.titleText}>
                        Welcome back, {this.state.currentEmployee.employeeName}
                    </Text>

                </View>
                <View style={styles.containerBottom}>
                    <ScrollView>
                        <View style={styles.paddedView}>
                            <Text style={styles.headerText}>
                                Employee Name
                            </Text>
                            <Text style={styles.infoText}>
                                {this.state.currentEmployee.employeeName}
                            </Text>

                            <Text style={styles.headerText}>
                                Gender
                            </Text>
                            <Text style={styles.infoText}>
                                {this.state.currentEmployee.gender}
                            </Text>

                            <Text style={styles.headerText}>
                                Skills
                            </Text>
                            <Text style={styles.infoText}>
                                {this.state.skills}
                            </Text>

                            <Text style={styles.headerText}>
                                Age Group
                            </Text>
                            <Text style={styles.infoText}>
                                {this.state.currentEmployee.ageGroup}+
                            </Text>

                            <Text style={styles.headerText}>
                                Country of Residence
                            </Text>
                            <Text style={styles.infoText}>
                                {this.state.currentEmployee.location}
                            </Text>
                        </View>
                    </ScrollView>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('Careerlist',
                                { currentEmployee: this.state.currentEmployee, });
                        }}>
                        <View style={styles.buttonHolder}>
                            <Text style={styles.nextText}>
                                View Potential Jobs
                            </Text>
                        </View>
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
        backgroundColor: 'lightgrey',
    },
    containerTop: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    nextText: {
        paddingBottom: 20,
        fontSize: 20,
        fontWeight: "200",
    },
    containerBottom: {
        backgroundColor: "crimson",
        flex: 6,
    },
    paddedView: {
        padding: 20,
    },
    titleText: {
        fontSize: 24,
    },
    loadingView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        marginTop: 20,
        color: "white",
        fontSize: 16,
        fontWeight: "300",
    },
    infoText: {
        fontSize: 42,
        color: "white",
        fontWeight: "600",
    },
    descText: {
        paddingTop: 10,
        fontSize: 24,
        color: "white",

    },
    buttonHolder: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'pink',
        height: 70,
    }
})