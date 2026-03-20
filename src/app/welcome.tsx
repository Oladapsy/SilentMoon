import { View, StyleSheet } from "react-native";
import React from "react";
import { colors } from "@/src/theme/colors";
import MySafeAreaView from "@/src/components/common/MySafeAreaView";
import { Logo } from "@/src/components/common/Logo";
import ActionText from "@/src/components/common/ActionText";
import WelcomeImage from "@/assets/svg/welcome/welcomeImage.svg";
import WelcomeBgSVg from "@/assets/svg/welcome/welcomeBack.svg";
import MainButton from "@/src/components/common/MainButton";
import DashLine from "@/src/components/common/BottomDash";
import { useLocalSearchParams } from "expo-router";

export default function Welcome() {
  const { name } = useLocalSearchParams<{
    name?: string;
  }>();

  return (
    <MySafeAreaView color={colors.tetiary}>
      <View style={styles.container}>
        <Logo color="white" />

        <View style={styles.mainText}>
          <ActionText
            main={`Hi ${name ?? "Afsar"}, Welcome`}
            mainColor={colors.welcomeText}
            mainSize={30}
            fontFamily="HelveticaNeue-Heavy"
          />
          <ActionText
            main="to Silent Moon"
            mainColor={colors.welcomeText}
            mainSize={30}
            fontFamily="HelveticaNeue-Light"
          />
          <View style={styles.smallText}>
            <ActionText
              main="Explore the app, Find some peace of mind to prepare for meditation."
              mainColor={colors.navBorder}
              mainSize={16}
              fontFamily="HelveticaNeue-Light"
              textAlign="center"
              lineHeight={24}
            />
          </View>

          {/* Ellipse stacked */}
          <View style={styles.ellipseContainer}>
            <WelcomeBgSVg />
          </View>

          {/* Image first */}
          <WelcomeImage />
        </View>
        {/* main action button */}
        <View style={styles.actionBtn}>
          <MainButton
            text="GET STARTED"
            color={colors.navBorder}
            textStyle={{ color: colors.primary }}
            paddingVertical={23}
            route='/chooseTopic'
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
    alignContent: "center",
    alignItems: "center",
  },
  mainText: {
    marginTop: 85,
    alignItems: "center",
  },
  smallText: {
    alignSelf: "center",
    alignItems: "center",
    alignContent: "center",
    marginTop: 20,
    marginBottom: 80,
    marginHorizontal: 40,
  },
  ellipseContainer: {
    position: "absolute",
    top: "34.3%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: -1,
  },
  actionBtn: {
    marginTop: 40,
    marginHorizontal: 20,
    marginBottom: 30,
  },
});
