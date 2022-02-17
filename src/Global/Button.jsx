import React from 'react';
import { Image, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Button() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate("TelaMarcador")}
            >
                <Image
                    source={{
                        uri: 'https://icon-library.com/images/white-plus-icon/white-plus-icon-14.jpg',
                    }}
                    style={styles.button}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'flex-end',
        justifyContent: 'flex-end'
    },
    touchable: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    button: {
        resizeMode: 'contain',
        width: 100,
        height: 100,
        margin: 14
    }
})