import * as React from 'react';
import { Button, Footer, FooterTab, Icon} from 'native-base';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Ionicons} from "@expo/vector-icons";
import axios from 'axios';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Careerlist extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            companies: [],
        };

    }

    componentDidMount() {
        axios.get('https://kwzcxp9w01.execute-api.us-east-1.amazonaws.com/dev/companies')
            .then(res => {
                const companies = res.data.body;
                this.setState({ companies })
                this.setState({ isReady: true })
            })
    }

    renderCards() {
        return this.state.companies.map((item) => {
            return (
                <View style = {styles.cardDesign}>
                    <View style = {styles.row}>
                        <View style = {styles.col1}>
                            <Icon style = {{fontSize: 80}}
                                name="woman"
                                textAlign = 'center'/>
                        </View>
                        <View style = {styles.col2}>
                                <Text style = {styles.jobTitle}>{item.profession} | {item.location} | {item.annualSalary} </Text>
                                <Text style = {styles.jobDes}>Job Title: {item.profession}    Gender: {item.gender}</Text>
                                <Text style = {styles.jobDes}>{item.jobDesc}</Text>
                                <Button style = {styles.applyBut}>
                                    <Text style = {{marginLeft: 22, color: "white", alignSelf: "center"}}>Details</Text>
                                </Button>
                        </View>
                    </View>
                </View>
            )
        })
    }


    render(){
        return(
            <View style = {styles.contianer}>
                <View styel = {styles.topContianer}>
                        <Text style = {styles.screenTitle}>Career List</Text>
                </View>
                <View style = {styles.secondaryContianer}>
                    <ScrollView>
                        {this.renderCards()}
                    </ScrollView>
                </View>          
                <Footer>
                    <FooterTab>
                        <Button active={this.state} onPress={() => this.props.navigation.navigate('Careerlist')}>
                        <Icon name="home" />
                        <Text>Home</Text>
                        </Button>
                        <Button active={this.state} onPress={() => this.props.navigation.navigate('Career_offer')}>
                        <Icon name="paper" />
                        <Text>Offer</Text>
                        </Button>
                        <Button active={this.state} onPress={() => this.props.navigation.navigate('Employee_profile')}>
                        <Icon active name="person" />
                        <Text>Profile</Text>
                        </Button>
                        <Button active={this.state} onPress={() => this.props.navigation.navigate('Setting')}>
                        <Icon name="settings" />
                        <Text>Setting</Text>
                        </Button>
                    </FooterTab>
                    </Footer> 
            </View>
        )
    }
};

const styles = StyleSheet.create({
    contianer:{
        flex: 1,
        backgroundColor: 'bisque',
    },

    topContianer:{
        flex: 1,
        height: 250,
        backgroundColor: 'bisque',

    },

    secondaryContianer:{
        flex: 5,
        backgroundColor: 'slateblue',
        paddingBottom: 20,
    },

    row:{
        flex: 1,
        flexDirection: 'row',
    },

    col1:{
        width:100,
        justifyContent: "center",
        alignItems: "center",
    },

    col2:{
        flex: 1,
        flexDirection: "column",
        width:280,
    },

    screenTitle:{
        paddingTop: 40,
        height: 120,
        justifyContent: "center",
        fontSize: 40,
        textAlignVertical: "center",
        textAlign: "center",
    },

    cardDesign:{
        width: wp('90%'),
        backgroundColor: "white",
        borderRadius: 15,
        marginTop: 20,
        alignSelf: "center",
        paddingBottom: 20,
    },

    jobTitle:{
        fontSize: 20,
        textAlign: "left",
        marginRight: 20,
        marginTop: 20,
        color: "green",
    },

    jobDes: {
        fontSize: 12,
        textAlign: "left",
        marginRight: 20,
        marginTop: 10,
    },

    applyBut:{
        width: 80,
        height: 30,
        fontSize: 12,
        marginTop: 10,
        marginRight: 30,
        alignSelf: "flex-end",
        alignItems: "center",
    },
})