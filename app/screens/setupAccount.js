import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import { getWidth, getHeight } from "../common/screenPixel";
import { addOtherDetail } from '../redux/action/action';
import { connect } from 'react-redux';
import {Button,Label} from '../component/';


class SetupAccount extends Component {

    constructor(props) {
        super(props)
        this.state = {
            professionTypeList: ["Student", "Professional"],
            professionIndex:this.props.professionIndex,
            fullName:this.props.name,
            UpiId: this.props.upiid,
            errorMsgFullName: "",
            errorMsgUPIId: "",
        }
        this.upiIdRef = React.createRef();
    }



    onSubmit = () => {

        let {professionIndex,professionTypeList, fullName, UpiId } = this.state
        const other_Details = {
            'profession': professionTypeList[professionIndex],
            'professionIndex': professionIndex,
            'name': fullName,
            'upiid': UpiId,
        }

        this.props.addOtherDetail(other_Details)
        this.props.navigation.navigate('ViewDetail')
    }

    validate = () => {
        let { fullName, UpiId } = this.state
        this.setState({ errorMsgFullName: "", errorMsgUPIId: "" })
        if (fullName == "") {
            this.setState({ errorMsgFullName: "Please enter full name" })
        } else if (UpiId == "") {
            this.setState({ errorMsgUPIId: "Please enter UPI id" })
        } else {
            this.onSubmit()
        }
    }

    onSelectPofessionClick = (index) => {
        this.setState({
            professionIndex: index
        })
    }

    render() {
        return (
            <View style={styles.container}>
               
                <ScrollView keyboardShouldPersistTaps={'handled'} contentContainerStyle={styles.card}>
                    <View style={styles.head}>
                        <Image source={require('../assets/images/goDutchIcon.png')}
                            style={styles.image}
                            resizeMode={'contain'}
                        ></Image>
                    </View>

                    <View style={styles.content}>

                        <View style={{ marginVertical: getHeight(3), }}> 
                            <Label mand={false} title={'Current Profession'}/>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                {this.state.professionTypeList.map((item, index) => {
                                    return (
                                        <TouchableOpacity
                                            style={[styles.profession, {
                                                borderColor: (this.state.professionIndex == index ? '#5A67F2' : 'gray'),
                                                borderWidth: (this.state.professionIndex == index ? 1 : 0.5),
                                            }]}
                                            onPress={this.validate}
                                            key={index}
                                            onPress={() => { this.onSelectPofessionClick(index) }}
                                            activeOpacity={0.9}
                                        >
                                            <Text
                                                style={[styles.professionTitle, {
                                                    color: (this.state.professionIndex == index ? '#6560d2' : 'black')
                                                }]}
                                            >{item}</Text>
                                        </TouchableOpacity>
                                    )
                                })}

                            </View>
                        </View>




                        <View style={{ marginVertical: getHeight(3) }}>
                            <Label mand={true} title={'Full Name'}/>
                            <TextInput
                                style={styles.input}
                                value={this.state.fullName}
                                onChangeText={(input) => this.setState({ fullName: input, errorMsgFullName: "" })}
                                onEndEditing={() => this.upiIdRef.current.focus()}
                            >
                            </TextInput>
                            {this.state.errorMsgFullName !== "" ?
                                <Text style={styles.errorMsg}>{this.state.errorMsgFullName}</Text>
                                : null
                            }
                        </View>


                        <View style={{ marginVertical: getHeight(3) }}>
                            <Label mand={true} title={'UPI ID'}/>
                            <TextInput
                                style={styles.input}
                                value={this.state.UpiId}
                                onChangeText={(input) => this.setState({ UpiId: input, errorMsgUPIId: "" })}
                                onEndEditing={this.validate}
                                ref={this.upiIdRef}
                                autoCorrect={false}
                            >
                            </TextInput>
                            {this.state.errorMsgUPIId !== "" ?
                                <Text style={styles.errorMsg}>{this.state.errorMsgUPIId}</Text>
                                : null
                            }
                        </View>


                        <Button onPress={this.validate} />
                    </View>
                </ScrollView>

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
        margin: getWidth(2),
        elevation: 4,
        borderRadius: 8,
        justifyContent: 'flex-start',
        padding: getHeight(2),
        height: getHeight(90),
    },
    head: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    image: {
        height: getHeight(20), width: getWidth(20),
    },

    content: {
        flex: 4,
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
    },

    profession: {
        borderColor: 'gray',
        //marginTop: getHeight(5),
        height: getHeight(7),
        width: getWidth(43),
        borderRadius: 5,
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    professionTitle: {
        fontSize: 15,
        fontFamily: 'Montserrat-Regular'
    }
})

const mapStateToProps = state => {
    return {
        profession: state.UserData.profession,
        name: state.UserData.name,
        upiid: state.UserData.upiid,
        professionIndex:state.UserData.professionIndex,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addOtherDetail: (data) => dispatch(addOtherDetail(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SetupAccount)