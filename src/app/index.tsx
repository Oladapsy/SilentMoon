import { View, StyleSheet } from "react-native";
import MySafeAreaView from "@/src/components/common/MySafeAreaView";
import Hero from "@/src/components/common/home/Hero";
import { colors } from "@/src/theme/colors";
import HomeText from "@/src/components/common/home/HomeText";
import MainButton from "@/src/components/common/MainButton";
import ActionText from "@/src/components/common/ActionText";
import DashLine from "@/src/components/common/BottomDash";

export default function WelcomeScreen() {
  return (
    <MySafeAreaView color={colors.layer}>
      <View style={styles.container}>
        <View style={styles.heroWrapper}>
          <Hero />
        </View>

        <View style={styles.content}>
          <View style={styles.homeTextWrapper}>
            <HomeText
              title="We are what we do"
              description="Thousand of people are usign silent moon for smalls meditation "
            />
          </View>

          <View style={styles.mainButton}>
            <MainButton text="SIGN UP" route="/sign-up" />
          </View>
          <ActionText
            main="ALREADY HAVE AN ACCOUNT?"
            sub="LOG IN"
            route="/sign-in"
          />
        </View>

        <DashLine />
      </View>
    </MySafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  content: {
    flex: 1, // takes remaining space between Hero and BottomDash
    alignItems: "center",
    justifyContent: "center", // centers text + button in the white area
    width: "100%",
    paddingHorizontal: 10,
  },
  heroWrapper: {
    width: "100%",
    marginTop: -60,
  },
  homeTextWrapper: {
    marginVertical: 45,
  },
  dashWrapper: {
    paddingBottom: 0,
  },
  mainButton: {
    marginHorizontal: 12,
  }
});
