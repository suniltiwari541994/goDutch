import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

let getWidth = (percentage) => {
    return screenWidth * percentage / 100
}

let getHeight = (percentage) => {
    return screenHeight * percentage / 100
}

module.exports = {
    getWidth,
    getHeight
}