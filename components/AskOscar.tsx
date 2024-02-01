import React from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { base } from "../styles/base";
import Input from "./Input";
import Quote from "./Quote";

const AskOscar = () => {
  return (
    <ImageBackground
      source={require("../assets/images/oscar-bg.png")}
      style={base.bg}
      resizeMode="cover"
    >
      <View style={base.container}>
        <Input />
        <Quote />
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
};

export default AskOscar;
