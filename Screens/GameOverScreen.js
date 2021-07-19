import React, {useEffect, useState} from "react";
import {Dimensions, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import BodyText from "../Components/BodyText";
import MainButton from "../Components/MainButton";


const GameOverScreen = (props) => {
    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);

    useEffect(() => {
        const updateLayout = () => {
            setAvailableDeviceWidth(Dimensions.get('window').width);
            setAvailableDeviceHeight(Dimensions.get('window').height);
        };

        Dimensions.addEventListener('change', updateLayout);

        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    });
    return (
        <ScrollView>
            <View style={styles.screen}>
                <Text>Game is over!</Text>
                <View style={{
                    ...styles.imageContainer,
                    ...{
                        width: availableDeviceWidth * 0.5,
                        height: availableDeviceWidth * 0.5,
                        borderRadius: (availableDeviceWidth * 0.5) / 2,
                        marginVertical: availableDeviceHeight / 30
                    }
                }}>
                    <Image source={{
                        uri: 'https://media.wired.com/photos/593422ccfbdfa3763bab6d61/master/w_1920,c_limit/249-artwork-focus.jpg',
                    }} style={styles.image} resizeMode={"cover"}/>
                </View>
                <View style={{
                    ...styles.resultContainer,
                    ...{marginVertical: availableDeviceHeight / 60}
                }}>
                    <BodyText style={{
                        ...styles.resultText, ...{
                            fontSize: availableDeviceHeight < 400 ? 16 : 20
                        }
                    }}> Your phone
                        needed {props.guessRounds} rounds to guess the
                        number {props.userNumber}</BodyText></View>
                <MainButton onPress={() => {
                    props.onNewGameStartHandler()
                }}> START NEW GAME</MainButton>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        borderWidth: 2,
        borderColor: 'black',
        overflow: 'hidden',
    },
    image: {
        width: "100%",
        height: "100%",
    },
    resultContainer: {
        marginHorizontal: 15,
        // marginVertical: Dimensions.get("window").width / 60
    },
    resultText: {
        textAlign: 'center',
        // fontSize: Dimensions.get("window").width < 400 ? 16 : 20
    }
});

export default GameOverScreen;
