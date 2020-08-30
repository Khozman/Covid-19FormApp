import React from 'react';
import CardView from 'react-native-cardview';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import { styles } from '../style';
export const SymptomCard2 = ({ navigation }: any) => {
   
return(<CardView
    cardElevation={2}
    cardMaxElevation={2}
    cornerRadius={5}
    style={{flex:1, margin:16}}>
         <TextInput placeholder="Cell number" style={styles.textInput} />
            <TextInput placeholder="Alternative number" style={styles.textInput} />
            <TextInput placeholder="Role: Circle as appropriate" style={styles.textInput} />
            <TouchableOpacity style={{  padding: 16, backgroundColor: '#18D5ff', margin:8, borderRadius:12 } } onPress={()=>navigation.navigate('SymptomCard3')}>
                <Text style={{color:'#fff',textAlign:'center'}}>Next</Text>
            </TouchableOpacity>
    </CardView>);
}