import React from 'react';
import { StyleSheet, Text, View ,Button,Image,TextInput} from 'react-native';
class App extends React.Component {
    constructor()
    {
        super();
        this.state={
            Name:'',
            Address:'',
            Email:'',
            MobileNumber:'',
        }
    }
    submit()
    {
        console.warn(this.state);
    }
    render(){
        return(
        <View  style={{margin:20 ,marginTop:50}}>
        <TextInput maxLength={15}
        placeholder= "Enter name" 
        onChangeText={(text) => {this.setState({name: text })}}
        style={{borderWidth:4,borderColor: 'skyblue',margin:20}}
        />
        <TextInput maxLength={200}
         placeholder="Enter Your Address" 
        onChangeText={(text) => {this.setState({name: text })}}
        style={{borderWidth:4,borderColor: 'skyblue',margin:20}}
        />
        <TextInput
         placeholder="Enter Your Email" 
        onChangeText={(text) => {this.setState({name: text })}}
        style={{borderWidth:4,borderColor: 'skyblue',margin:20}}
        />
         <TextInput  KeyboardType={'numeric'}
          placeholder="Enter Your MobileNumber " 
        onChangeText={(text) => {this.setState({name: text })}}
        style={{borderWidth:3,borderColor: 'skyblue',margin:20}}
        />
        <Button title="Make Payment" onPress={() => {this.submit()}}/>
        <Image source={require('C:/Users/hi/codeqr/assets/PhonePeQR_7798130209.png')}/>
        
        </View>
        )
        }
}
export default App;



