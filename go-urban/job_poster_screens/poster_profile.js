import * as React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native';
import { AppLoading } from 'expo';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { ScrollView } from 'react-native-gesture-handler';
import { ThemeConsumer } from 'react-native-elements';

export default class PosterProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companyExists: false,
            companies: [],
            currentCompany: {},
            myCompanyID: this.props.navigation.state.params.id,
        }
    }

    updateCurrentCompany = (currentCompany) => {
        this.setState({ currentCompany })
    }

    componentDidMount() {
        axios.get('https://kwzcxp9w01.execute-api.us-east-1.amazonaws.com/dev/companies')
            .then(res => {
                const companies = res.data.body
                this.setState({ companies })
                for (let i = 0; i < companies.length; i++) {
                    if (this.state.companies[i].id == this.state.myCompanyID) {
                        this.updateCurrentCompany(this.state.companies[i])
                    }
                }
                this.setState({ isReady: true })
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
                        Welcome back, {this.state.currentCompany.companyName}
                    </Text>

                </View>
                <View style={styles.containerBottom}>
                    <ScrollView>
                        <View style={styles.paddedView}>
                            <Text style={styles.headerText}>
                                Company Name
                            </Text>
                            <Text style={styles.infoText}>
                                {this.state.currentCompany.companyName}
                            </Text>

                            <Text style={styles.headerText}>
                                Preferred Gender
                            </Text>
                            <Text style={styles.infoText}>
                                {this.state.currentCompany.gender}
                            </Text>

                            <Text style={styles.headerText}>
                                Desired Skill
                            </Text>
                            <Text style={styles.infoText}>
                                {this.state.currentCompany.profession[0]}
                            </Text>

                            <Text style={styles.headerText}>
                                Preferred Age Group
                            </Text>
                            <Text style={styles.infoText}>
                                {this.state.currentCompany.ageGroup}+
                            </Text>

                            <Text style={styles.headerText}>
                                Employment Location
                            </Text>
                            <Text style={styles.infoText}>
                                {this.state.currentCompany.location}
                            </Text>

                            <Text style={styles.headerText}>
                                Annual Salary
                            </Text>
                            <Text style={styles.infoText}>
                                {this.state.currentCompany.annualSalary}+
                            </Text>

                            <Text style={styles.headerText}>
                                Job Description
                            </Text>
                            <Text style={styles.descText}>
                                {this.state.currentCompany.jobDesc}
                            </Text>
                        </View>
                    </ScrollView>
                    <TouchableOpacity 
                    onPress = {() => {
                        this.props.navigation.navigate('Employeelist', 
                        { currentCompany : this.state.currentCompany, });
                    }}>
                        <View style={styles.buttonHolder}>
                            <Text style={styles.nextText}>
                                View Potential Employees
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
        fontWeight: 200,
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
        fontWeight: 300,
    },
    infoText: {
        fontSize: 42,
        color: "white",
        fontWeight: 600,
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