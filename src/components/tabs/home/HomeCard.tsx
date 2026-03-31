import ActionText from "@/src/components/common/ActionText";
import { fontFamily } from "@/src/theme/fontFamily";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  backgroundColor: string;
  icon: React.ReactNode;
  text1: string;
  text2: string;
  text3: string;
  text1Color: string;
  text2Color: string;
  text3Color: string;
  text4Color: string;
  text4Bg: string;
}
export default function HomeCard({
  backgroundColor,
  icon,
  text1,
  text2,
  text3,
  text1Color,
  text2Color,
  text3Color,
  text4Color,
  text4Bg,
}: Props) {
  const router = useRouter();

  const handlePress = () => {
    router.push("/courseDetails");
  };

  return (
    <View style={[styles.conatiner, { backgroundColor }]}>
      <View style={styles.iconStyle}>{icon}</View>
      {/* Top text */}
      <View style={styles.topText}>
        <ActionText
          main={text1}
          mainSize={18}
          mainColor={text1Color}
          fontFamily={fontFamily.bold}
        />
        <ActionText
          main={text2}
          mainSize={11}
          mainColor={text2Color}
          fontFamily={fontFamily.light}
        />
      </View>

      {/* Bottom Text */}
      <View style={styles.bottomText}>
        <ActionText
          main={text3}
          mainSize={11}
          mainColor={text1Color}
          fontFamily={fontFamily.bold}
        />

        {/* <MainButton
          text="START"
          width={100}
          paddingVertical={8}
          paddingHorizontal={0}
          color={text4Bg}
          textStyle={{ color: text4Color, fontSize: 12 }}
        /> */}
        <TouchableOpacity
          style={[styles.actionTextBg, { backgroundColor: text4Bg }]}
          onPress={handlePress}
        >
          <Text style={[styles.actionText, { color: text4Color }]}>START</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    height: 200,
    borderRadius: 10,
    marginTop: 25,
    marginBottom: 15,
    padding: 10,
  },
  topText: {
    marginTop: 70,
    marginBottom: 35,
  },

  iconStyle: {
    position: "absolute",
    overflow: "hidden",
    right: 0,
    borderRadius: 10,
  },
  bottomText: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
  actionTextBg: {
    borderRadius: 29,
  },
  actionText: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 12,
  },
});
