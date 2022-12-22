import { Alert, View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import bgImage from '../misc/backroundLogin.png';

type PropsType={
  navigation: StackNavigationProp<NavigationType, 'Signup'>
};

export default(props: PropsType) => {
  const {navigation}= props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const daftar = async() => {
    if (email.length==0 || password.length==0 || repeatPassword.length==0){
        Alert.alert('Warning!', 'Please write your data.');
    }
    else{
      try{
        var user = {
          Email: 'any_key_here',
          Password: 'any_key_here',
          RepeatPassword: 'any_key_here',
        };
        await AsyncStorage.setItem('UserData', JSON.stringify(user));
        navigation.navigate('Menu');
      } catch (error){
        console.log(error);
      }
    }
  };

    return (
        <ImageBackground source={bgImage} style={styles.bgContainer}>
            <View style={styles.container}>
            <KeyboardAwareScrollView style={{width: '100%', padding: 20}} contentContainerStyle={{alignItems: 'center'}}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logoText}>Notes App</Text>
                </View>
                <Text style={styles.signupTitles} >Sign Up</Text>
                <View style={{width: '100%'}}>

                    <TextInput style={styles.inputsForm} placeholder='Email' placeholderTextColor='#c3c3c380' onChangeText={(email) => setEmail(email)} />
                    
                    <TextInput secureTextEntry={true}  style={styles.inputsForm} placeholder='Password' placeholderTextColor='#c3c3c380' onChangeText={(password) => setPassword(password)} />
                    
                    <TextInput  secureTextEntry={true} style={styles.inputsForm} placeholder='Repeat Password' placeholderTextColor='#c3c3c380' onChangeText={(repeatPassword) => setRepeatPassword(repeatPassword)} />

                    <TouchableOpacity onPress={daftar} style={styles.signupButton}>
                        <Text> Sign Up → </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={()=>navigation.navigate('Signin')} style={styles.backButton}>
                        <Text style={{color: '#d09950'}} > ← Back </Text>
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

    signupButton: {
        alignItems: 'center',
        backgroundColor: '#d09950',
        borderRadius: 20, 
        padding: 15,
        marginTop: 10,

        shadowOffset: { width: 5, height:-4 },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: 'black'
    },

    backButton: {
        marginTop: 20,
        padding: 15,
        alignItems: 'center',
        backgroundColor: '#222f3e',
        borderRadius: 20, 

        shadowOffset: { width: -5, height:-4 },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: 'black'
    }
})