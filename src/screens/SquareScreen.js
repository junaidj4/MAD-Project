import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import {useState} from 'react';
import ColorChanger from '../components/ColorChanger.js';

export default function SquareScreen() {
const [red,setRed] = useState(0);
const [blue,setBlue] = useState(0);
const [green,setGreen] = useState(0);
const Color_Increment = 15;
const setColor=(color,change)=>
{
    switch(color)
    {
        case 'red':
        red+change>255||red+change<0?null:setRed(red+change);
        case 'blue':
        blue+change>255||blue+change<0?null:setBlue(blue+change);
        case 'green':
        green+change>255||green+change<0?null:setGreen(green+change);

    }

}
  return (
  <View>
    <Text>Welcome to square screen.</Text>
    <ColorChanger
    color='Red'
    onIncrease={()=>{
        setColor('red',Color_Increment);
        }}
    onDecrease={()=>{
        setColor('red',-1*Color_Increment);
        }}
     />

     <ColorChanger
         color='Blue'
         onIncrease={()=>{
             setColor('blue',Color_Increment);
             }}
         onDecrease={()=>{
             setColor('blue',-1*Color_Increment);
             }}
          />
     <ColorChanger
         color='Green'
         onIncrease={()=>{
             setColor('green',Color_Increment);
             }}
         onDecrease={()=>{
             setColor('green',-1*Color_Increment);
             }}
          />
          <View style={{height:150, width:150, backgroundColor: `rgb(${red}, ${green}, ${blue})`, alignSelf:'center', marginTop:20}}>
  </View>
  </View>
  );
}

const styles = StyleSheet.create({

});