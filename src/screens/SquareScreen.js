import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useState } from 'react';
import ColorChanger from '../components/ColorChanger.js';

export default function SquareScreen() {
    const initialColors = [0, 0, 0]; 
    const colorIncrement = 15;

    const [colors, setColors] = useState(initialColors);

    const setColor = (colorIndex, change) => {
        setColors(prevColors => {
            const newColors = [...prevColors];
            newColors[colorIndex] = Math.min(Math.max(prevColors[colorIndex] + change, 0), 255);
            return newColors;
        });
    };

    return (
        <View>
            <Text>Welcome to square screen.</Text>
            <ColorChanger
                color='Red'
                onIncrease={() => {
                    setColor(0, colorIncrement);
                }}
                onDecrease={() => {
                    setColor(0, -1 * colorIncrement);
                }}
            />

            <ColorChanger
                color='Green'
                onIncrease={() => {
                    setColor(1, colorIncrement);
                }}
                onDecrease={() => {
                    setColor(1, -1 * colorIncrement);
                }}
            />
            <ColorChanger
                color='Blue'
                onIncrease={() => {
                    setColor(2, colorIncrement);
                }}
                onDecrease={() => {
                    setColor(2, -1 * colorIncrement);
                }}
            />
            <View
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`,
                    alignSelf: 'center',
                    marginTop: 20,
                }}>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});
