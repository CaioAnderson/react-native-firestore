import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function Home(props){

    const navigation = useNavigation();

    const { response } = props.route.params;

    return(
        <View style={styles.container}>
            <Text>Aluno de ID : { response }</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
})