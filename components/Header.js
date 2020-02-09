import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My To Do's</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: "#EE82EE"
    },
    title: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20
    }
});