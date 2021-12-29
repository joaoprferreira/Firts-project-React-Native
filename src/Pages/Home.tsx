import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import {Button} from '../Components/Button';
import {SkillCard} from '../Components/SkillCard';

interface skillData {
  id: string,
  name: string,
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<skillData[]>([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    }

    setMySkills(prevState => [...prevState, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkills(prevState => prevState.filter(
      skill => skill.id !== id
    ))
  }

  useEffect(() => {
    const currentHours = new Date().getHours();
    if (currentHours < 12) {
      setGretting('Good Mornig');
    } else if (currentHours >= 12 && currentHours < 18) {
      setGretting('Good aftermoon');
    } else {
      setGretting('Good night');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, João Pedro</Text>
      <Text style={styles.gretting}>{gretting}</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="New Skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />
      </View>
      <Button title="Adicionar" onPress={handleAddNewSkill} />
      <Text style={[styles.title, {marginVertical: 50}]}>My Skills</Text>
      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => <SkillCard onPress={() => handleRemoveSkill(item.id)} skill={item.name} />}
        style={styles.skillList}
      />
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
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 20,
    marginVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  textSkill: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  gretting: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 15,
  },
  skillList: {
    flex: 1,
    paddingVertical: 50,
    marginVertical:-50,
  }
});
