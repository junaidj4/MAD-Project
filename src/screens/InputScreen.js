import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList } from 'react-native';

export default function InputScreen(){
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [infoList, setInfoList] = useState([]);

  const handleSubmit = () => {

    const duplicateInfo = infoList.find(info => info === `${name}, ${fatherName}, ${rollNumber}`);
    if (!duplicateInfo) {
      setInfoList([...infoList, `${name}, ${fatherName}, ${rollNumber}`]);
    }
    setName('');
    setFatherName('');
    setRollNumber('');
}
  return (
    <View style={styles.viewStyle} >
      <TextInput style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput style={styles.input}
        placeholder="Father's Name"
        value={fatherName}
        onChangeText={text => setFatherName(text)} 
      />
      <TextInput style={styles.input}
        placeholder="Roll Number"
        value={rollNumber}
        onChangeText={text => setRollNumber(text)}  
      />
      <Button title="Submit" onPress={handleSubmit}/>
      

       <FlatList  style={styles.listStyle}
        data={infoList}
        renderItem={({ item }) => <Text style={styles.textStyle}>{`\u2022 ${item}`}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    viewStyle:{
    flex: 1,
    padding: 20
    },

    textStyle:{
    fontSize:16,
    marginTop:5,
    },

    input:{
    margin:15,
    marginTop:5,
    borderColor:'black',
    borderWidth:1.5,
    borderRadius:5,
    padding:12
    },

    listStyle:{
    marginTop:20
    }
});

