import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

export default class thank_you extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            idNum: this.props.navigation.state.params.idNum
        }
    }

    handleOnPress = () => {
        this.props.navigation.navigate("Home")
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.mainText}>
                        Thank you for signing up for our Go Urban App!
                    </Text>
                </View>
                <Image
                    source={require('./../assets/thankyou.png')}
                    style={styles.imageStyling}>

                </Image>
                <View style={styles.textContainer}>
                    <Text style={styles.mainText}>
                        You can now sign in with your ID number: {this.state.idNum}
                    </Text>

                    <TouchableOpacity style={styles.buttonHolder}
                    onPress = {this.handleOnPress}>
                        <Text style={styles.minorText}>
                            Main Menu
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
        backgroundColor: "lightgrey",
    },
    imageStyling: {
        flex: 2,
        alignSelf: "center",
        resizeMode: "contain"
    },
    textContainer: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    mainText: {
        fontSize: 25,
        alignSelf: "center",
        textAlign: "center",
        fontWeight: "200",
    },
    buttonHolder: {
        backgroundColor: "pink",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        marginTop: 20,
        borderRadius: 20,
    },
    minorText: {
        fontWeight: "200",
        fontSize: 20,
    }
})