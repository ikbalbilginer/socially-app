import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { wp, hp } from "@utils/responsive.js";
import Swiper from "react-native-swiper";
import { useDispatch } from "react-redux";
import { Text } from "@components";
import hero1 from "@assets/intro/hero1.png";
import hero2 from "@assets/intro/hero2.png";
import nextbg from "@assets/nextbg.png";
import nextbg2 from "@assets/next2.png";
import bg from "@assets/bg.png";
import Feather from "@expo/vector-icons/Feather";
import { startLogin } from "@redux/Auth/auth.actions.js";

const introImages = {
  0: hero1,
  1: hero2,
  2: hero1,
};

const IntroScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [state, setState] = useState(0);

  const onIndexChanged = (index) => {
    setState(index);
  };

  const myRef = React.useRef();

  const swipeToNext = () => {
    if (state !== 2) {
      myRef.current.scrollBy(1);
    } else {
      dispatch(startLogin());
    }
  };

  return (
    <ImageBackground source={bg} style={styles.safeArea}>
      <View style={styles.titleContainer}>
        <Text style={styles.welcome}>Welcome to</Text>
        <Text style={styles.socially} weight={"bold"}>
          Socially
        </Text>
      </View>
      <View style={{ height: hp(280), marginBottom: 20 }}>
        <Swiper
          style={{
            marginBottom: 0,
          }}
          showsPagination={false}
          loop={false}
          showsButtons={false}
          bounces={true}
          onIndexChanged={onIndexChanged}
          ref={myRef}
        >
          {["0", "1", "2"].map((introNo) => {
            return (
              <View key={introNo} style={styles.heroContainer}>
                <Image style={styles.hero} source={introImages[introNo]} />
              </View>
            );
          })}
        </Swiper>
      </View>
      <View style={styles.dotContainer}>
        {["0", "1", "2"].map((dot) => (
          <View
            key={dot}
            style={
              dot === state.toString()
                ? { ...styles.dot, backgroundColor: "black" }
                : { ...styles.dot, borderWidth: 2 }
            }
          ></View>
        ))}
      </View>
      <View style={styles.bottomContainer}>
        <View style={{ flex: 1 }}></View>
        <ImageBackground
          resizeMethod="cover"
          source={state == 1 ? nextbg2 : nextbg}
          style={styles.nextbg}
        >
          <TouchableOpacity onPress={swipeToNext} style={styles.nextContainer}>
            <Text
              style={{
                color: state === 1 ? "black" : "white",
                fontSize: 22,
                marginRight: 8,
              }}
            >
              {"Next"}
            </Text>
            <Feather
              name="arrow-right"
              size={28}
              color={state === 1 ? "black" : "white"}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  nextbg: {
    alignItems: "center",
    justifyContent: "center",
    height: hp(246),
    width: hp(256),
  },
  titleContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: hp(40),
    flex: 1,
    paddingTop: 30,
  },
  safeArea: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
  },
  welcome: {
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: 0, height: 5 },
    textShadowRadius: 4,
  },
  socially: {
    fontSize: 39,
    textShadowColor: "rgba(0, 0, 0, 0.6)",
    textShadowOffset: { width: 0, height: 5 },
    textShadowRadius: 4,
  },
  hero: {
    height: hp(256),
    resizeMode: "contain",
  },
  heroContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  dotContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: "auto",
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 15,
    margin: 5,
  },
  activeDot: {
    width: 15,
    height: 15,
    borderRadius: 15,
    margin: 5,
  },
  bottomContainer: {
    flexDirection: "row",
    // marginTop: "auto",
    alignItems: "flex-end",
    height: hp(260),
  },
  nextContainer: {
    marginLeft: "34%",
    marginTop: "18%",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default IntroScreen;
