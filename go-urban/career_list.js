import * as React from 'react';
import { CheckBox, ListItem, Picker, Textarea, Title, Card, CardItem, Body, Button, Footer, FooterTab, Icon, Right, Left } from 'native-base';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Ionicons} from "@expo/vector-icons";

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
                        <View style = {styles.row}>
                            <View style = {styles.col1}>
                                <Ionicons
                                    name="md-arrow-round-forward"
                                    size = {35}
                                    color = "black"
                                    textAlign = 'center'/>
                            </View>
                            <View style = {styles.col2}>
                                <Text style = {styles.jobTitle}>Housekeeping | Jakatar | $300 </Text>
                                <Text style = {styles.jobDes}>Job Title: housskeeper    Location: Jakatar</Text>
                                <Text style = {styles.jobDes}>Who's hiring: Four session group</Text>
                                <Button style = {styles.applyBut}><Text style = {{marginLeft: 22, color: "white"}}>Apply</Text></Button>
                            </View>
                        </View>
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
        width:280,
    },

    screenTitle:{
        marginTop: 10,
        fontSize: 40,
        textAlignVertical: "center",
        textAlign: "center",
    },

    cardDesign:{
        width: 380,
        height: 180,
        backgroundColor: "white",
        borderRadius: 15,
        marginTop: 20,
        alignSelf: "center",
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
        marginRight: 50,
        marginTop: 15,
        alignSelf: "flex-end",
        alignItems: "center",
    },
})