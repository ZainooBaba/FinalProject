import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const App = () => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

    return (
        <View style={styles.container}>
            <View style={styles.countContainer}>
                <Text style={styles.tittleText}>PUZLER</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.buttonText}>PLAY</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.buttonText}>SOCIAL</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.buttonText}>LEADERBOARD</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
        backgroundColor: "#111111"

    },
    button: {
        alignItems: "center",
        backgroundColor: "#fa9819",
        padding: 40,
        marginHorizontal: 500,
        height: 100,
        marginTop: 40,

    },
    tittleText: {
        fontFamily: "Arial Black",
        fontSize:150,
        marginTop:0,
        marginBottom:75,
        alignItems: 'center',
        textAlign:'center',
        color:"#dddddd"
    },
    buttonText: {
        fontFamily: "Courier New",
        position: 'relative',
        height: 500,
        fontSize:50,
        alignItems: 'center',
        justifyContent: 'center',

    }
});

export default App;