import React from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const AskOscar = () => {
  return (
    <ImageBackground
      source={require("../assets/oscar-bg.png")}
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.whiteText}>Ask Oscar Wilde</Text>
        <Text style={[styles.whiteText, styles.smaller]}>your questions</Text>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bg: {
    flex: 1,
    justifyContent: "center",
  },
  whiteText: {
    color: "#fff",
  },
  smaller: {
    fontSize: 10,
  },
});

export default AskOscar;
