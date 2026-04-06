import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import MySafeAreaView from "@/src/components/common/MySafeAreaView";
import { Logo } from "@/src/components/common/Logo";
import ActionText from "@/src/components/common/ActionText";
import { lightColors } from "@/src/theme/colors";
import { fontFamily } from "@/src/theme/fontFamily";
import Daily from "@/src/components/common/Daily";
import HomeDailyIcon from "@/assets/svg/tabs/common/daily.svg";
import HomeCard from "@/src/components/tabs/home/HomeCard";
import BasicIcon from "@/assets/svg/tabs/common/basic.svg";
import RelaxationIcon from "@/assets/svg/tabs/common/relaxation.svg";
import RecommendCard from "@/src/components/tabs/home/RecommendCard";
// the icons for the last card
import Recom1 from "@/assets/svg/tabs/home/recom1.svg";
import Recom2 from "@/assets/svg/tabs/home/recom2.svg";

interface RecommendDataType {
  id: number;
  mainTitle: string;
  subTitle: string;
  time: string;
  backgroundColor: string;
  icon: React.ReactNode;
}

const RecommendData: RecommendDataType[] = [
  {
    id: 1,
    mainTitle: "Focus",
    subTitle: "MEDITATION",
    time: "3-10 MIN",
    backgroundColor: lightColors.recomCard1,
    icon: <Recom1 />,
  },
  {
    id: 2,
    mainTitle: "Happiness",
    subTitle: "MEDITATION",
    time: "3-10 MIN",
    backgroundColor: lightColors.recomCard2,
    icon: <Recom2 />,
  },
  {
    id: 3,
    mainTitle: "Focus",
    subTitle: "MEDITATION",
    time: "3-10 MIN",
    backgroundColor: lightColors.recomCard1,
    icon: <Recom1 />,
  },
  {
    id: 4,
    mainTitle: "Happiness",
    subTitle: "MEDITATION",
    time: "3-10 MIN",
    backgroundColor: lightColors.recomCard2,
    icon: <Recom2 />,
  },
  {
    id: 5,
    mainTitle: "Focus",
    subTitle: "MEDITATION",
    time: "3-10 MIN",
    backgroundColor: lightColors.recomCard1,
    icon: <Recom1 />,
  },
  {
    id: 6,
    mainTitle: "Happiness",
    subTitle: "MEDITATION",
    time: "3-10 MIN",
    backgroundColor: lightColors.recomCard2,
    icon: <Recom2 />,
  },
  {
    id: 7,
    mainTitle: "Focus",
    subTitle: "MEDITATION",
    time: "3-10 MIN",
    backgroundColor: lightColors.recomCard1,
    icon: <Recom1 />,
  },
  {
    id: 8,
    mainTitle: "Happiness",
    subTitle: "MEDITATION",
    time: "3-10 MIN",
    backgroundColor: lightColors.recomCard2,
    icon: <Recom2 />,
  },
];

export default function Home() {
  return (
    <MySafeAreaView>
      <View style={styles.container}>
        {/* Top content wrapper */}
        <View style={styles.topContentWrapper}>
          {/* the logo view */}

          <View style={styles.logo}>
            <Logo />
          </View>

          {/* Home text View */}
          <View style={styles.text}>
            <ActionText
              main="Good Morning, Afsar"
              mainSize={28}
              mainColor={lightColors.primary}
              fontFamily={fontFamily.bold}
            />
            {/* the smaller text */}
            <View style={styles.smallText}>
              <ActionText
                main="We Wish you have a good day"
                mainSize={20}
                mainColor={lightColors.mainText}
                fontFamily={fontFamily.light}
              />
            </View>
          </View>

          {/* cards */}
          <View style={styles.homeCard}>
            <HomeCard
              backgroundColor={lightColors.tetiary}
              icon={<BasicIcon />}
              text1="Basics"
              text2="COURSE"
              text3="3-10 MIN"
              text1Color={lightColors.welcomeText}
              text2Color={lightColors.welcomeText}
              text3Color={lightColors.tabCard1text3}
              text4Color={lightColors.primary}
              text4Bg={lightColors.navBorder}
            />
            <HomeCard
              backgroundColor={lightColors.tabCard2}
              icon={<RelaxationIcon />}
              text1="Relaxation"
              text2="MUSIC"
              text3="3-10 MIN"
              text1Color={lightColors.primary}
              text2Color={lightColors.tabCard2text}
              text3Color={lightColors.tabCard2text}
              text4Color={lightColors.activeText}
              text4Bg={lightColors.primary}
            />
          </View>

          {/* Daily */}
          <View>
            <Daily
              icon={<HomeDailyIcon />}
              playBg="white"
              playIconColor={lightColors.primary}
              titleColor="white"
              backgroundColor={lightColors.dailyBg}
              title="Daily Thought"
              subTitle="MEDITATION"
              minorTitle="3-10 MIN"
            />
          </View>
        </View>
      </View>
      {/* Recommended for you in a flatlist*/}
      <View style={styles.meditationSlide}>
        <View style={styles.meditationText}>
          <ActionText
            main="Recomended for you"
            mainColor={lightColors.primary}
            mainSize={24}
          />
        </View>
        <FlatList
          data={RecommendData}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            gap: 20,
          }}
          renderItem={({ item }) => (
            <View>
              <RecommendCard
                mainTitle={item.mainTitle}
                subTitle={item.subTitle}
                time={item.time}
                backgroundColor={item.backgroundColor}
                icon={item.icon}
              />
            </View>
          )}
        />
      </View>
    </MySafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  topContentWrapper: {
    marginHorizontal: 20,
  },
  logo: {
    alignItems: "center",
  },
  text: {
    marginTop: 35,
  },
  smallText: {
    marginTop: 5,
  },
  homeCard: {
    flexDirection: "row",
    gap: 20,
  },
  meditationSlide: {
    marginTop: 15,
  },
  meditationText: {
    marginBottom: 10,
    marginLeft: 20,
  },
});
