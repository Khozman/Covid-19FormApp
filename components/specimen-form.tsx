import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,ScrollView  } from 'react-native';
import { styles } from '../style';
export const SpecimenForm = ({navigation}:any) => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <Text style={{ margin: 8 }}>Patient Information</Text>
            <TextInput placeholder="First Name" style={styles.textInput} />
            <TextInput placeholder="Surname" style={styles.textInput} />
            <TextInput placeholder="ID number" style={styles.textInput} />
            <TextInput placeholder="Date of Birth" style={styles.textInput} />
            <TextInput placeholder="Age" style={styles.textInput} />
           
            <TextInput placeholder="Home Address" style={styles.textInput}  />
            <TextInput placeholder="Postal Code" style={styles.textInput} />
            <TextInput placeholder="Cellphone Number" style={styles.textInput} />
            <View style={{ borderColor: '#e3e3e3', borderWidth: 1, marginVertical:8 }}></View>

            <Text style={{ margin: 8 }}>Next of kin information</Text>
            <TextInput placeholder="First Name" style={styles.textInput} />
            <TextInput placeholder="Surname" style={styles.textInput} />
            <TextInput placeholder="Contact Number of Next of kin" style={styles.textInput} />
            <TextInput placeholder="Marital Status" style={styles.textInput} />
            <TextInput placeholder="Persal/Staff Number" style={styles.textInput} />
           
            <TextInput placeholder="Where do you work?" style={styles.textInput}  />
            <TextInput placeholder="Who is your line manager" style={styles.textInput} />
            <TextInput placeholder="Do they know that you are here?" style={styles.textInput} />
            <TextInput placeholder="Have you been sent by the Occ Health" style={styles.textInput} />

            <TouchableOpacity style={{  padding: 16, backgroundColor: '#18D5ff', margin:8, borderRadius:12 } }
             onPress={()=>navigation.navigate('Successful')}>
                <Text style={{color:'#fff',textAlign:'center'}}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}