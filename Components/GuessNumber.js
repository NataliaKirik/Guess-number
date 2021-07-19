import React from "react";
import {StyleSheet, View, Text} from "react-native";
import Card from "./Card";
import NumberContainer from "./NumberContainer";


const GuessNumber = (props) => {
    return (
        <View style={styles.screen}>
            <NumberContainer style={{borderColor: "white"}}>
                <Text>{props.index}</Text>
            </NumberContainer>
            <Card style={{marginVertical: 10}}>
                <Text>{props.number}</Text>
            </Card>
        </View>
    );
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'row',
    }
});
export default GuessNumber;
