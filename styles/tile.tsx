import { fonts, colors, dimensions, shapes } from "./settings";
import { StyleSheet } from "react-native";

export const tile = StyleSheet.create({
  tile: {
    backgroundColor: colors.midBlue,
    color: colors.fullWhite,
    borderRadius: shapes.radius,
  },
  title: {
    color: colors.fullWhite,
    fontSize: 20,
  },
  textBox: {
    borderRadius: shapes.radius,
    backgroundColor: colors.offWhite,
    color: "black",
  },
});
