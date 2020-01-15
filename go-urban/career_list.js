import * as React from 'react';
import { CheckBox, ListItem, Picker, Textarea, Title, Card, CardItem, Body, Button, Footer, FooterTab, Icon, Right, Left } from 'native-base';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import axios from "axios"
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Careerlist extends React.Component{
  
    render(){
        return(
            <View style = {styles.contianer}>
                <View styel = {styles.topContianer}>
                    <View>
                        <Text style = {styles.screenTitle}>Career List</Text>
                    </View>
                </View>
                <View style = {styles.secondaryContianer}>
                    <View style = {styles.cardDesign}>
                        <Text style = {styles.jobTitle}>Housekeeping | Jakatar | $300 </Text>
                        <Text style = {styles.jobDes}>Job Title: housskeeper    Location: Jakatar</Text>
                        <Text style = {styles.jobDes}>Who's hiring:    Four session group</Text>
                        <Button style = {styles.applyBut}><Text>Apply</Text></Button>
                    </View>
                </View>
                <Footer>
                    <FooterTab>
                        <Button vertical>
                        <Icon name="home" />
                        <Text>Home</Text>
                        </Button>
                        <Button vertical>
                        <Icon name="paper" />
                        <Text>Offer</Text>
                        </Button>
                        <Button vertical active>
                        <Icon active name="person" />
                        <Text>Profile</Text>
                        </Button>
                        <Button vertical>
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
        paddingTop: 20,
        backgroundColor: 'bisque',

    },

    secondaryContianer:{
        flex: 5,
        backgroundColor: 'slateblue',
        marginTop: 50,

    },

    screenTitle:{
        marginTop: 10,
        fontSize: 40,
        textAlignVertical: "center",
        textAlign: "center",
    },

    cardDesign:{
        width: 380,
        height: 150,
        backgroundColor: "white",
        borderRadius: 15,
        marginTop: 20,
        alignSelf: "center"
    },

    jobTitle:{
        fontSize: 20,
        textAlign: "right",
        marginRight: 20,
        marginTop: 20,
        color: "green",
    },

    jobDes: {
        fontSize: 12,
        textAlign: "right",
        marginRight: 20,
        marginTop: 10,
    },

    applyBut:{
        width: 50,
        height: 30,
        fontSize: 12,
        marginRight: 20,
        marginTop: 10,
        alignSelf: "flex-end",
    },

})