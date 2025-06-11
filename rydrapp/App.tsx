import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// Import screens (we'll create these next)
import PhoneAuthScreen from './screens/PhoneAuthScreen';
import UserTypeScreen from './screens/UserTypeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Stack.Navigator 
          initialRouteName="PhoneAuth"
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#fff' }
          }}
        >
          <Stack.Screen name="PhoneAuth" component={PhoneAuthScreen} />
          <Stack.Screen name="UserType" component={UserTypeScreen} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
