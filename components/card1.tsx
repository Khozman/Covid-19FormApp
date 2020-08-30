import React from 'react';
import CardView from 'react-native-cardview';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import { styles } from '../style';
export const Card1 = ({ navigation }: any) => {
   
return(<CardView
    cardElevation={2}
    cardMaxElevation={2}
    cornerRadius={5}
    style={{flex:1, margin:16}}>
            <TextInput placeholder="First Name" style={styles.textInput} />
            <TextInput placeholder="Surname" style={styles.textInput} />
            <TextInput placeholder="ID number" style={styles.textInput} />
            <TextInput placeholder="Date of Birth" style={styles.textInput} />
            <TextInput placeholder="Age" style={styles.textInput} />
            <TouchableOpacity style={{  padding: 16, backgroundColor: '#18D5ff', margin:8, borderRadius:12 } } onPress={()=>navigation.navigate('Card2')}>
                <Text style={{color:'#fff',textAlign:'center'}}>Next</Text>
            </TouchableOpacity>
</CardView>);
}