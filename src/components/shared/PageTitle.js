import { wp } from "@utils/responsive";
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export default ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTxt}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pageTxt: {
    fontSize: 24,
    fontFamily: "Poppins-Bold",
    marginVertical: 25,
    // paddingHorizontal: wp(25),
  },
});
