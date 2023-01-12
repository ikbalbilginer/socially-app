import React, { useState } from "react";
import { StyleSheet, View, Image, TextInput, FlatList } from "react-native";
import sendbtn from "@assets/sendbtn.png";
import CustomHeader from "@components/shared/CustomHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@components";
import { Feather } from "@expo/vector-icons";
import { hp, wp } from "@utils/responsive";
import { useSelector } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const MessageDetail = ({ navigation }) => {
  const [searchVal, setSearchVal] = useState();

  const { chatDetails } = useSelector(({ chat }) => ({
    chatDetails: chat.chatDetails,
  }));

  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.safeArea}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={"handled"}
        style={{ flex: 1, backgroundColor: "white" }}
        behavior={"position"}
        scrollEnabled={false}
        keyboardOpeningTime={1}
        enableOnAndroid={true}
        contentContainerStyle={{ flex: 1 }}
      >
        <View style={styles.header}>
          <CustomHeader
            navigation={navigation}
            right={<Feather name="menu" size={22} color="black" />}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "16%",
            }}
          >
            <Image source={chatDetails?.user?.thumbnail} />
            <View style={{ marginLeft: 25 }}>
              <Text style={{ fontSize: 24 }}>
                {chatDetails?.user?.username}
              </Text>
              <Text style={{}}>{"Online"}</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={chatDetails?.messages}
            renderItem={({ item, index }) => {
              const m = item;
              const ind = index;

              let margin;
              if (m.user === "a") {
                margin = { marginRight: "auto" };
              } else {
                margin = { marginLeft: "auto" };
              }

              return (
                <View
                  key={ind}
                  style={{
                    backgroundColor: "#fafafa",
                    borderRadius: 14,
                    padding: 12,
                    maxWidth: "80%",
                    marginBottom: 12,
                    ...margin,
                  }}
                >
                  <Text>{m.text}</Text>
                </View>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={(t) => {
              setSearchVal(t);
            }}
            value={searchVal}
            placeholder="Write a message..."
          />
          <Image source={sendbtn} style={{ width: hp(64), height: hp(64) }} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#E1F6F4",
    height: hp(250),
    borderRadius: 25,
    marginBottom: hp(30),
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: wp(25),
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: wp(15),
    backgroundColor: "white",
  },
  inputWrapper: {
    backgroundColor: "orange",
    justifyContent: "space-between",
    height: hp(70),
    width: wp(288),
    borderRadius: 22,
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
    paddingLeft: wp(20),
    marginBottom: 5,
  },
  glass: {
    marginHorizontal: wp(15),
  },
});

export default MessageDetail;
