import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import CustomHeader from "@components/shared/CustomHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { StoriesBar, Text, PageTitle } from "@components";
import messbg from "@assets/messbg.png";
import { Feather } from "@expo/vector-icons";
import { hp, wp } from "@utils/responsive";
import { useSelector, useDispatch } from "react-redux";
import { startGetChats } from "@redux/Chat/chat.actions";
import ChatItem from "@components/Chat/ChatItem";

const Messages = ({ navigation }) => {
  const [searchVal, setSearchVal] = useState();
  const dispatch = useDispatch();

  const { chats } = useSelector(({ chat }) => ({
    chats: chat.chats,
  }));

  React.useEffect(() => {
    dispatch(startGetChats());
  }, []);

  const onSearchChange = () => {};

  return (
    <ImageBackground resizeMode="cover" style={{ flex: 1 }} source={messbg}>
      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        <CustomHeader
          navigation={navigation}
          right={<Feather name="menu" size={22} color="black" />}
        />

        <ScrollView style={styles.scrollView}>
          <PageTitle title="Messages" />
          <View style={styles.inputWrapper}>
            <Entypo
              style={styles.glass}
              name="magnifying-glass"
              size={24}
              color="black"
            />
            <TextInput
              style={styles.input}
              onChangeText={(t) => {
                setSearchVal(t);
              }}
              value={searchVal}
              placeholder="Search for contacts"
            />
          </View>

          <View>
            {chats?.map((c) => (
              <ChatItem key={c.id} item={c} />

              // <Text>{JSON.stringify(c)}</Text>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    paddingHorizontal: wp(25),
  },
  safeArea: {
    flex: 1,
  },
  inputWrapper: {
    height: hp(50),
    width: wp(288),
    borderRadius: 14,
    alignSelf: "center",
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingLeft: wp(10),
  },
  glass: {
    marginHorizontal: wp(15),
  },
});

export default Messages;
