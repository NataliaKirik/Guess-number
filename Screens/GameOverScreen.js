import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import BodyText from "../Components/BodyText";
import MainButton from "../Components/MainButton";


const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Game is over!</Text>
            <View style={styles.imageContainer}>
                <Image source={{
                    uri: 'https://media.wired.com/photos/593422ccfbdfa3763bab6d61/master/w_1920,c_limit/249-artwork-focus.jpg',
                }} style={styles.image}/>
            </View>
            <View style={styles.resultContainer}><BodyText style={styles.resultText}> Your phone
                needed {props.guessRounds} rounds to guess the
                number {props.userNumber}</BodyText></View>
            <MainButton onPress={() => {
                props.onNewGameStartHandler()
            }}> START NEW GAME</MainButton>
        </View>
    );
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 2,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: "100%",
        height: "100%",
    },
    resultContainer: {
        marginHorizontal: 15,
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center',
        fontSize: 18
    }
});

export default GameOverScreen;
