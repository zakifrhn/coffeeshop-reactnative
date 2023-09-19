import Home from './src/screens/Home';
import Homescreen from './src/screens/Homescreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}} />
        <Stack.Screen name='Homescreen' component={Homescreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



