import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Colors from "../constants/colors";


const MainButton = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        borderRadius: 25,
        paddingHorizontal: 5,
        paddingVertical: 5
    },
    buttonText: {
        color: 'white',
        fontFamily: 'EncodeSansSC-Medium'
    }
});
export default MainButton;
