import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

import { createUser } from '../api/api';

export default function CreateUser() {

    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');
    const [idade, setIdade] = useState('');

    async function Cadastrar(nome, curso, idade) {
        const response = await createUser(nome, curso, idade);
        navigation.navigate('Login')


    }
    return (
        <View style={styles.container}>
            <View style={styles.form}>


                <View style={styles.itemForm}>
                    <Text style={styles.textForm}>Nome: </Text>
                    <TextInput style={styles.input} value={nome} onChangeText={setNome} />
                </View>

                <View style={styles.itemForm}>
                    <Text style={styles.textForm}>Curso: </Text>
                    <TextInput style={styles.input} value={curso} onChangeText={setCurso} />
                </View>

                <View style={styles.itemForm}>
                    <Text style={styles.textForm}>Idade: </Text>
                    <TextInput style={styles.input} value={idade} onChangeText={setIdade} />
                </View>

                <TouchableOpacity style={styles.button} onPress={() => Cadastrar(nome, curso, idade)}>
                    <Text style={styles.textButton}>Cadastrar</Text>
                </TouchableOpacity>



            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    input: {
        height: 50,
        width: 300,
        backgroundColor: '#f2f2f2',
        borderRadius: 20,

        elevation: 1,
        padding: 10,
        color: '#000'
    },
    form: {
        alignItems: 'center'
    },
    itemForm: {
        marginBottom: 25
    },
    textForm: {
        marginLeft: 10,
        fontSize: 14,
        marginBottom: 5
    },
    button: {
        width: 200,
        height: 100,
        backgroundColor: '#808080',
        borderRadius: 15,

        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10

    },
    textButton: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});
