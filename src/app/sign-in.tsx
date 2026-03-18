import { View, StyleSheet } from "react-native";
import React from "react";
// import { colors } from "@/src/theme/colors";
import MySafeAreaView from "@/src/components/common/MySafeAreaView";
import SignHero from "@/src/components/common/signIn/SignHero";
import ActionText from "../components/common/ActionText";
import SignInForm from "@/src/components/common/signIn/SignInForm";

export default function SignIn() {
  return (
    <MySafeAreaView color="white">
      <View style={styles.signIn}>
        <SignHero />
        <View style={styles.content}>
          <ActionText main="OR LOG IN WITH EMAIL" />
          {/* login -form */}
          <View style={{width: "90%"}}>
            <SignInForm />
          </View>
        </View>
      </View>
    </MySafeAreaView>
  );
}

const styles = StyleSheet.create({
  signIn: {
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
