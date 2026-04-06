import { StyleSheet, View } from "react-native";
import { Tabs } from "expo-router";
import HomeIcon from "@/assets/svg/tabs/homeTab.svg";
import MeditateIcon from "@/assets/svg/tabs/meditateTab.svg";
import MusicIcon from "@/assets/svg/tabs/musicTab.svg";
import ProfileIcon from "@/assets/svg/tabs/profileTab.svg";
import SleepIcon from "@/assets/svg/tabs/sleepTab.svg";
import { lightColors } from "@/src/theme/colors";
import { fontFamily } from "@/src/theme/fontFamily";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: lightColors.tetiary,
        tabBarInactiveTintColor: lightColors.iconInactive,
        tabBarLabelStyle: {
          fontSize: 13,
          fontFamily: fontFamily.normal,
          fontWeight: "400",
          marginTop: 13,
        },
        tabBarStyle: {
          height: 100,
          backgroundColor: "white",
          paddingTop: 10,
          paddingBottom: 12,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <View
              style={[styles.iconWrapper, focused && styles.activeIconWrapper]}
            >
              <HomeIcon
                width={22}
                height={22}
                color={focused ? "white" : lightColors.iconInactive}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="sleep"
        options={{
          title: "Sleep",
          tabBarIcon: ({ focused }) => (
            <View
              style={[styles.iconWrapper, focused && styles.activeIconWrapper]}
            >
              <SleepIcon
                width={22}
                height={22}
                color={focused ? "white" : lightColors.iconInactive}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="meditate"
        options={{
          title: "Meditate",
          tabBarIcon: ({ focused }) => (
            <View
              style={[styles.iconWrapper, focused && styles.activeIconWrapper]}
            >
              <MeditateIcon
                width={22}
                height={22}
                color={focused ? "white" : lightColors.iconInactive}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="music"
        options={{
          title: "Music",
          tabBarIcon: ({ focused }) => (
            <View
              style={[styles.iconWrapper, focused && styles.activeIconWrapper]}
            >
              <MusicIcon
                width={22}
                height={22}
                color={focused ? "white" : lightColors.iconInactive}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <View
              style={[styles.iconWrapper, focused && styles.activeIconWrapper]}
            >
              <ProfileIcon
                width={22}
                height={22}
                color={focused ? "white" : lightColors.iconInactive}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
const styles = StyleSheet.create({
  iconWrapper: {
    width: 48,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
  },
  activeIconWrapper: {
    backgroundColor: lightColors.tetiary,
  },
});
