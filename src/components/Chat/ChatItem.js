import { hp, wp } from "@utils/responsive";
import React from "react";

import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Text from "../shared/Text";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setChatDetails } from "@redux/Chat/chat.actions";

function ChatItem({ item }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { chats } = useSelector(({ chat }) => ({
    chats: chat.chats,
  }));

  const handlePress = () => {
    const currentChat = chats.find((c) => c.id === item.id);

    dispatch(setChatDetails(currentChat));
    navigation.navigate("MessageDetail");
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Image source={item.user.thumbnail} style={styles.img} />
      <View style={{ flexWrap: "wrap" }}>
        <Text>{item.user.username}</Text>
        <Text style={styles.msg}>
          {item.messages[item.messages.length - 1].text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,0.8)",
    padding: wp(20),
    marginVertical: hp(10),
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  msg: {
    color: "grey",
    whiteSpace: "wrap",
    width: wp(230),
  },
  img: {
    marginRight: 10,
  },
});

export default ChatItem;
