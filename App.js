import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen.js';
import ImageScreen from './src/screens/ImageScreen.js';
import CounterScreen from './src/screens/CounterScreen.js';
import TextScreen from './src/screens/TextScreen.js';
import FlatScreen from './src/screens/FlatScreen.js';
import ColorScreen from './src/screens/ColorScreen.js';
import SquareScreen from './src/screens/SquareScreen.js';
import SearchScreen from './src/screens/SearchScreen.js';
import InputScreen from './src/screens/InputScreen.js';
const Stack = createNativeStackNavigator();
function App()
{
    return(
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='Home' component={HomeScreen}/>
    <Stack.Screen name='Image' component={ImageScreen}/>
    <Stack.Screen name='Counter' component={CounterScreen}/>
    <Stack.Screen name='Text' component={TextScreen}/>
    <Stack.Screen name='Flat' component={FlatScreen}/>
    <Stack.Screen name='Color' component={ColorScreen}/>
    <Stack.Screen name='Square' component={SquareScreen}/>
    <Stack.Screen name='Search' component={SearchScreen}/>
    <Stack.Screen name='Input' component={InputScreen}/> 
    </Stack.Navigator>
    </NavigationContainer>
    );
}

export default App;