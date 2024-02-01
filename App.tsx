import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.whiteText}>Ask Oscar Wilde</Text>
      <Text style={[styles.whiteText, styles.smaller]}>your questions</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  whiteText: {
    color: "#fff",
  },
  smaller: {
    fontSize: 10,
  },
});
