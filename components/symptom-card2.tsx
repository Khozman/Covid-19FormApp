import React, { useState } from 'react';
import CardView from 'react-native-cardview';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../style';
export const SymptomCard2 = ({ navigation }: any) => {
    const [cellNumber, setCellNumber] = useState<string>('');
    const [alternativeNumber, setAlternativeNumber] = useState<string>('');
    const [role, setRole] = useState<string>('');

    return (<CardView
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={5}
        style={{ padding: 16, margin: 16 }}>

        <Text style={{ margin: 8, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Personal Information</Text>

        <TextInput placeholder="Cell number" style={styles.textInput} value={cellNumber}
            onChangeText={text => setCellNumber(text)} />
        <TextInput placeholder="Alternative number" style={styles.textInput} value={alternativeNumber}
            onChangeText={text => setAlternativeNumber(text)} />
        <TextInput placeholder="Role: Circle as appropriate" style={styles.textInput} value={role}
            onChangeText={text => setRole(text)} />

        <TouchableOpacity style={{ padding: 16, backgroundColor: '#18D5ff', margin: 8, borderRadius: 12 }} onPress={() => navigation.navigate('SymptomCard3')}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Next</Text>
        </TouchableOpacity>
    </CardView>);
}