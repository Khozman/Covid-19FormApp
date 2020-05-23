import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,ScrollView  } from 'react-native';
import { styles } from '../style';

export const SymptomForm = ({navigation}:any) => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <Text style={{ margin: 6 , padding:8,color:'#333', backgroundColor:'#18D5ff'}}>Note: All stall members should monitor themselves daily before coming to work and inform the supervisor if they have any symptoms.</Text>
            <Text style={{ margin: 8 }}>Personal Information</Text>
            <TextInput placeholder="First Name" style={styles.textInput} />
            <TextInput placeholder="Surname" style={styles.textInput} />
            <TextInput placeholder="Date of Birth" style={styles.textInput} />
            <TextInput placeholder="E-mail address" style={styles.textInput} />
            <TextInput placeholder="Cell number" style={styles.textInput} />
            <TextInput placeholder="Alternative number" style={styles.textInput} />
            <TextInput placeholder="Role: Circle as appropriate" style={styles.textInput} />
            <View style={{ borderColor: '#e3e3e3', borderWidth: 1, marginVertical:8 }}></View>

            <Text style={{ margin: 8 }}>Next of kin or Alternative Contact</Text>
            <TextInput placeholder="First Name" style={styles.textInput} />
            <TextInput placeholder="Surname" style={styles.textInput} />
            <TextInput placeholder="Relationship" style={styles.textInput} />
            <TextInput placeholder="Cell number" style={styles.textInput} />

            <TouchableOpacity style={{  padding: 16, backgroundColor: '#18D5ff', margin:8, borderRadius:12 } } onPress={()=>navigation.navigate('CoronavirusSymptoms')}>
                <Text style={{color:'#fff',textAlign:'center'}}>Next</Text>
            </TouchableOpacity>
            </ScrollView>
         );
        }