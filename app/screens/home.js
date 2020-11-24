import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { getWidth, getHeight } from "../common/screenPixel";
import { addMobileNumber, addOtherDetail } from '../redux/action/action';
import { connect } from 'react-redux';
import { Button, Label } from '../component/';

class Home extends Component {

    state = {
        errorMsg: ""
    }

    onSubmit = async () => {
        this.props.navigation.navigate('SetupAccount')
    }

    validate = () => {
        let { mobileNo } = this.props
        this.setState({ errorMsg: "" })
        if (mobileNo == "") {
            this.setState({ errorMsg: "Please enter mobile number" })
        } else if (mobileNo.length < 10) {
            this.setState({ errorMsg: "Please enter 10 digits mobile number" })
        } else {
            this.setState({ errorMsg: "" }, () => {
                this.onSubmit()
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.card}>

                    <View style={styles.head}>
                        <Image source={require('../assets/images/goDutchIcon.png')}
                            style={styles.image}
                            resizeMode={'contain'}
                        ></Image>
                        <Text style={styles.title}>goDutch</Text>
                    </View>

                    <View style={styles.content}>
                        <Label mand={true} title={'Mobile Number'} />
                        <TextInput
                            style={styles.input}
                            value={this.props.mobileNo}
                            // onChangeText={(input) => this.setState({ mobileNumber: input, errorMsg: "" })}
                            onChangeText={(input) => this.props.updateMobileNumber(input)}
                            maxLength={10}
                            keyboardType={'number-pad'}
                            onEndEditing={this.validate}
                        // autoFocus={true}
                        >
                        </TextInput>
                        {this.state.errorMsg !== "" ?
                            <Text style={styles.errorMsg}>{this.state.errorMsg}</Text>
                            : null
                        }
                        <Button onPress={this.validate} />
                    </View>

                </View>

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
        backgroundColor: '#ffffff',
        margin: getWidth(5),
        elevation: 4,
        borderRadius: 8,
        justifyContent: 'center',
        padding: getHeight(2),
        minHeight: getHeight(55),
    },
    head: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    image: {
        height: getHeight(13), width: getWidth(13)
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Montserrat-Regular'
    },
    content: {
        flex: 2,
    },
    input: {
        borderWidth: 0.3,
        borderColor: 'gray',
        // elevation: 0.5,
        borderRadius: 5,
        height: getHeight(7),
        fontFamily: 'Montserrat-Regular'
    },
    errorMsg: {
        color: 'red',
        fontSize: 15,
        paddingVertical: 10,
        fontFamily: 'Montserrat-Regular'
    }
})

const mapStateToProps = state => {
    return {
        mobileNo: state.UserData.mobileNo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateMobileNumber: (number) => dispatch(addMobileNumber(number))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)