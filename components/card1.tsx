import React, { useState } from 'react';
import CardView from 'react-native-cardview';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../style';
export const Card1 = ({ navigation }: any) => {
    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [idNumber, setIdNumber] = useState<string>('');
    const [dateOfBirth, setDateOFBirth] = useState<string>('');
    const [age, setAge] = useState<string>('');

    return (<CardView
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={5}
        style={{ padding: 16, margin: 16 }}>
            
        <Text style={{ margin: 8, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Personal Information</Text>

        <TextInput placeholder="First Name" style={styles.textInput} value={name}
            onChangeText={text => setName(text)} />
        <TextInput placeholder="Surname" style={styles.textInput} value={surname}
            onChangeText={text => setSurname(text)} />
        <TextInput placeholder="ID number" style={styles.textInput} value={idNumber}
            onChangeText={text => setIdNumber(text)} />
        <TextInput placeholder="Date of Birth" style={styles.textInput} value={dateOfBirth}
            onChangeText={text => setDateOFBirth(text)} />
        <TextInput placeholder="Age" style={styles.textInput} value={age}
            onChangeText={text => setAge(text)} />

        <TouchableOpacity style={{ padding: 16, backgroundColor: '#18D5ff', margin: 8, borderRadius: 12 }} onPress={() => navigation.navigate('Card2')}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Next</Text>
        </TouchableOpacity>
    </CardView>);
}