import React from "react";
import {StyleSheet, Text, TextInput, View, Button} from "react-native";
import Card from "../Components/Card";
import NumberContainer from "../Components/NumberContainer";


const GameScreen = (props) => {

    const generateRandomNumberBetween = (min, max, exclude) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        const rndNum = Math.floor(Math.random() * (max - min)) + min
        if (rndNum === exclude) {
            return generateRandomNumberBetween(min, max, exclude)
        } else {
            return rndNum
        }
    }


    return (
        <View style={styles.screen}>
            <Text> Opponent's Guess</Text>
            <NumberContainer>{generateRandomNumberBetween(1, 100, props.userNumber)}</NumberContainer>
            <Card style={styles.card}>
                <Button title={'Lower'}></Button>
                <Button title={'Greater'}></Button>
            </Card>
        </View>
    );
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    card: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 20,
        width: "70%",
        maxWidth: "80%"
    }
});
export default GameScreen;
