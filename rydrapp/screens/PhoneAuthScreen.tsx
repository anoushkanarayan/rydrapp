import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

type RootStackParamList = {
  PhoneAuth: undefined;
  UserType: undefined;
};

type PhoneAuthScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'PhoneAuth'>;

export default function PhoneAuthScreen() {
  const navigation = useNavigation<PhoneAuthScreenNavigationProp>();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleContinue = () => {
    // TODO: Implement phone verification
    navigation.navigate('UserType');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Rydr</Text>
        <Text style={styles.subtitle}>Enter your phone number to continue</Text>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={handleContinue}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 32,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#1F2937',
  },
  button: {
    backgroundColor: '#3B82F6',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
}); 