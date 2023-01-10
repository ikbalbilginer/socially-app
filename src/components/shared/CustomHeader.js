import { wp } from "@utils/responsive";
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

export default ({ left, right, pageTitle }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {left || (
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Feather name="arrow-left" size={28} color={"black"} />
        </TouchableOpacity>
      )}
      {right || null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: wp(25),
    alignItems: "center",
    paddingVertical: 20,
  },
});
