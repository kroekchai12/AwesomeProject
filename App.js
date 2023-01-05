
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomTab from './Navigation/BottomTab';
import HomeStack from './Navigation/HomeStack';

// import Travel from './screens/week03/Travel'; 
// import Health from './screens/week05/Health';
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
    // <Home />
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  )
}



