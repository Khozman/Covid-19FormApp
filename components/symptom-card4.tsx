import React from 'react';
import CardView from 'react-native-cardview';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import { styles } from '../style';
export const SymptomCard4 = ({ navigation }: any) => {
   
return(<CardView
    cardElevation={2}
    cardMaxElevation={2}
    cornerRadius={5}
    style={{flex:1, margin:16}}>
        <Text style={{ margin: 8 }}>Coronavirus symptoms for staff in healthcare setting</Text>
            <TextInput placeholder="Days post exposure" style={styles.textInput} />
            <TextInput placeholder="Date: DD'/MM" style={styles.textInput} />
            <Text >Document morning + evening </Text>
            {/* AM / PM */}
            <Text >1. Temperature (no meds) </Text>
            <Text >2. Respitoryrate </Text>
            <Text >3. Pulse rate </Text>
            <TouchableOpacity style={{  padding: 16, backgroundColor: '#18D5ff', margin:8, borderRadius:12 } } onPress={()=>navigation.navigate('SymptomCard5')}>
                <Text style={{color:'#fff',textAlign:'center'}}>Next</Text>
            </TouchableOpacity>        
    </CardView>);
}