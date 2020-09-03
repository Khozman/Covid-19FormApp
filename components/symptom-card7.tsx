import React, {useState} from 'react';
import CardView from 'react-native-cardview';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import { styles } from '../style';
export const SymptomCard7 = ({ navigation }: any) => {
    const [note, setNote] = useState<string>('');

return(<CardView
    cardElevation={2}
    cardMaxElevation={2}
    cornerRadius={5}
    style={{margin:16, padding:16}}>

            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'left' }} >At Home or work?</Text>

             <TextInput placeholder="Clinical and Progress Note and Exposure History:" style={styles.textInput} value={note}
            onChangeText={text => setNote(text)} />
 
            <TouchableOpacity style={{  padding: 16, backgroundColor: '#18D5ff', margin:8, borderRadius:12 } }
                onPress={()=>navigation.navigate('Successful')}>
            <Text style={{color:'#fff',textAlign:'center'}}>Submit</Text>
        </TouchableOpacity>
 </CardView>);
 }