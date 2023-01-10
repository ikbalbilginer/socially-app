import { hp, wp } from "@utils/responsive";
import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

function StoryIcon({ item }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={item.thumbnail} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp(55),
    height: wp(55),
    borderRadius: 100,
    borderWidth: 2,
    marginRight: wp(26),
    marginBottom: hp(38),
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 100,
  },
});

export default StoryIcon;
