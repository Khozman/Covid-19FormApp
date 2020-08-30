import React from 'react';
import CardView from 'react-native-cardview';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import { styles } from '../style';
export const SymptomCard3 = ({ navigation }: any) => {
   
return(<CardView
    cardElevation={2}
    cardMaxElevation={2}
    cornerRadius={5}
    style={{flex:1, margin:16}}>
        <Text style={{ margin: 8 }}>Next of kin or Alternative Contact</Text>
            <TextInput placeholder="First Name" style={styles.textInput} />
            <TextInput placeholder="Surname" style={styles.textInput} />
            <TextInput placeholder="Relationship" style={styles.textInput} />
            <TextInput placeholder="Cell number" style={styles.textInput} />

            <TouchableOpacity style={{  padding: 16, backgroundColor: '#18D5ff', margin:8, borderRadius:12 } } onPress={()=>navigation.navigate('SymptomCard4')}>
                <Text style={{color:'#fff',textAlign:'center'}}>Next</Text>
            </TouchableOpacity>
    </CardView>);
}