import { hp, wp } from "@utils/responsive";
import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import Text from "../shared/Text";

function FeedCardBadge({ value, type }) {
  const badgeIcons = {
    like: <Feather name="heart" size={20} color="white" />,
    chat: <Feather name="message-square" size={20} color="white" />,
    save: <Feather name="bookmark" size={20} color="white" />,
  };

  return (
    <View style={styles.container}>
      {badgeIcons[type]}
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp(66),
    height: hp(32),
    backgroundColor: "rgba(229, 229, 229, 0.5)",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: wp(7),
  },
  text: {
    fontSize: 15,
    color: "white",
  },
});

export default FeedCardBadge;
