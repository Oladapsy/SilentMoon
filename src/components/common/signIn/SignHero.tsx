import { View, Text, StyleSheet } from "react-native";
import React from "react";
import HeadNavigation from "@/src/components/common/HeadNavigation";
import MainButton from "@/src/components/common/MainButton";
import FacebookIcon from "@/assets/svg/facebook.svg";
import GoogleIcon from "@/assets/svg/google.svg";
import { lightColors } from "@/src/theme/colors";
import SignInbg1 from "@/assets/svg/signin/signInBg1.svg";
import SignInbg2 from "@/assets/svg/signin/signInBg2.svg";
import SignInbg3 from "@/assets/svg/signin/signInBg3.svg";
import SignInbg4 from "@/assets/svg/signin/signInBg4.svg";

interface Props {
  text?: string;
}
const SignHero = ({ text = "Welcome Back!" }: Props) => {
  return (
    <View style={styles.container}>
      {/* Background svgs */}
      <SignInbg1 style={[styles.bgIcon, { top: -5, left: 0 }]} />
      <SignInbg2 style={[styles.bgIcon, { top: -5, right: 0 }]} />
      <SignInbg3 style={[styles.bgIcon, { bottom: 80, left: 0 }]} />
      <SignInbg4 style={[styles.bgIcon, { bottom: 70, right: 0 }]} />

      <HeadNavigation style={styles.headNav} />

      <Text style={styles.text}>{text}</Text>

      <MainButton text="CONTINUE WITH FACEBOOK" icon={<FacebookIcon />} />
      <MainButton
        text="CONTINUE WITH GOOGLE"
        icon={<GoogleIcon />}
        color={lightColors.navBorder}
        textStyle={{ color: lightColors.primary }}
      />
    </View>
  );
};

export default SignHero;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 28,
    fontFamily: "HelveticaNeue-Bold",
    marginTop: 45,
    marginBottom: 25,
  },
  bgIcon: {
    position: "absolute",
    width: 80,
    height: 80,
  },
  headNav: {
    alignSelf: "flex-start",
    marginTop: 20,
    marginLeft: 0,
  },
});
