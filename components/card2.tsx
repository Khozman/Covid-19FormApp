import React, { useState } from 'react';
import CardView from 'react-native-cardview';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../style';
export const Card2 = ({ navigation }: any) => {
    const [homeAddress, setHomeAddress] = useState<string>('');
    const [postalCode, setPostalCode] = useState<string>('');
    const [cellNumber, setCellNumber] = useState<string>('');

    return (<CardView
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={5}
        style={{ padding: 16, margin: 16 }}>

        <Text style={{ margin: 8, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Personal Information</Text>

        <TextInput placeholder="Home Address" style={styles.textInput} value={homeAddress}
            onChangeText={text => setHomeAddress(text)} />
        <TextInput placeholder="Postal Code" style={styles.textInput} value={postalCode}
            onChangeText={text => setPostalCode(text)} />
        <TextInput placeholder="Cellphone Number" style={styles.textInput} value={cellNumber}
            onChangeText={text => setCellNumber(text)} />

        <TouchableOpacity style={{ padding: 16, backgroundColor: '#18D5ff', margin: 8, borderRadius: 12 }} onPress={() => navigation.navigate('Card3')}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Next</Text>
        </TouchableOpacity>
    </CardView>);
}