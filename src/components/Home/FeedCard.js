import { hp } from "@utils/responsive";
import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import FeedCardBadge from "./FeedCardBadge";
import Text from "../shared/Text";
import { Entypo } from "@expo/vector-icons";

function FeedCard({ item }) {
  return (
    <ImageBackground source={item.thumb} style={styles.container}>
      <TouchableOpacity style={styles.wrapper}>
        <View style={styles.headContainer}>
          <Image source={item.user.thumbnail} />
          <View style={styles.userInfoC}>
            <Text weight="semibold" style={{ color: "white" }}>
              {item.user.username}
            </Text>
            <Text style={{ color: "rgba(255,255,255,0.6)" }}>
              {item.timestamp}
            </Text>
          </View>
          <Entypo name="dots-three-vertical" size={24} color="white" />
        </View>
        <View style={styles.badgeContainer}>
          <FeedCardBadge type="like" value={"5.2K"} />
          <FeedCardBadge type="chat" value={"1.1K"} />
          <FeedCardBadge type="save" value={"362"} />
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: hp(270),
    borderRadius: 24,
    marginBottom: hp(32),
    overflow: "hidden",
  },
  wrapper: {
    flex: 1,
    padding: hp(15),
  },
  headContainer: {
    flexDirection: "row",
    marginBottom: "auto",
    alignItems: "center",
    // justifyContent: "space-between",
  },
  badgeContainer: {
    flexDirection: "row",
    marginTop: "auto",
    alignItems: "center",
    justifyContent: "space-around",
  },
  userInfoC: {
    flexDirection: "column",
    marginRight: "auto",
  },
});

export default FeedCard;
