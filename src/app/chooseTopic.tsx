import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import MySafeAreaView from "@/src/components/common/MySafeAreaView";
import TopicBg from "@/assets/svg/topic/topicBg.svg";
import ActionText from "@/src/components/common/ActionText";
import { lightColors } from "@/src/theme/colors";
import TopicCard from "@/src/components/common/topic/TopicCard";
import MainButton from "@/src/components/common/MainButton";

// the image SVGs for the cards
// import your SVGs
import ReduceStressSvg from "@/assets/svg/topic/ReduceStress.svg";
import ImprovePerformanceSvg from "@/assets/svg/topic/ImprovePerformance.svg";
import IncreaseHappinessSvg from "@/assets/svg/topic/IncreaseHappiness.svg";
import ReduceAnxietySvg from "@/assets/svg/topic/ReduceAnxiety.svg";
import PersonalGrowthSvg from "@/assets/svg/topic/PersonalGrowth.svg";
import BetterSleepSvg from "@/assets/svg/topic/BetterSleep.svg";

// the data for card
const LEFT_COLUMN = [
  {
    id: "1",
    title: "Reduce Stress",
    color: lightColors.card1,
    image: <ReduceStressSvg />,
    height: 210, // taller card
    textColor: lightColors.welcomeText,
    textMarginTop: 20,
  },
  {
    id: "3",
    title: "Increase\nHappiness",
    color: lightColors.card3,
    image: <IncreaseHappinessSvg />,
    height: 167, // shorter card
    textColor: lightColors.primary,
    textMarginTop: 0,
  },
  {
    id: "5",
    title: "Personal\nGrowth",
    color: lightColors.card5,
    image: <PersonalGrowthSvg />,
    height: 210,
    textColor: lightColors.welcomeText,
    textMarginTop: 20,
  },
  {
    id: "7",
    title: "Improve\nPerformance",
    color: lightColors.card2,
    image: <ImprovePerformanceSvg />,
    height: 167,
    textColor: lightColors.cardText2,
    textMarginTop: 5,
  },
  {
    id: "8",
    title: "Reduce Anxiety",
    color: lightColors.card4,
    image: <ReduceAnxietySvg />,
    height: 210,
    textMarginTop: 28,
  },
  {
    id: "9",
    title: "Better Sleep",
    color: lightColors.card6,
    image: <BetterSleepSvg />,
    height: 167,
    textColor: lightColors.navBorder,
    textMarginTop: 28,
  },
];

const RIGHT_COLUMN = [
  {
    id: "2",
    title: "Improve\nPerformance",
    color: lightColors.card2,
    image: <ImprovePerformanceSvg />,
    height: 167,
    textColor: lightColors.cardText2,
    textMarginTop: 5,
  },
  {
    id: "4",
    title: "Reduce Anxiety",
    color: lightColors.card4,
    image: <ReduceAnxietySvg />,
    height: 210,
    textMarginTop: 28,
  },
  {
    id: "6",
    title: "Better Sleep",
    color: lightColors.card6,
    image: <BetterSleepSvg />,
    height: 167,
    textColor: lightColors.navBorder,
    textMarginTop: 28,
  },
  {
    id: "8",
    title: "Reduce Stress",
    color: lightColors.card1,
    image: <ReduceStressSvg />,
    height: 210, // taller card
    textColor: lightColors.welcomeText,
    textMarginTop: 20,
  },
  {
    id: "10",
    title: "Increase\nHappiness",
    color: lightColors.card3,
    image: <IncreaseHappinessSvg />,
    height: 167, // shorter card
    textColor: lightColors.primary,
  },
  {
    id: "12",
    title: "Personal\nGrowth",
    color: lightColors.card5,
    image: <PersonalGrowthSvg />,
    height: 210,
    textColor: lightColors.welcomeText,
    textMarginTop: 20,
  },
];

export default function chooseTopic() {
  return (
    <MySafeAreaView>
      <ScrollView style={styles.scrollView}>
        {/* The background image */}
        <View style={styles.topicBg}>
          <TopicBg />
        </View>

        {/* The text */}
        <View style={styles.text}>
          <ActionText
            main="What Brings you"
            mainSize={28}
            mainColor={lightColors.primary}
            fontFamily="HelveticaNeue-Bold"
          />
          <View style={styles.textMoon}>
            <ActionText
              main="to Silent Moon?"
              mainSize={28}
              mainColor={lightColors.primary}
              fontFamily="HelveticaNeue-light"
            />
          </View>
          <ActionText
            main="choose a topic to focuse on:"
            mainSize={20}
            fontFamily="HelveticaNeue-light"
          />
        </View>

        {/* The topics card in left and right using mansory style */}
        <View style={styles.grid}>
          {/* the left side  */}
          <View>
            {LEFT_COLUMN.map((topic) => (
              <TopicCard
                key={topic.id}
                title={topic.title}
                color={topic.color}
                image={topic.image}
                height={topic.height}
                textColor={topic.textColor}
                textMarginTop={topic.textMarginTop}
              />
            ))}
          </View>
          {/* The right side */}
          <View>
            {RIGHT_COLUMN.map((topic) => (
              <TopicCard
                key={topic.id}
                title={topic.title}
                color={topic.color}
                image={topic.image}
                height={topic.height}
                textColor={topic.textColor}
                textMarginTop={topic.textMarginTop}
              />
            ))}
          </View>
        </View>

        <View style={styles.endButton}>
          <MainButton text="NEXT" route="/reminders" />
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
    marginBottom: 25,
  },
  textMoon: {
    marginTop: 4,
    marginBottom: 8,
  },

  //card
  grid: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 18,
  },

  //end button
  endButton: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});
