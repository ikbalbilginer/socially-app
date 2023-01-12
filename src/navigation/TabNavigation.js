import React from "react";
import { Image, View } from "react-native";
import { useDispatch } from "react-redux";
import colors from "@constants/colors.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Profile, Home } from "@screens";
import midbtn from "@assets/midbtn.png";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNames = {
  Profile: "Profile",
  Home: "Home",
};

function TabNavigation() {
  const dispatch = useDispatch();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="history"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "blacksmoke",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 0,
          elevation: 8,
          height: 75,
        },
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={22}
              color={focused ? colors.primary : "black"}
            />
          ),
          tabBarLabelStyle: { fontSize: 14 },
          tabBarLabel: "Ana Sayfa",
        }}
        name={TabNames.Home}
        component={Home}
      />
      <Tab.Screen
        name="Messages"
        component={View}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.push("Messages");
          },
        })}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="message-square"
              size={22}
              color={focused ? colors.primary : "black"}
            />
          ),
          tabBarLabelStyle: { fontSize: 14 },
          tabBarLabel: "Ana Sayfa",
        }}
      />
      <Tab.Screen
        name="New"
        component={View}
        options={({ navigation }) => ({
          tabBarButton: (props) => (
            <View
              style={{
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
                width: "20%",
              }}
            >
              <Image
                style={{ position: "absolute", top: -27, width: "100%" }}
                source={midbtn}
              />
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="Activity"
        component={View}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            e.preventDefault();
            console.log("dummy page");
          },
        })}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="heart"
              size={22}
              color={focused ? colors.primary : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={22}
              color={focused ? colors.primary : "black"}
            />
          ),
        }}
        name={TabNames.Profile}
        component={Profile}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
