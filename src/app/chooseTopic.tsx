import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import MySafeAreaView from "@/src/components/common/MySafeAreaView";
import TopicBg from "@/assets/svg/topic/topicBg.svg";
import ActionText from "@/src/components/common/ActionText";
import { colors } from "@/src/theme/colors";

export default function chooseTopic() {
  return (
    <MySafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.text}>
          <ActionText
            main="What Brings you"
            mainSize={28}
            mainColor={colors.primary}
            fontFamily="HelveticaNeue-Bold"
          />
          <View style={styles.textMoon}>
            <ActionText
              main="to Silent Moon?"
              mainSize={28}
              mainColor={colors.primary}
              fontFamily="HelveticaNeue-light"
            />
          </View>
          <ActionText
            main="choose a topic to focuse on:"
            mainSize={20}
            fontFamily="HelveticaNeue-light"
          />
        </View>

        {/* The topics */}
        <View></View>

        <View style={styles.topicBg}>
          <TopicBg />
        </View>
      </ScrollView>
    </MySafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
  },
  topicBg: {
    position: "absolute",
    top: 60,
    zIndex: -1,
  },
  text: {
    marginHorizontal: 20,
    marginTop: 35,
  },
  textMoon: {
    marginTop: 4,
    marginBottom: 8,
  },
});
