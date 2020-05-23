//import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './components/home';
import { SpecimenForm } from './components/specimen-form';
import { SymptomForm } from './components/symptom-form';
import { CoronavirusSymptoms } from './components/coronavirus-symptoms';
import { Successful } from './components/successful';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SpecimenForm" component={SpecimenForm} />
        <Stack.Screen name="SymptomForm" component={SymptomForm} />
        <Stack.Screen name="CoronavirusSymptoms" component={CoronavirusSymptoms} />
        <Stack.Screen name="Successful" component={Successful} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;