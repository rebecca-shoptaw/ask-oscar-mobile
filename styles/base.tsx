import { StyleSheet } from "react-native";
import { colors, fonts } from "./settings";

export const base = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  whiteText: {
    color: colors.fullWhite,
    fontFamily: fonts.fallback,
  },
  smaller: {
    fontSize: 10,
  },
});
