import React, { useState } from 'react';
import CardView from 'react-native-cardview';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../style';
export const Card3 = ({ navigation }: any) => {
    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [contact, setContact] = useState<string>('');
    const [maritialStatus, setMaritialStatus] = useState<string>('');
    const [staffNumber, setStaffNumber] = useState<string>('');

    return (<CardView
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={5}
        style={{ padding: 16, margin: 16 }}>

        <Text style={{ margin: 8,fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Next of kin information</Text>

        <TextInput placeholder="First Name" style={styles.textInput} value={name}
            onChangeText={text => setName(text)} />
        <TextInput placeholder="Surname" style={styles.textInput} value={surname}
            onChangeText={text => setSurname(text)} />
        <TextInput placeholder="Contact Number of Next of kin" style={styles.textInput} value={contact}
            onChangeText={text => setContact(text)} />
        <TextInput placeholder="Marital Status" style={styles.textInput} value={maritialStatus}
            onChangeText={text => setMaritialStatus(text)} />
        <TextInput placeholder="Persal/Staff Number" style={styles.textInput} value={staffNumber}
            onChangeText={text => setStaffNumber(text)} />

        <TouchableOpacity style={{ padding: 16, backgroundColor: '#18D5ff', margin: 8, borderRadius: 12 }} onPress={() => navigation.navigate('Card4')}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Next</Text>
        </TouchableOpacity>
    </CardView>);
}