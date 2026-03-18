import { View, StyleSheet } from "react-native";
import React from "react";
import MySafeAreaView from "@/src/components/common/MySafeAreaView";
import SignHero from "@/src/components/common/signIn/SignHero";
import ActionText from "../components/common/ActionText";
import DashLine from "@/src/components/common/BottomDash";
import SignUpForm from "@/src/components/common/signup/SignUpForm";

export default function SignUp() {
  return (
    <MySafeAreaView color="white">
      <View style={styles.signIn}>
        <SignHero text="Create your account" />
        <View style={styles.content}>
          <ActionText main="OR LOG IN WITH EMAIL" />
          {/* login -form */}
          <View style={styles.form}>
            <SignUpForm />
          </View>

          <DashLine />
        </View>
      </View>
    </MySafeAreaView>
  );
}

const styles = StyleSheet.create({
  signIn: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 20,
  },
  content: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  form: {
    marginTop: 25,
    width: "100%",
    marginBottom: 25,
  },
});
