import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import * as Font from "expo-font";
import customFonts from "@utils/customFonts";

import store from "./src/redux/createStore";
import { Provider } from "react-redux";
import NavigationContainer from "./src/navigation/NavigationContainer";

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
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  );
}
