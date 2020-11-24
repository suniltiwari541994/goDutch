import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { getWidth, getHeight } from "../common/screenPixel";
export default class Button extends PureComponent {
    render() {
        return (
            <TouchableOpacity style={styles.button} onPress={this.props.onPress} activeOpacity={0.9}>
                <Text style={styles.buttonTitle}>Continue</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#5A67F2',
        marginVertical: getHeight(5),
        height: getHeight(8),
        width: getWidth(50),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonTitle: {
        color: '#ffffff',
        fontSize: 17,
        fontFamily: 'Montserrat-Regular'
    },
})