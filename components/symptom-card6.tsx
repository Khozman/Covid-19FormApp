import React, { useState } from 'react';
import CardView from 'react-native-cardview';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import ToggleSwitch2 from 'toggle-switch-react-native'
export const SymptomCard6 = ({ navigation }: any) => {
    const [hasChills, setHasChills] = useState<boolean>(false);
    const [hasShortnessOfBreath, setHasShortnessOfBreath] = useState<boolean>(false);
    const [hasRednessOfTheEyes, setHasRednessOfTheEyes] = useState<boolean>(false);
    const [hasNauseaVomitingOrDiarrhoea, setHasNauseaVomitingOrDiarrhoea] = useState<boolean>(false);
    const [hasFatigueOrWeakness, setHasFatigueOrWeakness] = useState<boolean>(false);

    return (<CardView
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={5}
        style={{ margin: 16, padding: 16 }}>

        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'left' }} >Symptoms</Text>

        <View style={{ marginVertical: 8 }} >
            <ToggleSwitch2
                isOn={hasChills}
                onColor="green"
                offColor="red"
                label="Chills"
                labelStyle={{ color: "black", fontWeight: "900", fontSize: 18, marginVertical: 8, flex: 1 }}
                size='large'
                onToggle={isOn => setHasChills(isOn)}
            />
        </View>

        <View style={{ marginVertical: 8 }} >
            <ToggleSwitch2
                isOn={hasShortnessOfBreath}
                onColor="green"
                offColor="red"
                label="Shortness of breath"
                labelStyle={{ color: "black", fontWeight: "900", fontSize: 18, marginVertical: 8, flex: 1 }}
                size='large'
                onToggle={isOn => setHasShortnessOfBreath(isOn)}
            />
        </View>

        <View style={{ marginVertical: 8 }} >
            <ToggleSwitch2
                isOn={hasRednessOfTheEyes}
                onColor="green"
                offColor="red"
                label="Redness of the eyes"
                labelStyle={{ color: "black", fontWeight: "900", fontSize: 18, marginVertical: 8, flex: 1 }}
                size='large'
                onToggle={isOn => setHasRednessOfTheEyes(isOn)}
            />
        </View>

        <View style={{ marginVertical: 8 }} >
            <ToggleSwitch2
                isOn={hasNauseaVomitingOrDiarrhoea}
                onColor="green"
                offColor="red"
                label="Nausea / vomiting / diarrhoea"
                labelStyle={{ color: "black", fontWeight: "900", fontSize: 18, marginVertical: 8, flex: 1 }}
                size='large'
                onToggle={isOn => setHasNauseaVomitingOrDiarrhoea(isOn)}
            />
        </View>

        <View style={{ marginVertical: 8 }} >
            <ToggleSwitch2
                isOn={hasFatigueOrWeakness}
                onColor="green"
                offColor="red"
                label="Fatigue / weakness"
                labelStyle={{ color: "black", fontWeight: "900", fontSize: 18, marginVertical: 8, flex: 1 }}
                size='large'
                onToggle={isOn => setHasFatigueOrWeakness(isOn)}
            />
        </View>

        <TouchableOpacity style={{ padding: 16, backgroundColor: '#18D5ff', margin: 8, borderRadius: 12 }} onPress={() => navigation.navigate('SymptomCard7')}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Next</Text>
        </TouchableOpacity>
    </CardView>);
}
// const styles = StyleSheet.create({
//     row: { marginVertical: 8 }
// })