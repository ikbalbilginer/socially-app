import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import IntroScreen from "@screens/IntroScreen";

function _NavigationContainer() {
  const { user, loading } = useSelector(({ auth }) => ({
    user: auth.user,
    loading: auth.loading,
  }));

  return (
    <NavigationContainer>
      {!user ? <IntroScreen /> : <AppStack />}
    </NavigationContainer>
  );
}

export default _NavigationContainer;
