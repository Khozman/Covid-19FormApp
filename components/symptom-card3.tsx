import React, { useState } from 'react';
import CardView from 'react-native-cardview';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../style';
export const SymptomCard3 = ({ navigation }: any) => {
    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [relationship, setRelationship] = useState<string>('');
    const [cellNumber, setCellNumber] = useState<string>('');

    return (<CardView
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={5}
        style={{ padding: 16, margin: 16 }}>

        <Text style={{ margin: 8, fontSize: 20, fontWeight: 'bold', textAlign: 'left' }}>Next of kin or Alternative Contact</Text>

        <TextInput placeholder="First Name" style={styles.textInput} value={name}
            onChangeText={text => setName(text)} />
        <TextInput placeholder="Surname" style={styles.textInput} value={surname}
            onChangeText={text => setSurname(text)} />
        <TextInput placeholder="Relationship" style={styles.textInput} value={relationship}
            onChangeText={text => setRelationship(text)} />
        <TextInput placeholder="Cell number" style={styles.textInput} value={cellNumber}
            onChangeText={text => setCellNumber(text)} />

        <TouchableOpacity style={{ padding: 16, backgroundColor: '#18D5ff', margin: 8, borderRadius: 12 }} onPress={() => navigation.navigate('SymptomCard4')}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Next</Text>
        </TouchableOpacity>
    </CardView>);
}