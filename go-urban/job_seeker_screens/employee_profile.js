import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import axios from 'axios';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Button } from 'native-base';

export default class Careerlist extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            employees: [],
        };
    }

    handleNew = () => {
        this.props.navigation.navigate('Careerlist')
    }
    componentDidMount() {
        axios.get('https://kwzcxp9w01.execute-api.us-east-1.amazonaws.com/dev/employees')
            .then(res => {
                const employees = res.data.body;
                this.setState({ employees })
                this.setState({ isReady: true })
            })
    }

    render(){
        return(
        <View style = {styles.container}>
            <View style = {styles.topContainer}>

                <Image
                    source={require('./../assets/pfp.png')}
                    style={styles.image} />
                <Text style = {styles.profile}>Benedit</Text>
            </View>
            <View style = {styles.botContainer}>
                <View style ={styles.skillBox}>
                    <Text style = {styles.skillTit}>Skill</Text>
                    <Text style = {styles.skillName}>Driving</Text>
                </View>
                <View style ={styles.skillBox}>
                    <Text style = {styles.skillTit}>Education</Text>
                    <Text style = {styles.skillName}>Primary School</Text>
                </View>
                <View style ={styles.skillBox}>
                    <Text style = {styles.skillTit}>Experience</Text>
                    <Text style = {styles.skillName}>2 years</Text>
                </View>
                <View styles ={styles.skillBox}>
                    <Text style = {styles.skillTit}>
                        Potential employers</Text>
                    <Button style ={styles.botStyle}
                        onPress={this.handleNew}>
                        <Text style={styles.newText}>
                            Click Here
                        </Text>
                    </Button>                   
                </View>
            </View>
        </View>
        )}
    };

const styles = StyleSheet.create({
    container:{
        flex: 1,        
    },

    topContainer:{
        flex: 2,
        backgroundColor: 'bisque',
        paddingBottom: 20,
        paddingTop: 20,
    },

    botContainer:{
        flex: 4,
        backgroundColor: 'slateblue',
    },

    image: {
        flex: 1,
        paddingTop: 40,
        width: null,
        height: null,
        resizeMode: "contain"
    },

    profile:{
        textAlign: "center",
        fontSize: 50,        
    },

    skillBox:{
        //backgroundColor: '#EFF1F5',
        height: 100,
    },

    skillTit:{
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 20,
        paddingLeft: 40,
        color: 'white',
    },

    skillName: {
        paddingTop: 10,
        paddingLeft: 70,
        color: 'white', 
        fontSize: 20,
    },

    botStyle:{
        width: 120,
        alignSelf: "center",
        marginTop: 20,
        backgroundColor: 'white',
    },

    newText: {
        color: "black",
        textAlign: "center",
        fontSize: 16,
        marginLeft: 22,
    },

})