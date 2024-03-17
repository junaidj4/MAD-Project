import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import {useState} from 'react';

export default function CounterScreen() {
const button1text = 'Increase';
const button2text = 'Decrease';
const [count,setCounter]=useState(0);

  return (
    <View>
    <Button title={button1text} style={styles.btnStyle}
    onPress={()=>setCounter(count+1)}/>
    <Button title={button2text} style={styles.btnStyle}
    onPress={()=>setCounter(count-1)}/>
    <Text>
    {count}
    </Text>
    </View>
  );
}

const styles = StyleSheet.create({

btnStyle:
{
marginBottom:20,
borderRadius:30
},

});
