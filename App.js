import Signin from './app/screens/Signin';
import Menu from './app/screens/Menu';
import Signup from './app/screens/Signup';
import NoteScreen from './app/screens/NoteScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name= "NoteScreen" component={NoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}