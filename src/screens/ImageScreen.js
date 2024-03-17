import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import ImageDetails from '../components/ImageDetails.js';
export default function ImageScreen() {
  return (
    <View>
    <Text>Images</Text>
    <ImageDetails imageSource={require('../../assets/Image1.jpg')} title='beach'/>
    <ImageDetails imageSource={require('../../assets/Image2.jpg')} title='forest'/>
    <ImageDetails imageSource={require('../../assets/Image3.jpg')} title='mountain'/>
    </View>
  );
}

const styles = StyleSheet.create({

    });
