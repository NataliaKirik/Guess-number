import React, {useEffect, useRef, useState} from "react";
import {Alert, Button, StyleSheet, Text, View, ScrollView, Dimensions} from "react-native";
import Card from "../Components/Card";
import NumberContainer from "../Components/NumberContainer";
import GuessNumber from "../Components/GuessNumber";

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

    const guessNumber = generateRandomNumberBetween(1, 100, userNumber)
    const [currentGuessNumber, setCurrentGuessNumber] = useState(guessNumber)
    const [guessAttempt, setGuessAttempt] = useState([guessNumber])

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
            currentLow.current = currentGuessNumber + 1
        }
        const nextNumber = generateRandomNumberBetween(currentLow.current, currentHigh.current, currentGuessNumber)
        setCurrentGuessNumber(nextNumber)
        setGuessAttempt([nextNumber, ...guessAttempt])
    }

    useEffect(() => {
        if (currentGuessNumber === userNumber) {
            guessRoundsHandler(guessAttempt.length)
        }
    }, [userNumber, guessRoundsHandler, currentGuessNumber])

    // if (Dimensions.get("window".height < 500)) {
    //     return (<ScrollView>
    //         <View style={styles.screen}>
    //             <Text> Opponent's Guess</Text>
    //             <Button title={'Lower'} onPress={NextGuessHandler.bind(this, 'lower')}/>
    //             <NumberContainer>{currentGuessNumber}</NumberContainer>
    //             <Button title={'Greater'} onPress={NextGuessHandler.bind(this, 'greater')}/>
    //             <ScrollView>
    //                 {guessAttempt.map((n, index) => {
    //                     return <GuessNumber number={n} index={guessAttempt.length - index}/>
    //                 })}
    //             </ScrollView>
    //         </View>
    //     </ScrollView>)
    // }

    return (
        <ScrollView>
            <View style={styles.screen}>
                <Text> Opponent's Guess</Text>
                <NumberContainer>{currentGuessNumber}</NumberContainer>
                <Card style={styles.card}>
                    <Button title={'Lower'} onPress={NextGuessHandler.bind(this, 'lower')}/>
                    <Button title={'Greater'} onPress={NextGuessHandler.bind(this, 'greater')}/>
                </Card>
                <ScrollView>
                    {guessAttempt.map((n, index) => {
                        return <GuessNumber key={n} number={n} index={guessAttempt.length - index}/>
                    })}
                </ScrollView>
            </View>
        </ScrollView>
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
