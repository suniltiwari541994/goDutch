import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { getWidth, getHeight } from "../common/screenPixel";
import { connect } from 'react-redux';
import { Button, Label } from '../component/';


class ViewDetail extends Component {
    constructor(props) {
        super(props)
    }

    onSubmit = () => {
        this.props.navigation.navigate('Home')
    }

    render() {
        return (

            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.card}>
                    <View>
                        <Label mand={false} title={'Name'} style={styles.title} />
                        <Label mand={false} title={this.props.name} style={styles.detail} />
                    </View>
                    <View>

                        <Label mand={false} title={'MobileNo'} style={styles.title} />
                        <Label mand={false} title={` +91 ${this.props.mobileNo}`} style={styles.detail} />

                    </View>
                    <View>
                        <Label mand={false} title={'Upi Id'} style={styles.title} />
                        <Label mand={false} title={this.props.upiid} style={styles.detail} />
                    </View>

                    <View>
                        <Label mand={false} title={'Profession'} style={styles.title} />
                        <Label mand={false} title={this.props.profession} style={styles.detail} />
                    </View>

                </ScrollView>
                <Button onPress={this.onSubmit} />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#ffffff',
        backgroundColor: '#D3D3D3',
        justifyContent: 'center',

    },

    card: {
        //   flex: 1,
        backgroundColor: '#ffffff',
        margin: getWidth(5),
        elevation: 4,
        borderRadius: 8,
        justifyContent: 'flex-start',
        padding: getHeight(2),
        minHeight: getHeight(70),
    },
    title: {
        color: 'black',
        fontSize: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        paddingVertical: getHeight(2),
    },
    detail: {
        color: '#5A67F2',
        fontSize: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        paddingVertical: getHeight(2),
    },
    errorMsg: {
        color: 'red',
        fontSize: 15,
        paddingVertical: 10
    },

})

const mapStateToProps = state => {
    return {
        profession: state.UserData.profession,
        name: state.UserData.name,
        upiid: state.UserData.upiid,
        professionIndex: state.UserData.professionIndex,
        mobileNo: state.UserData.mobileNo
    }
}




export default connect(mapStateToProps)(ViewDetail)