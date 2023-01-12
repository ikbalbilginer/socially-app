import React, { useState } from "react";
import { StyleSheet, ScrollView, ImageBackground } from "react-native";
import CustomHeader from "@components/shared/CustomHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { StoriesBar, Text, PageTitle, FeedCard } from "@components";
import homebg from "@assets/homebg.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { wp } from "@utils/responsive";
import { useSelector } from "react-redux";
const Home = ({ navigation }) => {
  const { stories, feed } = useSelector(({ auth: { user } }) => user);

  return (
    <ImageBackground resizeMode="cover" style={{ flex: 1 }} source={homebg}>
      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        <CustomHeader
          left={<Text weight="bold">Socially</Text>}
          right={<MaterialCommunityIcons name="bell" size={22} color="black" />}
        />
        <ScrollView style={styles.scrollView}>
          <PageTitle title="Feed" />
          <StoriesBar stories={stories} />
          {feed.map((feedItem, ind) => (
            <FeedCard key={ind} item={feedItem} />
          ))}
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
});

export default Home;
