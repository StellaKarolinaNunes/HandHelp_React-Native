import React, { useState, useRef } from "react";
import { Text, TextInput, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';
// import { useSafeAreaFrame, useSafeAreaInsets, } from 'react-native-safe-area-context';

const Sangue = ({ navigation, route }) => {

    const [tipoSanguineo, setTipoSanguineo] = useState('A+');
    const pickerRef = useRef(null);
    const dobString = route.params && route.params.dob ? route.params.dob : '';

    const {nome, email, senha, sexo, idade} = route.params;

    const handleNext = () => {
        // Here you can send the data to the server, save locally, or perform other actions
        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('Senha:', senha);
        console.log('Sexo selecionado:', sexo);
        console.log('Data de Nascimento:', dobString);
        console.log('Idade:', idade);
        console.log('Tipo Sanguíneo:', tipoSanguineo);
        // Navigate to the next screen or perform other actions
        navigation.navigate('AlturaEpeso', {nome, email, senha, sexo, dob: dobString, idade, tipoSanguineo})
    };
    

    function openPicker() {
        pickerRef.current.focus();
    }

    function close() {
        pickerRef.current.blur();
    }

    return (
        <View>

            <View style={styles.div}>
                <View style={styles.BoxContainer}></View>
                <Image
                    source={require("./img/EmBreve.png")}
                    style={styles.imagem}
                />
            </View>

            <Text style={styles.textTiliue}>Tipo sanguineo</Text>

            <View style={styles.Textinput}>
            <TouchableOpacity
                // onPress={openPicker}
                style={styles.pickerContainer}
            >
                <Picker
                    ref={pickerRef}
                    selectedValue={tipoSanguineo}
                    onValueChange={(itemValue, itemIndex) => setTipoSanguineo(itemValue)}
                    style={{ height: 50, width: 200 }}
                >
                    <Picker.Item label='A+' value="A+" />
                    <Picker.Item label='A-' value="A-" />
                    <Picker.Item label='B+' value="B+" />
                    <Picker.Item label='B-' value="B-" />
                    <Picker.Item label='O+' value="O+" />
                    <Picker.Item label='O-' value="O-" />
                    <Picker.Item label='AB+' value="AB+" />
                    <Picker.Item label='AB-' value="AB-" />
                </Picker>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={handleNext} // * essa preciso trocar import é pasta
            >
                
                <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    
    BoxContainer: {
        height: 330,
        width: 330,
        backgroundColor: "#0B8FAC",
        borderRadius: 200,
        bottom: 200,
        right: 150,
        position: "relative"
    },
    imagem: {
        width: 320,
        height: 320,
        bottom: 120,
        position: "absolute",
    },
    div: {
        bottom: '10'
    },
    textTiliue: {
        fontSize: 32,
        paddingTop: 10,
        color: "#0b8fac",
        textAlign: "center",
        fontStyle: "normal", 
        fontWeight: "800",
        lineHeight: 38, 
        marginBottom: 35
    },
    Textinput: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 27,
        borderColor: "#0b8fac",
        borderWidth: 1,
        margin: 15,
        padding: 13,
        left: '5%',
        height: 50,
        width: 339,
    },
    button: {
        backgroundColor: '#0b8fac',
        paddingVertical: 10,
        borderRadius: 54,
        margin: 12,
        width: 300,
        height: 50,
        left: '10%',
    },
    buttonText: {
        textAlign:'center',
        color: '#fff',
        fontSize: 18,
    },
})

export default Sangue;