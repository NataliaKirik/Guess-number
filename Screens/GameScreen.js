import React, {useState, useRef, useEffect} from "react";
import {StyleSheet, Text, TextInput, View, Button, Alert} from "react-native";
import Card from "../Components/Card";
import NumberContainer from "../Components/NumberContainer";

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

const GameScreen = (props) => {
    const {userNumber, guessRoundsHandler} = props

    const [currentGuessNumber, setCurrentGuessNumber] = useState(
        generateRandomNumberBetween(1, 100, userNumber)
    )
    const [guessAttempt, setGuessAttempt] = useState(0)

    const currentLow = useRef(1)
    const currentHigh = useRef(100)


    const NextGuessHandler = buttonName => {
        if ((buttonName === 'lower' && currentGuessNumber < userNumber) ||
            (buttonName === 'greater' && currentGuessNumber > userNumber)) {
            Alert.alert("Don't lie to computer", '', [{text: "Sorry", style: 'cancel'}])
            return
        }
        if (buttonName === 'lower') {
            currentHigh.current = currentGuessNumber
        } else {
            currentLow.current = currentGuessNumber
        }
        const nextNumber = generateRandomNumberBetween(currentLow.current, currentHigh.current, currentGuessNumber)
        setCurrentGuessNumber(nextNumber)
        setGuessAttempt(guessAttempt + 1)
    }

    useEffect(() => {
        if (currentGuessNumber === userNumber) {
            guessRoundsHandler(guessAttempt)
        }
    }, [userNumber, guessRoundsHandler, currentGuessNumber])


    return (
        <View style={styles.screen}>
            <Text> Opponent's Guess</Text>
            <NumberContainer>{currentGuessNumber}</NumberContainer>
            <Card style={styles.card}>
                <Button title={'Lower'} onPress={NextGuessHandler.bind(this, 'lower')}></Button>
                <Button title={'Greater'} onPress={NextGuessHandler.bind(this, 'greater')}></Button>
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
