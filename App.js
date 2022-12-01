import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Travel from './screens/week3/Travel'; 
// import Ex01 from './screens/week02/EX01';
// import Ex02 from './screens/week02/EX02';
// import EX03 from './screens/week02/EX03';
// import EX04 from './screens/week02/EX04';
// import EX05 from './screens/week02/EX05';
// import EX06 from './screens/week02/EX06';
// import EX07 from './screens/week02/EX07';
// import EX08 from './screens/week02/EX08';
// import EX09 from './screens/week02/EX09';
// import EX10 from './screens/week02/EX10';
// import EX11 from './screens/week02/EX11';
// import EX12 from './screens/week02/EX12';

export default function App() {
  return (
    <Travel />
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
