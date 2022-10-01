import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './page/LoginPage';
import SignUpPage from './page/SignUpPage';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name="login" component={LoginPage} />

        <Stack.Screen name="signup" component={SignUpPage} />
      </Stack.Navigator>
      <StatusBar style="auto" />

    </NavigationContainer>

  );
}


