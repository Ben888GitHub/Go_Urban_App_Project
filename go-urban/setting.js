import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button, Footer, FooterTab, Icon} from 'native-base';

export default class Careerlist extends React.Component{
 render(){
    return(
    <View>
        <Text>Hello</Text>
     
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
    )}
}