import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Today's Tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.header}>Today's Tasks</Text>
        <View styles={styles.items}>
        {/* This is where the tasks will go! */}
          <Task text={'Task 1'}/>
          <Task text={'Task 2'}/>

        </View> 

      </View>
      
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
});
