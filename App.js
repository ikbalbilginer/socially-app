import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as Font from "expo-font";
import customFonts from "@utils/customFonts";

import store from "./src/redux/createStore";
import { Provider } from "react-redux";
// import Dene from "@screens/Dene.js";
// import Ds from "@components/ds";
import IntroScreen from "@screens/IntroScreen.js";
import NavigationContainer from "./src/navigation/NavigationContainer";
// import AppStack from "./src/navigation/AppStack";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  async function _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  }

  useEffect(() => {
    _loadFontsAsync();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <Ds />
    //   <StatusBar style="auto" />
    // </View>
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
    // <AppStack />
    // <IntroScreen />
    // <Dene />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
