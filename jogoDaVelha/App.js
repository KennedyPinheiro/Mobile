import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import Card from './components/Retangulo';

export default function App() {
  return (
    <View style={styles.container}>
      <Card/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
