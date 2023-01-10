import React from "react";
import { Text, View, FlatList } from "react-native";
import StoryIcon from "./StoryIcon";
import icon from "@assets/icon.png";
import { dummy_add } from "@assets/dummyStories";

function StoriesBar({ stories }) {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={[{ thumbnail: dummy_add }].concat(stories)}
      renderItem={({ item, index }) => {
        return <StoryIcon item={item} />;
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

export default StoriesBar;
