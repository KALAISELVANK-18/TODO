// TodoForm.js

import React, { useReducer, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { todoReducer } from '../Services/StorageMedium';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Text } from 'react-native-svg';
const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('');

  const [state, dispatch] = useReducer(todoReducer, { todos: [] });

  const handleAddTodo = () => {
    const newTodo = {
      title,
      description,
      priority,
      dueDate,
      status
    };

    dispatch({ type: 'ADD_TODO', payload: newTodo });

    // Reset form fields after adding todo
    setTitle('');
    setDescription('');
    setPriority('');
    setDueDate('');
    setStatus('');
  };

  return (

    <View >

        <View style={{flexDirection:"row"}}>

        <TouchableOpacity>
            <FontAwesomeIcon icon={faArrowLeft} style={{color:"black"}}></FontAwesomeIcon>
            </TouchableOpacity> 
        <Text>
            Add Task
        </Text>
        </View>

      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Priority"
        value={priority}
        onChangeText={setPriority}
      />
      <TextInput
        style={styles.input}
        placeholder="Due Date"
        value={dueDate}
        onChangeText={setDueDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Status"
        value={status}
        onChangeText={setStatus}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
   
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  input: {
    marginBottom: 10,
  
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  }
});

export default TodoForm;
