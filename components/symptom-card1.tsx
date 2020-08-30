import React from 'react';
import CardView from 'react-native-cardview';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import { styles } from '../style';
export const SymptomCard1 = ({ navigation }: any) => {
   
return(<CardView
    cardElevation={2}
    cardMaxElevation={2}
    cornerRadius={5}
    style={{flex:1, margin:16}}>
        <Text style={{ margin: 6 , padding:8,color:'#333', backgroundColor:'#18D5ff'}}>Note: All stall members should monitor themselves daily before coming to work and inform the supervisor if they have any symptoms.</Text>
            <Text style={{ margin: 8 }}>Personal Information</Text>
            <TextInput placeholder="First Name" style={styles.textInput} />
            <TextInput placeholder="Surname" style={styles.textInput} />
            <TextInput placeholder="Date of Birth" style={styles.textInput} />
            <TextInput placeholder="E-mail address" style={styles.textInput} />
            <TouchableOpacity style={{  padding: 16, backgroundColor: '#18D5ff', margin:8, borderRadius:12 } } onPress={()=>navigation.navigate('SymptomCard2')}>
                <Text style={{color:'#fff',textAlign:'center'}}>Next</Text>
            </TouchableOpacity>
    </CardView>);
}