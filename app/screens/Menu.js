import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import NoteScreen from './NoteScreen';
import NoteDetail from '../components/NoteDetail';
import NoteProvider from '../contexts/NoteProvider';

const Stack = createStackNavigator();

export default function Menu() {
  const [user, setUser] = useState({});
  const [isAppFirstTimeOpen, setIsAppFirstTimeOpen] = useState(false);
  const findUser = async () => {
    const result = await AsyncStorage.getItem('user');

    if (result === null) return setIsAppFirstTimeOpen(true);

    setUser(JSON.parse(result));
    setIsAppFirstTimeOpen(false);
  };

  useEffect(() => {
    findUser();
  }, []);

  const renderNoteScreen = props => <NoteScreen {...props} user={user} />;

  if (isAppFirstTimeOpen);
  return (
    <NavigationContainer independent={true}>
      <NoteProvider>
        <Stack.Navigator>
          <Stack.Screen component={renderNoteScreen} name='NoteScreen' options={{headerTitle: '', headerShown: false}}/>
          <Stack.Screen component={NoteDetail} name='NoteDetail' options={{headerTitle:'', headerTransparent: true}}/>
        </Stack.Navigator>
      </NoteProvider>
    </NavigationContainer>
  );
}