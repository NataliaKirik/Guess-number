import React from "react";
import {StyleSheet, Text} from "react-native";


const BodyText = props => <Text style={{...styles.body, ...props.style}}>{props.children}</Text>;
const styles = StyleSheet.create({
    body: {
        fontFamily: 'EncodeSansSC-Medium'
    }
});
export default BodyText;
