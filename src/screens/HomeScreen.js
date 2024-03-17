import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View>
    <TouchableOpacity style={styles.viewStyle}
    onPress={()=>navigation.navigate('Image')}>
    <Text style={styles.text1}> Go to Image Screen </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.viewStyle1}
    onPress={()=>navigation.navigate('Counter')}>
    <Text style={styles.text1}> Go to Counter Screen </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.viewStyle2}
    onPress={()=>navigation.navigate('Text')}>
    <Text style={styles.text1}> Go to Text Screen </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.viewStyle3}
        onPress={()=>navigation.navigate('Flat')}>
        <Text style={styles.text1}> Go to Flat Screen </Text>
        </TouchableOpacity>
    <TouchableOpacity style={styles.viewStyle4}
            onPress={()=>navigation.navigate('Color')}>
            <Text style={styles.text1}> Go to Color Screen </Text>
            </TouchableOpacity>
    <TouchableOpacity style={styles.viewStyle5}
                onPress={()=>navigation.navigate('Square')}>
                <Text style={styles.text1}> Go to Square Screen </Text>
                </TouchableOpacity>
    <TouchableOpacity style={styles.viewStyle6}
        onPress={()=>navigation.navigate('Search')}>
          <Text style={styles.text1}> Go to Search Screen </Text>
          </TouchableOpacity>
    <TouchableOpacity style={styles.viewStyle6}
        onPress={()=>navigation.navigate('Input')}>
          <Text style={styles.text1}> Go to Input Screen </Text>
          </TouchableOpacity>                        
    </View>
  );
}

const styles = StyleSheet.create({

 viewStyle:
 {
 backgroundColor: 'blue',
 borderRadius: 30,
 padding: 14,
 margin: 5
 },

 viewStyle1:
 {
 backgroundColor: 'green',
 borderRadius: 30,
 padding: 14,
 margin: 5
 },
 viewStyle2:
 {
 backgroundColor: 'red',
 borderRadius: 30,
 padding: 14,
 margin: 5
 },
  viewStyle3:
  {
  backgroundColor: 'purple',
  borderRadius: 30,
  padding: 14,
  margin: 5
  },
  viewStyle4:
  {
  backgroundColor: 'black',
  borderRadius: 30,
  padding: 14,
  margin: 5,

  },
  viewStyle5:
    {
    backgroundColor: 'brown',
    borderRadius: 30,
    padding: 14,
    margin: 5,

    },
    viewStyle6:
    {
    backgroundColor: 'orange',
    borderRadius: 30,
    padding: 14,
    margin: 5,

    },    
 text1:
 {
 fontWeight:'bold',
 fontSize:16,
 alignSelf:'center',
 color:'white'
 },


 });
