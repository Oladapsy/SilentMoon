import Daily2Icon from "@/assets/svg/tabs/meditate/daily2Icon.svg";
import ActionText from "@/src/components/common/ActionText";
import Daily from "@/src/components/common/Daily";
import MySafeAreaView from "@/src/components/common/MySafeAreaView";
import { colors } from "@/src/theme/colors";
import { fontFamily } from "@/src/theme/fontFamily";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

// the last images as svg
import MedidateBg3 from "@/assets/svg/tabs/meditate/mediate3Bg.svg";
import MedidateBg1 from "@/assets/svg/tabs/meditate/meditate1Bg.svg";
import MedidateBg2 from "@/assets/svg/tabs/meditate/meditate2Bg.svg";
import MeditateCard from "@/src/components/tabs/meditate/MeditateCard";
import MediateFilter from "@/src/components/tabs/meditate/MediateFilter";

const LEFT_COLUMN = [
  {
    id: "1",
    title: "7 Days of Calm",
    image: <MedidateBg1 />,
    height: 210, // taller card
  },
  {
    id: "2",
    title: "Anxiet Release",
    image: <MedidateBg2 />,
    height: 167, // taller card
  },
];

const RIGHT_COLUMN = [
  {
    id: "1",
    title: "Anxiet Release",
    image: <MedidateBg2 />,
    height: 167, // taller card
  },
  {
    id: "2",
    title: "7 Days of Calm",
    image: <MedidateBg3 />,
    height: 210, // taller card
  },
];

export default function Meditate() {
  return (
    <MySafeAreaView>
      <View style={styles.headText}>
        <ActionText main="Meditate" mainSize={28} mainColor={colors.primary} />
        <View style={styles.minorText}>
          <ActionText
            main="we can learn how to recognize when our minds are doing their normal everyday acrobatics."
            mainColor={colors.iconInactive}
            mainSize={16}
            fontFamily={fontFamily.light}
            textAlign="center"
          />
        </View>
      </View>

      {/* the slider icons with text... */}
      <View style={styles.topFilter}>
        <MediateFilter />
      </View>

      {/* Daily Calm */}
      <View style={styles.daily}>
        <Daily
          backgroundColor={colors.daily2Bg}
          title="Daily Calm"
          titleColor={colors.primary}
          subTitle="APR 30"
          subTitleColor={colors.dailyText2}
          minorTitle="PAUSE PRACTICE"
          minorTitleColor={colors.dailyText2}
          playBg={colors.primary}
          icon={<Daily2Icon />}
          playIconColor={colors.iconPlay2}
        />
      </View>

      {/*  the last card */}
      <View>
        <ScrollView>
          <View style={styles.grid}>
            {/* left */}
            <View>
              {LEFT_COLUMN.map((card) => (
                <MeditateCard
                  key={card.id}
                  image={card.image}
                  title={card.title}
                  height={card.height}
                />
              ))}
            </View>

            {/* Right */}

            <View>
              {RIGHT_COLUMN.map((card) => (
                <MeditateCard
                  key={card.id}
                  image={card.image}
                  title={card.title}
                  height={card.height}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </MySafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  headText: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
    gap: 8,
  },
  minorText: {
    marginHorizontal: 30,
  },
  daily: {
    marginTop: 27,
    marginHorizontal: 15,
  },

  // grid the list images
  grid: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 18,
    marginTop: 15,
  },

  // top filter slider
  topFilter: {
    alignItems: "center",
    marginTop: 30,
  },
});
