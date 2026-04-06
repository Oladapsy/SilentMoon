import { StyleSheet, View } from "react-native";
import CourseDetailsHeader from "@/src/components/common/courseDetails/CourseDetailsHeader";
import MySafeAreaView from "@/src/components/common/MySafeAreaView";
import ActionText from "@/src/components/common/ActionText";
import { darkColors, lightColors } from "@/src/theme/colors";
import IconWithText from "@/src/components/common/courseDetails/IconWithText";
import RedHeart from "@/assets/svg/tabs/common/courseDetails/redLove.svg";
import HeadsetIcon from "@/assets/svg/tabs/common/courseDetails/headPjhone.svg";
import { fontFamily } from "@/src/theme/fontFamily";
import HeaderBg from "@/assets/svg/music/playMusicBg.svg";
import Elipse from "@/assets/svg/tabs/common/ellipse.svg";
import NightMusicCard from "../components/tabs/sleep/NightMusicCard";
import { router, useLocalSearchParams } from "expo-router";
import SleepMusic1 from "@/assets/svg/tabs/sleep/sleepMusic1.svg";
import SleepMusic2 from "@/assets/svg/tabs/sleep/sleepMusic2.svg";
import MainButton from "../components/common/MainButton";

export default function SleepDetails() {
  const { title } = useLocalSearchParams<{ title: string }>();
  return (
    <MySafeAreaView color={darkColors.musicNavBg}>
      <View style={styles.HEADNAV}>
        <CourseDetailsHeader image={<HeaderBg />} />
      </View>
      <View style={styles.textWrapper}>
        <ActionText
          main={title || "Music Title"}
          mainColor={darkColors.primary}
          mainSize={30}
        />
        <View style={styles.bottomTextWrapper}>
          <ActionText
            main="45 MIN"
            mainColor={lightColors.sleepMusicCard1}
            fontFamily={fontFamily.normal}
            mainSize={11}
          />
          <Elipse color={lightColors.sleepMusicCard1} />
          <ActionText
            main="SLEEP MUSIC"
            mainSize={11}
            fontFamily={fontFamily.normal}
            mainColor={lightColors.sleepMusicCard1}
          />
        </View>

        {/* the text part */}
        <View>
          <ActionText
            main="Ease the mind into a restful night's sleep with these deep, amblent tones."
            mainColor={lightColors.secondary}
            mainSize={16}
            fontFamily={fontFamily.light}
          />
        </View>

        {/* icon with text */}
        <View style={styles.iconWithTextWrapper}>
          <IconWithText
            text="24.234 Favorites"
            icon={<RedHeart color={darkColors.primary} />}
          />
          <IconWithText
            text="34.234 Listening"
            icon={<HeadsetIcon color={darkColors.primary} />}
          />
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.relText}>
        <ActionText
          main="Related"
          mainSize={24}
          fontFamily={fontFamily.bold}
          mainColor={darkColors.primary}
        />
      </View>
      <View style={styles.lastCard}>
        <View>
          <NightMusicCard
            title="Moon Clouds"
            icon={<SleepMusic1 />}
            onPress={() =>
              router.push({
                pathname: "/sleepDetail",
                params: { title: "Moon Clouds" },
              })
            }
          />
        </View>
        <View>
          <NightMusicCard
            title="Sweet Sleep"
            icon={<SleepMusic2 />}
            onPress={() =>
              router.push({
                pathname: "/sleepDetail",
                params: { title: "Sweet Sleep" },
              })
            }
          />
        </View>
      </View>
      <View style={styles.lastButton}>
        <MainButton
          text="PLAY"
          route={{
            pathname: "/darkMusicPlayer",
            params: { title: title || "Music Title" },
          }}
        />
      </View>
    </MySafeAreaView>
  );
}

const styles = StyleSheet.create({
  HEADNAV: {},
  textWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    width: "80%",
  },
  bottomTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginVertical: 15,
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
  divider: {
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    borderBottomColor: lightColors.sleepMusicCard1,
  },
  relText: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 5,
  },
  lastCard: {
    flexDirection: "row",
    gap: 20,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  lastButton: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
});

// #FF84A2
// #7FD2F2
//#7FD2F2
//#7FD2F2
//#7FD2F2
