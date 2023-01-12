import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
  },
});
