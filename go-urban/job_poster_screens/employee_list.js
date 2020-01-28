import * as React from 'react';
import axios from 'axios';
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default class EmployerScreen2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            currentCompany: this.props.navigation.state.params.currentCompany,
            employees: [],
            suitableEmployees: [],
        };
    }

    componentDidMount() {
        axios.get('https://kwzcxp9w01.execute-api.us-east-1.amazonaws.com/dev/employees')
            .then(res => {
                const employees = res.data.body;
                var suitableEmployeesTemp = [];
                this.setState({ employees })
                for (var i = 0; i < this.state.employees.length; i++) {
                    if (this.state.employees[i].profession.includes(this.state.currentCompany.profession[0])) {
                        suitableEmployeesTemp.push(this.state.employees[i])
                    }
                }
                this.setState({ suitableEmployees: suitableEmployeesTemp })
                this.setState({ isReady: true })
            })

    }



    renderCards() {
        return this.state.suitableEmployees.map((item) => {
            return (
                <View style={styles.card}>
                    <View style={styles.cardTop}>
                        <Text style={styles.cardTitle}>
                            {item.employeeName}
                        </Text>
                    </View>
                    <View style={styles.cardBottom}>
                        <View style={styles.cardBottomLeft}>
                            <Image
                                source={require('./../assets/pfp.png')}
                                style={styles.image} />
                        </View>
                        <View style={styles.cardBottomRight}>
                            <Text style={styles.cardBody}>
                                Profession: {item.profession}{"\n"}
                                Gender: {item.gender}{"\n"}
                                Age: {item.ageGroup}
                            </Text>
                            <TouchableOpacity style={styles.detailsButton}>
                                <Text style={styles.detailsText}>Details</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View >
            )
        })
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
                    <Text style={styles.topText}>
                        My Company: {this.state.currentCompany.companyName}
                    </Text>
                </View>
                <View style={styles.containerBottom}>
                    <Text style={styles.titleText}>
                        Potential Employees
                    </Text>
                    <ScrollView>
                        {this.renderCards()}
                    </ScrollView>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "lightgrey",
    },
    titleText: {
        fontSize: 26,
        color: "white",
        margin: 20,
        alignSelf: "center",
    },
    detailsText: {
        color: "white"
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: "contain"
    },
    detailsButton: {
        margin: 5,
        alignSelf: "flex-end",
        padding: 5,
        width: 55,
        backgroundColor: "crimson"
    },
    containerTop: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    topText: {
        color: "black",
        fontSize: 30,

    },
    containerBottom: {
        flex: 6,
        flexDirection: "column",
        backgroundColor: "crimson",
    },
    cardBody: {
        fontSize: 16,
        textAlign: "right",
    },
    card: {
        borderRadius: 20,
        backgroundColor: "lightgrey",
        marginHorizontal: 10,
        marginTop: 20,
        height: 150,
        overflow: "hidden",
    },
    cardTop: {
        backgroundColor: "grey",
        flex: 0.3,
        flexDirection: "row-reverse",
        alignItems: "center",
    },
    cardBottom: {
        flexDirection: "row",
        flex: 0.7,
    },
    cardBottomLeft: {
        flex: 0.3
    },
    cardBottomRight: {
        flex: 0.7,
        padding: 10,
    },
    cardTitle: {
        color: "white",
        fontSize: 24,
        paddingRight: 5
    },
})

