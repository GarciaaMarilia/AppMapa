import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function TelaMarcador() {
    return (
        <View style={styles.container}>
            <Text>
                Tela Para Adicionar Marcadores
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});