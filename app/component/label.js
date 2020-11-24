import React, { PureComponent } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class Label extends PureComponent {
    render() {
        return (
            <Text
                style={typeof this.props.style !== 'undefined' ?
                    { ...this.props.style }
                    : styles.label}>
                {this.props.title} {this.props.mand ? <Text style={{ color: 'red' }}>*</Text> : null}
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    label: {
        color: 'black',
        fontSize: 14,
        paddingVertical: 10,
        fontFamily: 'Montserrat-Regular',
        fontWeight: '500'
    },
})