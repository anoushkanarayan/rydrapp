import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import RydrLogoText from '../components/RydrLogoText';

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <View style={styles.titleRow}>
              <Text style={styles.titleText}>Welcome to </Text>
              <View style={styles.logoInline}>
                <RydrLogoText fontSize={36} />
              </View>
            </View>
          </View>
          <View style={styles.innerContent}>
            <Text style={styles.subtitle}>Enter your phone number to continue</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholderTextColor="#9CA3AF"
                returnKeyType="done"
              />
            </View>
            <TouchableOpacity 
              style={styles.button}
              onPress={handleContinue}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
            <View style={styles.signInRow}>
              <Text style={styles.signInText}>Already a ryder? </Text>
              <TouchableOpacity>
                <Text style={styles.signInLink}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 0,
    justifyContent: 'center',
  },
  innerContent: {
    paddingHorizontal: 24,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  titleText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 32,
    textAlign: 'center',
    marginTop: 12,
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
  logoInline: {
    marginLeft: -6,
    marginBottom: -2,
  },
  signInRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  signInText: {
    fontSize: 13,
    color: '#6B7280',
  },
  signInLink: {
    fontSize: 13,
    color: '#3b82f6',
    fontWeight: '600',
  },
}); 