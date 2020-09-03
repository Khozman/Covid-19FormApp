// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './components/home';
import { SymptomCard1 } from './components/symptom-card1';
import { SymptomCard2 } from './components/symptom-card2';
import { SymptomCard3 } from './components/symptom-card3';
import { SymptomCard4 } from './components/symptom-card4';
import { SymptomCard5 } from './components/symptom-card5';
import { SymptomCard6 } from './components/symptom-card6';
import { SymptomCard7 } from './components/symptom-card7';
import { Card1 } from './components/card1';
import { Card2 } from './components/card2';
import { Card3 } from './components/card3';
import { Card4 } from './components/card4';
import { Successful } from './components/successful';
import { Pager } from './components/pager';


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pager" component={Pager} />
        <Stack.Screen name="SymptomCard1" component={SymptomCard1} />
        <Stack.Screen name="SymptomCard2" component={SymptomCard2} />
        <Stack.Screen name="SymptomCard3" component={SymptomCard3} />
        <Stack.Screen name="SymptomCard4" component={SymptomCard4} />
        <Stack.Screen name="SymptomCard5" component={SymptomCard5} />
        <Stack.Screen name="SymptomCard6" component={SymptomCard6} />
        <Stack.Screen name="SymptomCard7" component={SymptomCard7} />
        <Stack.Screen name="Card1" component={Card1} />
        <Stack.Screen name="Card2" component={Card2} />
        <Stack.Screen name="Card3" component={Card3} />
        <Stack.Screen name="Card4" component={Card4} />
        <Stack.Screen name="Successful" component={Successful} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;