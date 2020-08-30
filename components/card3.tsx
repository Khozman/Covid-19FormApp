import React from 'react';
import CardView from 'react-native-cardview';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import { styles } from '../style';
export const Card3 = ({ navigation }: any) => {
   
return(<CardView
    cardElevation={2}
    cardMaxElevation={2}
    cornerRadius={5}
    style={{flex:1, margin:16}}>
            <Text style={{ margin: 8 }}>Next of kin information</Text>
            <TextInput placeholder="First Name" style={styles.textInput} />
            <TextInput placeholder="Surname" style={styles.textInput} />
            <TextInput placeholder="Contact Number of Next of kin" style={styles.textInput} />
            <TextInput placeholder="Marital Status" style={styles.textInput} />
            <TextInput placeholder="Persal/Staff Number" style={styles.textInput} />
            <TouchableOpacity style={{  padding: 16, backgroundColor: '#18D5ff', margin:8, borderRadius:12 } } onPress={()=>navigation.navigate('Card4')}>
                <Text style={{color:'#fff',textAlign:'center'}}>Next</Text>
            </TouchableOpacity>
    </CardView>);
}