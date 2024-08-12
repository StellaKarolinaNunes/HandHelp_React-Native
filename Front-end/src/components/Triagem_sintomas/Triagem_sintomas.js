import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Triagem_sintomas = () => {
  return (
    <View style={styles.Container}>

       

        <View style={styles.containerButtText}>

            <Text style={styles.textTiliue}>Escolha um atendimento?</Text>

           

        </View>
    </View>
);
}

const styles = StyleSheet.create({
  Container: {
      top: '15%'
  },
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
  BoxImag: {
      top: '5%',
      left: '10%'
  },
  containerButtText: {
      bottom: '3%'
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
  button: {
      backgroundColor: '#0b8fac',
      paddingVertical: 10,
      borderRadius: 54,
      margin: 12,
      width: 300,
      height: 50,
      left: '10%',
  },
  buttonblack: {
      backgroundColor: '#000',
      paddingVertical: 10,
      borderRadius: 54,
      margin: 12,
      width: 300,
      height: 50,
      left: '10%',
  },
  buttonText: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
  },
})


export default Triagem_sintomas;
