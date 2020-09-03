import React, { useState } from 'react';
import CardView from 'react-native-cardview';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../style';
export const SymptomCard4 = ({ navigation }: any) => {
    const [days, setDays] = useState<string>('');
    const [date, setDate] = useState<string>('');

    return (<CardView
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={5}
        style={{ padding: 16, margin: 16 }}>

        <Text style={{ margin: 8, fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Coronavirus symptoms for staff in healthcare setting</Text>

        <TextInput placeholder="Days post exposure" style={styles.textInput} value={days}
            onChangeText={text => setDays(text)} />
        <TextInput placeholder="Date: DD'/MM" style={styles.textInput} value={date}
            onChangeText={text => setDate(text)} />

        <Text >Document morning + evening </Text>

        {/* AM / PM */}
        <Text >1. Temperature (no meds) </Text>
        <Text >2. Respitoryrate </Text>
        <Text >3. Pulse rate </Text>

        <TouchableOpacity style={{ padding: 16, backgroundColor: '#18D5ff', margin: 8, borderRadius: 12 }} onPress={() => navigation.navigate('SymptomCard5')}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Next</Text>
        </TouchableOpacity>
    </CardView>);
}