import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, {useState} from 'react';

export default function App() {

  const [name, setName] = useState('Shaun');
  const [age, setAge] = useState('30')



  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput 
        // multiline allows multiple lines... shocking
        // multiline
       
        style={styles.input} 
        placeholder='e.g. John Doe'
        onChangeText={(value) => {setName(value)}}
        // I could use val instead of value as well
        />
        <Text>Enter age:</Text>
      <TextInput 
        keyboardType='numeric'
        style={styles.input} 
        placeholder='e.g. 99'
        onChangeText={(value) => {setAge(value)}}
        // I could use val instead of value as well
        />

      <Text>name: {name}, age: {age}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }

});
