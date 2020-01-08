import * as React from 'react';
import { CheckBox, ListItem, Picker, Textarea, Title, Card, CardItem, Body } from 'native-base';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default class Careerlist extends React.Component{
  
    render(){
        return(
        <View style = {styles.contianer}>
            <Card style = {styles.cardTheme}>
                <CardItem header button onPress={() => alert("This is Card Header")}>
                    <Text style = {styles.cardPropoty}>NativeBase</Text>
                </CardItem>
                <CardItem button onPress={() => alert("This is Card Body")}>
                    <Body>
                        <Text>
                        Click on any carditem
                        </Text>
                    </Body>
                </CardItem>
                <CardItem footer button onPress={() => alert("This is Card Footer")}>
                    <Text>GeekyAnts</Text>
                </CardItem>
            </Card>
        </View>
        )
    }
};

const styles = StyleSheet.create({
    contianer:{
        flex: 1,
        backgroundColor: 'bisque',
    },

    cardTheme: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 30,
    },

    cardPropoty:{
        fontSize: 30,
    },
    
})