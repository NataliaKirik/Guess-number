/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {StyleSheet, View,} from 'react-native';
import Header from "./Components/Header";
import StartGameScreen from "./Screens/StartGameScreen";
import GameScreen from "./Screens/GameScreen";
import GameOverScreen from "./Screens/GameOverScreen";

const App = () => {
    const [userNumber, setUserNumber] = useState()
    const [guessRounds, setGuessRounds] = useState(0)

    const startGameHandler = (userNumber) => {
        setUserNumber(userNumber)
    }
    const guessRoundsHandler = (rounds) => {
        setGuessRounds(rounds)
    }

    const onNewGameStartHandler = () => {
        setUserNumber(null)
        setGuessRounds(0)
    }

    let content = <StartGameScreen startGameHandler={startGameHandler}/>

    if (userNumber && guessRounds === 0) {
        content = <GameScreen userNumber={userNumber} guessRoundsHandler={guessRoundsHandler}/>
    } else if (userNumber && guessRounds > 0) {
        content = <GameOverScreen onNewGameStartHandler={onNewGameStartHandler} userNumber={userNumber}
                                  guessRounds={guessRounds}/>
    }

    return (
        <View style={styles.screen}>
            <Header title={'Guess a number'}/>
            {content}
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default App;
