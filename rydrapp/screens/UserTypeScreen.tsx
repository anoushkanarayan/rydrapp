import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import RydrLogoText from '../components/RydrLogoText';

type RootStackParamList = {
  PhoneAuth: undefined;
  UserType: undefined;
};

type UserTypeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'UserType'>;

export default function UserTypeScreen() {
  const navigation = useNavigation<UserTypeScreenNavigationProp>();

  const handleUserTypeSelect = (type: 'driver' | 'rider') => {
    // TODO: Save user type and proceed with registration
    console.log('Selected user type:', type);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>How do you want</Text>
          <View style={styles.titleRow}>
            <Text style={styles.titleText}>to use </Text>
            <View style={styles.logoInline}>
              <RydrLogoText fontSize={28} />
            </View>
            <Text style={styles.titleText}>?</Text>
          </View>
        </View>
        <Text style={styles.subtitle}>Choose your role to continue</Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity 
            style={styles.option}
            onPress={() => handleUserTypeSelect('driver')}
          >
            <Text style={styles.optionTitle}>I'm a Driver</Text>
            <Text style={styles.optionDescription}>
              Share your commute and earn money
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.option}
            onPress={() => handleUserTypeSelect('rider')}
          >
            <Text style={styles.optionTitle}>I'm a Rider</Text>
            <Text style={styles.optionDescription}>
              Find rides for your daily commute
            </Text>
          </TouchableOpacity>
        </View>
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
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  logoInline: {
    marginBottom: -1,
    marginLeft: -5,
    marginRight: -2,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 32,
    textAlign: 'center',
    marginTop: 12,
  },
  optionsContainer: {
    gap: 16,
  },
  option: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 24,
    borderWidth: 2,
    borderColor: '#E5E7EB',
  },
  optionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  optionDescription: {
    fontSize: 16,
    color: '#6B7280',
  },
}); 