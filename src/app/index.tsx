import { View, StyleSheet } from "react-native";
import MySafeAreaView from "../components/common/MySafeAreaView";
import Hero from "@/src/components/common/home/Hero";
import { colors } from "@/src/theme/colors";
import HomeText from "@/src/components/common/home/HomeText";
import MainButton from "@/src/components/common/MainButton";
import ActionText from "@/src/components/common/ActionText";
import BottomDash from "../components/common/BottomDash";

export default function WelcomeScreen() {
  return (
    <MySafeAreaView color={colors.layer}>
      <View style={styles.container}>
        <Hero />
        <HomeText
          title="We are what we do"
          description="Thousand of people are usign silent moon for smalls meditation "
        />

        <MainButton text="SIGN UP" onPress={() => {}} />
        <ActionText main="ALREADY HAVE AN ACCOUNT?" sub="LOG IN" />
        <BottomDash />
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
  text: {
    color: "red",
  },
});
