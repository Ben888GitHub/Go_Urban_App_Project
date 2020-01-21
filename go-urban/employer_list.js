import * as React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { AppLoading } from 'expo';
import { ScrollView } from 'react-native-gesture-handler';

export default class EmployerScreen2 extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            employees: [],
        };

    }

    componentDidMount() {
        axios.get('https://kwzcxp9w01.execute-api.us-east-1.amazonaws.com/dev/employees')
            .then(res => {
                const employees = res.data.body;
                this.setState({ employees })
                this.setState({ isReady: true })
            })
    }

    renderCards() {
        return this.state.employees.map((item) => {
            return (
                <View style={styles.card}>
                    <View style={styles.cardTop}>
                        <Text style={styles.cardTitle}>
                            {item.employeeName}
                        </Text>
                    </View>
                    <View style={styles.cardBottom}>
                        <Text style={styles.cardBody}>
                            Profession: {item.profession}{"\n"}
                            Gender: {item.gender}{"\n"}
                            Age: {item.ageGroup}
                        </Text>
                    </View>
                </View>
            )
        })
    }

    render() {
        if (!this.state.isReady) {
            return (
                <AppLoading />
            )
        }
        return (
            <View style={styles.container}>
                <View style={styles.containerTop}>
                    <Text style={styles.topText}>
                        Employee List
                    </Text>
                </View>
                <View style={styles.containerBottom}>
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
        backgroundColor: 'bisque',
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
        backgroundColor: "slateblue",

    },
    cardBody: {
        fontSize: 16,

    },
    card: {
        borderRadius: 20,
        backgroundColor: "bisque",
        marginHorizontal: 10,
        marginTop: 20,
        height: 150,
        overflow: "hidden",
    },
    cardTop: {
        backgroundColor: "grey",
        flex: 1,
        flexDirection: "row-reverse",
        alignItems: "center",
        padding: 10,
    },
    cardBottom: {
        flexDirection: "column",
        flex: 3,
        padding: 10,
    },
    cardTitle: {
        color: "white",
        size: 20,
    }
})

