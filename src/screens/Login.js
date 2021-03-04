import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';


export default function Login() {

    const navigation = useNavigation();

    const [id, setId] = useState('');

    async function getDataUser(id) {
        if(id == ''){
            alert('Preencha o campo!')
        }else{
            await getUser(id);
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.itemForm}>
                <TextInput placeholder='Coloque aqui o ID do aluno'
                    style={styles.input} value={id} onChangeText={setId} />
            </View>
            <TouchableOpacity
                style={styles.button} onPress={() => getDataUser(id)}>
                <Text style={styles.textButton}>Mostrar aluno</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonCadastrar}
                onPress={() => navigation.navigate('CreateUser')}>
                <Text style={styles.textButtonCadastrar}>Cadastrar aluno</Text>
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
    button: {
        width: 200,
        height: 100,
        backgroundColor: '#808080',
        borderRadius: 15,

        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40

    },
    buttonCadastrar: {
        width: 200,
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 0.8,
        borderColor: '#808080',
        borderRadius: 15,

        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20


    },
    textButton: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    textButtonCadastrar: {
        color: '#808080',
        fontSize: 16,
        fontWeight: 'bold',
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
    textForm: {
        marginLeft: 10,
        fontSize: 14,
        marginBottom: 5
    },
})