import { Text, StyleSheet } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

export default function RydrLogoText({ fontSize = 44, style = {} }) {
  return (
    <MaskedView
      maskElement={
        <Text style={[styles.text, { fontSize }, style]}>RYDR</Text>
      }
    >
      <LinearGradient
        colors={['#3b82f6', '#1d4ed8']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ height: fontSize * 1.2, width: fontSize * 3 }}
      />
    </MaskedView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: '900',
    fontFamily: 'Arial',
    letterSpacing: -2,
    color: 'black', // Mask color, not visible
    textAlign: 'center',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
}); 