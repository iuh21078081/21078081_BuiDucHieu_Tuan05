import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import HomeScreen from './components/HomeScreen';
import ChooserColorScreen from './components/ChooserColorScreen';

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={HomeScreen} options={
            {title: " "}
          }  />
          <Stack.Screen name="pick-color" component={ChooserColorScreen} options={
            {title: "Chọn màu"}
          }/>
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
