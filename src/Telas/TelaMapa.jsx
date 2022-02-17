import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import Button from '../Global/Button';
import Mapa from '../Componentes/Mapa';


export default function TelaMapa() {
    return (
        <>
            <StatusBar style="auto" />
            <Mapa />
            <Button />
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})