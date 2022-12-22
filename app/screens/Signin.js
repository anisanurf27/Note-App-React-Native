import { useState, useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import bgImage from '../misc/backroundLogin.png';


type PropsType={
  navigation: StackNavigationProp<NavigationType, 'Signin'>
};

export default(props: PropsType) => {
  const {navigation}= props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async() => {
    if (email.length==0 || password.length==0){
        Alert.alert('Warning!', 'Please write your data.');
    }
    else{
      try{
        var user = {
          Email: 'any_key_here',
          Password: 'any_key_here',
        };
        await AsyncStorage.setItem('UserData', JSON.stringify(user));
        navigation.navigate('Menu');
      } catch (error){
        console.log(error);
      }
    }
  }
  const signup = ()=> {
    navigation.navigate('Signup');
  };
  
  return (
          <ImageBackground source={bgImage} style={styles.bgContainer}>
              <View style={styles.container}>
              <KeyboardAwareScrollView style={{width: '100%', padding: 20}} contentContainerStyle={{alignItems: 'center'}}>
                  <View style={styles.logoContainer}>
                      <Text style={styles.logoText}>Notes App</Text>
                  </View>
                  <Text style={styles.signupTitles} >Sign In</Text>

                  <View style={{width: '100%'}}>

                      <TextInput style={styles.inputsForm} placeholder='Email' placeholderTextColor='#c3c3c380' onChangeText={(email) => setEmail(email)} />
                      
                      <TextInput secureTextEntry={true} style={styles.inputsForm} placeholder='Password' placeholderTextColor='#c3c3c380' onChangeText={(password) => setPassword(password)}/>

                      <TouchableOpacity onPress={login} style={styles.signinButton}>
                          <Text> Sign In → </Text>
                      </TouchableOpacity>

                      <Text style={styles.textNewAccount}> If you don't have Account </Text>

                      <TouchableOpacity onPress={signup} style={{alignItems: 'center'}}>
                          <Text style={styles.buttonNewAccount}> Sign Up </Text>
                      </TouchableOpacity> 
                  </View>
                  </KeyboardAwareScrollView>
              </View>
          </ImageBackground>
      )
  }


const styles = StyleSheet.create({

    bgContainer: {
        flex: 1, 
        width: '100%', 
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    container: {
        backgroundColor: '#1a222bdb',
        width: '90%',
        paddingBottom: 22,
        alignItems: 'center',
        borderRadius: 20
    },

    logoContainer: {
        flexDirection: 'row', 
        marginBottom: 15, 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    logoText: {
        fontSize: 25, 
        fontWeight: 'bold',
        color: '#d09950',
        marginRight: 8
    },

    signupTitles: {
        fontSize: 25, 
        fontWeight: 'bold',
        color: '#c3c3c3',
        marginBottom: 20
    },

    inputsForm: {
        width: '100%',
        padding: 10,
        color: '#c3c3c3',
        backgroundColor: '#222f3e',
        marginVertical: 10,
        borderRadius: 20
    },

    signinButton: {
        alignItems: 'center',
        backgroundColor: '#d09950',
        borderRadius: 20, 
        padding: 15,
        marginTop: 10,
        shadowOffset: { width: 3, height:-2 },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: 'black'
    },

    textNewAccount: {
        alignSelf: 'center',
        marginTop: 25,
        color: '#c3c3c3',
    },

    buttonNewAccount: {
        alignSelf: 'center',
        color: '#d09950',
        fontWeight: 'bold',
        fontSize: 18
    }
})