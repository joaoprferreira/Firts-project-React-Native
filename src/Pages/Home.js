import React from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Platform,
  TouchableOpacity
} from 'react-native';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, João Pedro</Text>
      <View>
        <TextInput 
          style={styles.input} 
          placeholder="New Skill" 
          placeholderTextColor='#555'
        />
      </View>
        <TouchableOpacity 
          style={styles.button}
          activeOpacity={0.7}
         >
          <Text style={styles.buttonText}>Adiconar</Text>
        </TouchableOpacity>

        <Text style={[styles.title,{marginTop: 50}]}>
          My Skills
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 24,
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    color: '#fff',
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
  }
});
