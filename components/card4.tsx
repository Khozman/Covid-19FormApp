import React, { useState } from 'react';
import CardView from 'react-native-cardview';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../style';
export const Card4 = ({ navigation }: any) => {
    const [whereDoYouWork, setWhereDoYouWork] = useState<string>('');
    const [whoIsYourLineManager, setWhoIsYourLineManager] = useState<string>('');
    const [doTheyKnowThatYouAreHere, setDoTheyKnowThatYouAreHere] = useState<string>('');
    const [haveYouBeenSentByTheOccHealth, setHaveYouBeenSentByTheOccHealth] = useState<string>('');

    return (<CardView
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={5}
        style={{ padding: 16, margin: 16 }}>

        <Text style={{ margin: 8, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Personal Information</Text>

        <TextInput placeholder="Where do you work?" style={styles.textInput} value={whereDoYouWork}
            onChangeText={text => setWhereDoYouWork(text)} />
        <TextInput placeholder="Who is your line manager?" style={styles.textInput} value={whoIsYourLineManager}
            onChangeText={text => setWhoIsYourLineManager(text)} />
        <TextInput placeholder="Do they know that you are here?" style={styles.textInput} value={doTheyKnowThatYouAreHere}
            onChangeText={text => setDoTheyKnowThatYouAreHere(text)} />
        <TextInput placeholder="Have you been sent by the Occ Health?" style={styles.textInput} value={haveYouBeenSentByTheOccHealth}
            onChangeText={text => setHaveYouBeenSentByTheOccHealth(text)} />

        <TouchableOpacity style={{ padding: 16, backgroundColor: '#18D5ff', margin: 8, borderRadius: 12 }}
            onPress={() => navigation.navigate('Successful')}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Submit</Text>
        </TouchableOpacity>
    </CardView>);
}