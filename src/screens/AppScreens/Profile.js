import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@components";
import profbg from "@assets/profbg.png";
import { Feather } from "@expo/vector-icons";
import { hp, wp } from "@utils/responsive";
import { useSelector } from "react-redux";
const screenWidth = Dimensions.get("window").width;

const Home = ({ navigation }) => {
  const [viewState, setViewState] = useState();

  const { user, loading } = useSelector(({ auth }) => ({
    user: auth.user,
    loading: auth.loading,
  }));

  useEffect(() => {
    const leftP = user.posts.filter((u, i) => i % 2 === 0);
    const rightP = user.posts.filter((u, i) => i % 2 > 0);

    setViewState({
      left: leftP,
      right: rightP,
    });
  }, [user.posts]);

  return (
    <ImageBackground resizeMode="cover" style={{ flex: 1 }} source={profbg}>
      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        {/* <CustomHeader /> */}
        <ScrollView style={styles.scrollView}>
          <View style={styles.infoContainer}>
            <Image
              source={profbg}
              style={{ width: 100, height: 100, marginBottom: 16 }}
            />
            <Text style={styles.statTxt} weight="bold">
              {user.username}
            </Text>
            <Text style={styles.statTitle}>{user.slug}</Text>
          </View>
          <View style={styles.statsContainer}>
            <View style={styles.statCol}>
              <Text style={styles.statTitle}>Posts</Text>
              <Text style={styles.statTxt} weight="bold">
                {user.posts.length}
              </Text>
            </View>
            <View style={styles.statCol}>
              <Text style={styles.statTitle}>Followers</Text>
              <Text style={styles.statTxt} weight="bold">
                {user.followers}
              </Text>
            </View>
            <View style={styles.statCol}>
              <Text style={styles.statTitle}>Follows</Text>
              <Text style={styles.statTxt} weight="bold">
                {user.follows}
              </Text>
            </View>
          </View>
          {!!user.posts?.length && (
            <View style={styles.flowC}>
              <View style={styles.flowCol}>
                <Feather
                  style={{ marginBottom: 20 }}
                  name="image"
                  size={40}
                  color="black"
                />
                {viewState?.left.map((post, index) => {
                  const postHeight = index % 2 == 0 ? 220 : 135;

                  return (
                    <Image
                      key={index + "a"}
                      source={post}
                      style={{ ...styles.post, height: postHeight }}
                    />
                  );
                })}
              </View>
              <View style={styles.flowCol}>
                <Feather
                  style={{ marginBottom: 20 }}
                  name="bookmark"
                  size={40}
                  color="black"
                />
                {viewState?.right.map((post, index) => {
                  const postHeight = index % 2 !== 0 ? 220 : 135;

                  return (
                    <Image
                      key={index + "b"}
                      source={post}
                      style={{ ...styles.post, height: postHeight }}
                    />
                  );
                })}
              </View>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  post: {
    width: screenWidth / 2 - wp(32),
    height: hp(220),
    borderRadius: 20,
    marginVertical: hp(7),
  },
  flowC: {
    flexDirection: "row",
    marginTop: hp(45),
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  flowCol: {
    flexDirection: "column",
    alignItems: "center",
  },
  statCol: {
    alignItems: "center",
  },
  statTitle: {
    fontSize: 18,
  },
  statTxt: {
    fontSize: 25,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  infoContainer: {
    height: hp(220),
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: wp(25),
    marginTop: hp(80),
  },
  safeArea: {
    flex: 1,
  },
});

export default Home;
