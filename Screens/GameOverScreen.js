import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";


const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Game is over!</Text>
            <Text>Number of rounds: {props.guessRounds}  </Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button title={"Start new game"} onPress={() => {
                props.onNewGameStartHandler()
            }}></Button>
        </View>
    );
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default GameOverScreen;
