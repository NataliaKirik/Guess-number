import React, {useEffect, useState} from "react";
import {
    Button,
    Keyboard,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
    Alert,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView
} from "react-native";
import Card from "../Components/Card";
import Colors from "../constants/colors";
import Input from "../Components/Input";
import NumberContainer from "../Components/NumberContainer";

const StartGameScreen = (props) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4)

    useEffect(() => {
        const updateLayout = () => {
            setButtonWidth(Dimensions.get('window').width / 4)
        }
        Dimensions.addEventListener('change', updateLayout)
        return () => {
            Dimensions.removeEventListener('change', updateLayout)
        }
    })

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ""));
    };

    const resetInputHandler = () => {
        setEnteredValue("");
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("Invalid number!", "Number has to be a number between 1 and 99",
                [{text: "Okay", style: "destructive", onPress: resetInputHandler}]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue("");
    };

    let confirmedOutput;

    const onBtnStartGamePressHandler = () => {
        props.startGameHandler(selectedNumber)
    }

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.cardContainer}>
                <Text style={styles.cardTitle}>You selected</Text>
                <View>
                    <NumberContainer>{selectedNumber}</NumberContainer>
                </View>
                <View>
                    <Button title={'START GAME'} color={''} onPress={
                        onBtnStartGamePressHandler
                    }/>
                </View>
            </Card>);
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior={"position"} keyboardVerticalOffset={30}>
                <TouchableWithoutFeedback onPress={() => {
                    Keyboard.dismiss();
                }}>
                    <View style={styles.screen}>
                        <Text style={styles.title}>Start a new game</Text>
                        <Card style={styles.inputContainer}>
                            <Text>Select a Number</Text>
                            <Input style={styles.input} autoCapitalize={"none"}
                                   autoCorrect={false} keyboardType={"number-pad"}
                                   maxLength={2} blurOnSubmit={true} value={enteredValue}
                                   onChangeText={numberInputHandler}/>
                            <View style={styles.buttonContainer}>
                                <View style={{width: buttonWidth}}>
                                    <Button title={"Reset"}
                                            onPress={resetInputHandler}
                                            color={Colors.accent}/>
                                </View>
                                <View style={{width: buttonWidth}}>
                                    <Button title={"Confirm"} onPress={confirmInputHandler} color={Colors.primary}/>
                                </View>
                            </View>
                        </Card>
                        {confirmedOutput}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    cardContainer: {
        marginVertical: 15,
        alignItems: "center",
    },
    cardTitle: {
        fontSize: 15
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: 'space-around',
        marginHorizontal: 15,
        marginTop: Dimensions.get("window").height > 600 ? 20 : 10
    },
    inputContainer: {
        width: "80%",
        maxWidth: "95%",
        minWidth: 300,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    button: {
        // width:,

    },
    input: {
        width: 50,
        textAlign: "center",
        marginEnd: 10,
        height: 40,
        fontSize: 15,
    },

});

export default StartGameScreen;
