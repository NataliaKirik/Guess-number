import React from "react";
import {Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View} from "react-native";
import Colors from "../constants/colors";


const MainButton = (props) => {
    let ButtonComponent = TouchableOpacity
    if (Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback
    }

    return (
        <ButtonComponent activeOpacity={0.8} onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </ButtonComponent>
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
