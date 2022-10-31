 import { NavigationContainer } from '@react-navigation/native';
 import {   createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Task from './src/pages/Task';

const Stack = createStackNavigator

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Task">
       <Stack.Screen
       name="Task"
       component={Task}
       />
        </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
