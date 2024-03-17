import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {useState} from 'react';

export default function TextScreen() {
const [name,setName]=useState('');

  return (
    <View>
    <Text>Enter Name:</Text>
    <TextInput
    style={styles.input}
    autoCapitalize='none'
    autoCorrect={false}
    value={name}
    onChangeText = {newValue=>setName(newValue)}
    />
    <Text>Written Text: {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
input:{
margin:15,
borderColor:'black',
borderWidth:1,
borderRadius:5,
backgroundColor:'lightgray'
}
});
