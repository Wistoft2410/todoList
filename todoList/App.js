import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'; /* This is a hook*/ 
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Platform } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState(); /* We use state for things that change often */ 
  const [taskItems, setTaskItems] = useState([]); /* Creating a new useState that has datatype array */ 

const handleAddTask = () => {
  setTaskItems([...taskItems, task])
  setTask(null);
}
  return (
    <View style={styles.container}>

      {/* Today's Tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.header}>Today's Tasks</Text>
        <View styles={styles.items}>
        {/* This is where the tasks will go! */}
        {
          taskItems.map((item, index) => {
            return <Task text={item}/>
          })
        }
          <Task text={'Task 1'}/>
          <Task text={'Task 2'}/>

        </View> 

      </View>

      {/* Write a task */}
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
        <TextInput 
          style={styles.input} 
          placeholder={'Write a task'} 
          value={task} 
          onChangeText={text => setTask(text)}
          />
        
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20, 
  }, 
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20, // Add some bottom margin to space out from the tasks
    paddingHorizontal: 20,
},
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {},
});
