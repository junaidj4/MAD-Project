import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import SearchBar from '../components/SearchBar';

export default function SearchScreen() {

  return (
   <View>
    <Text>
        Welcome to Search Screen
    </Text>
    <SearchBar/>
   </View>
  )
}

const styles = StyleSheet.create({

});
