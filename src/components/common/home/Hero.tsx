import { StyleSheet, View } from "react-native";
import React from "react";
import { Logo } from "@/src/components/common/Logo";
import HeroBaseLine from "@/assets/svg/HeroBaseLine.svg";
import HeroBackground from "@/assets/svg/HeroBackground.svg";
import HomeRelax from "@/assets/svg/HomeRelax.svg";

export default function Hero() {
  return (
    <View style={styles.container}>
     
      <HeroBackground style={styles.background} />
      <View style={styles.logoWrapper}>
        <Logo />
      </View>

      <View style={styles.imageWrapper}>
        <HomeRelax />
      </View>

      <HeroBaseLine style={styles.baseLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: 420,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  logoWrapper: {
    position: "absolute",
    top: 50,
    alignSelf: "center",
  },
  imageWrapper: {
    position: "absolute",
    top: 160,
    alignSelf: "center",
  },
  baseLine: {
    position: "absolute",
    top: 433,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
