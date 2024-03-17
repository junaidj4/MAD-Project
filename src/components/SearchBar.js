import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { useState } from 'react';



export default function SearchBar() {
  const [isInputVisible, setInputVisible] = useState(false);

  return (
    <View style={styles.background}>
      {!isInputVisible && (
      <TouchableOpacity 
      onPress={()=>{setInputVisible(true)}}>
      <Feather name='search' style={styles.iconStyle}/>
      </TouchableOpacity>
      )}
      {isInputVisible &&(
        <TextInput style={styles.input}
        placeholder='Search'
        onBlur={()=>setInputVisible(false)}
        /> 
      )}
    </View>
  )
}

const styles = StyleSheet.create({
background:{
  backgroundColor:'#fff',
  borderWidth:2,
  borderColor:'#CCCCCC',  
  borderRadius:15,
  padding:12,
  marginTop:20
},
  iconStyle:{
  fontSize:16,
  margin:5,
  alignSelf:'center'
},
input:{
  flex: 1,
  marginLeft: 5,
  fontSize: 16,
  padding: 10,
  
}
});
