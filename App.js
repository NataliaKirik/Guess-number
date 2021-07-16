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

const App = () => {
    const [userNumber, setUserNumber] = useState()

    const startGameHandler = (userNumber) => {
        setUserNumber(userNumber)
    }

    let content = <StartGameScreen startGameHandler={startGameHandler}/>

    if (userNumber) {
        content = <GameScreen userNumber={userNumber}/>
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
