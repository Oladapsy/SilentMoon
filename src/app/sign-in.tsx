import { View, StyleSheet } from "react-native";
import React from "react";
import { colors } from "@/src/theme/colors";
import MySafeAreaView from "@/src/components/common/MySafeAreaView";
import SignHero from "@/src/components/common/signIn/SignHero";
import ActionText from "../components/common/ActionText";
import SignInForm from "@/src/components/common/signIn/SignInForm";
import DashLine from "@/src/components/common/BottomDash";

export default function SignIn() {
  return (
    <MySafeAreaView color="white">
      <View style={styles.signIn}>
        <SignHero />
        <View style={styles.content}>
          <ActionText main="OR LOG IN WITH EMAIL" />
          {/* login -form */}
          <View style={styles.form}>
            <SignInForm />
          </View>

          <View style={styles.fpassword}>
            <ActionText main="Forgot Password?" mainColor={colors.primary} />
          </View>

          <View style={styles.actionText}>
            <ActionText
              main="ALREADY HAVE AN ACCOUNT?"
              sub="SIGN UP"
              route="/sign-up"
            />
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
  },
  fpassword: {
    marginBottom: 65,
    marginTop: 10,
  },
  actionText: {
    marginBottom: 10,
  }
});
