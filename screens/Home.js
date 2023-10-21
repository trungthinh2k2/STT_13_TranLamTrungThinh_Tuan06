import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

function index({ navigation }) {
    return (
        <View style={styles.btn}>
            <Button
                title="Screen4_a"
                onPress={() => navigation.navigate("Screen4_a")} />
            <Button
                title="Screen4_b"
                onPress={() => navigation.navigate("Screen4_b")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    btn: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: '25%',
        textAlign: "center",
        width: "50%",
        height: 100
    },
});

export default index;