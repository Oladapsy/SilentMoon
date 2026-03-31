import { StyleSheet, View, FlatList } from "react-native";
import React, { useState } from "react";
import CourseDetailsHeader from "@/src/components/common/courseDetails/CourseDetailsHeader";
import MySafeAreaView from "@/src/components/common/MySafeAreaView";
import ActionText from "@/src/components/common/ActionText";
import { colors } from "@/src/theme/colors";
import IconWithText from "@/src/components/common/courseDetails/IconWithText";
import RedHeart from "@/assets/svg/tabs/common/courseDetails/redLove.svg";
import HeadsetIcon from "@/assets/svg/tabs/common/courseDetails/headPjhone.svg";
import { fontFamily } from "@/src/theme/fontFamily";
// to display the narrator
// the narrator data
import { maleNarrators, femaleNarrators } from "@/src/data/narratorData";
import NarratorTabs from "../components/common/courseDetails/NarratorTabs";
import NarratorItem from "../components/common/courseDetails/NarratorItem";

import { useRouter } from "expo-router";

export default function CourseDetails() {
  const [voice, setVoice] = useState<"male" | "female">("male");
  const [activeId, setActiveId] = useState<number>(1);

  // if (voice === "male") {
  //   const data = maleNarrators
  // } else {
  //   const data = femaleNarrators
  // }
  const data = voice === "male" ? maleNarrators : femaleNarrators;

  // navigation
  const router = useRouter();

  return (
    <MySafeAreaView>
      <CourseDetailsHeader />
      <View style={styles.textWrapper}>
        <ActionText
          main="Happy Morning"
          mainColor={colors.primary}
          mainSize={30}
        />
        <View style={styles.courseText}>
          <ActionText
            main="COURSE"
            mainColor={colors.secondary}
            mainSize={13}
          />
        </View>

        {/* the text part */}
        <View>
          <ActionText
            main="Ease the mind into a restful night's sleep with these deep, amblent tones."
            mainColor={colors.secondary}
            mainSize={16}
            fontFamily={fontFamily.light}
          />
        </View>

        {/* icon with text */}
        <View style={styles.iconWithTextWrapper}>
          <IconWithText text="24.234 Favorites" icon={<RedHeart />} />
          <IconWithText text="34.234 Listening" icon={<HeadsetIcon />} />
        </View>

        {/* Text */}
        <View style={styles.narratorText}>
          <ActionText
            main="Pick a Narrator"
            mainSize={20}
            mainColor={colors.primary}
          />
        </View>
      </View>

      {/* the male and female voice cards */}
      <NarratorTabs selected={voice} onSelect={setVoice} />

      {/* flatlist */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <NarratorItem
            title={item.title}
            duration={item.duration}
            isActive={activeId === item.id}
            onPress={() => {
              setActiveId(item.id);
              router.push({
                pathname: "/musicPlayer",
                params: {
                  title: item.title,
                  subtitle: item.subtitle,
                  duration: item.newDuration,
                },
              });
            }}
          />
        )}
      />
    </MySafeAreaView>
  );
}

const styles = StyleSheet.create({
  textWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  courseText: {
    marginTop: 10,
    marginBottom: 12,
  },
  iconWithTextWrapper: {
    flexDirection: "row",
    gap: 40,
    marginVertical: 20,
  },
  narratorText: {
    marginBottom: 20,
  },
});
