import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function Home(props) {

    const navigation = useNavigation();

    const { nome, curso, idade } = props.route.params;


    return (
        <View style={styles.container}>
            <View>
            <View style={styles.item}>
                <Text>Nome do aluno : </Text>
                <Text style={styles.dataAluno}>{nome}</Text>
            </View>
            <View style={styles.item}>
                <Text>Curso do aluno : </Text>
                <Text style={styles.dataAluno}>{curso}</Text>
            </View>
            <View style={styles.item}>
                <Text>Idade do aluno : </Text>
                <Text style={styles.dataAluno}>{idade}</Text>
            </View>
            </View>
            
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textButton}>Sair</Text>
                </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    item: {
        flexDirection: 'row',
        marginVertical: 8
    },
    dataAluno: {
        fontWeight: 'bold'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#808080',
        width: 100,
        height: 100,
        borderRadius: 15

    },
    textButton: {
        color: '#fff'
    }
})