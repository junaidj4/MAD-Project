import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';



export default function SearchBar() {

  return (
    <View style={styles.background}>
      <TouchableOpacity 
      onPress={()=>{
          <TextInput
           placeholder='Search'/> 
      }}>
      <Feather name='search' style={styles.iconStyle}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
background:{
  backgroundColor:'#CCCCCC',
  flexDirection:'row',
  borderRadius:15,
  padding:12,
  marginTop:20
},
iconStyle:{
fontSize:16,
margin:5,
alignSelf:'center'
}
});