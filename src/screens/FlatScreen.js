import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import {useState} from 'react';

export default function FlatScreen() {
const friends = [
{name: "Junaid", age:22},
{name: "Junaid", age:22},
{name: "Junaid", age:22},
{name: "Junaid", age:22}
];


  return (
    <FlatList
    data={friends}
    renderItem={({item})=>{
        return(
            <Text style={styles.TextStyle}>
            {item.name} and {item.age}
            </Text>
            );
         }}
    />
  );
}

const styles = StyleSheet.create({
TextStyle:{
margin:20,
fontSize:16,
color: 'grey'
}
});
