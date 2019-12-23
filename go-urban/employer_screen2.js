import * as React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Row, Picker } from 'native-base';
import { Assets } from 'react-navigation-stack';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements'

export default class EmployerScreen2 extends React.Component {
    state = {
        checked: true,
    }
    render() {
        return (
            <View>
                <CheckBox
                    title='Click Here'
                    checked={this.state.checked}
                    onPress={() => this.setState({ checked: !this.state.checked})}
                />
            </View>
        )
    }
}


