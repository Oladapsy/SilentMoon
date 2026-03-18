import { View, StyleSheet } from "react-native";
import React from "react";
// import { colors } from "@/src/theme/colors";
import MySafeAreaView from "@/src/components/common/MySafeAreaView";
import SignupHero from "@/src/components/common/signup/SigninHero";
import ActionText from "../components/common/ActionText";

export default function SignIn() {
  return (
    <MySafeAreaView color="white">
      <View style={styles.signup}>
        <SignupHero />
        <View style={styles.content}>
          <ActionText main="OR LOG IN WITH EMAIL" />
          {/* login -form */}
        </View>
      </View>
    </MySafeAreaView>
  );
}

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
