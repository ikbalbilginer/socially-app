import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Messages, MessageDetail } from "@screens";
import TabNavigation from "./TabNavigation";

const AppStack = createNativeStackNavigator();

const AppStackNames = {
  TabNavigation: "TabNavigation",
  Messages: "Messages",
  MessageDetail: "MessageDetail",
};

function AppNavigation({ user }) {
  return (
    <AppStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="TabNavigation"
    >
      <AppStack.Screen
        options={{ headerShown: false }}
        name={AppStackNames.TabNavigation}
        component={TabNavigation}
      />
      <AppStack.Screen
        name={AppStackNames.Messages}
        component={Messages}
        options={{
          headerTitle: "Messages",
        }}
      />
      <AppStack.Screen
        name={AppStackNames.MessageDetail}
        component={MessageDetail}
        options={
          {
            // headerS: "MessageDetail",
          }
        }
      />
    </AppStack.Navigator>
  );
}

export default AppNavigation;
