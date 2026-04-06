import CourseBg from "@/assets/svg/tabs/common/courseDetails/courseDetails.svg";
import HeadIcon from "@/assets/svg/tabs/common/courseDetails/headDownload.svg";
import HeartIcon from "@/assets/svg/tabs/common/courseDetails/heart.svg";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import HeadNavigation from "../HeadNavigation";

const screenWidth = Dimensions.get("window").width;

interface Props {
  image?: React.ReactNode;
  arrowcolor?: string;
}

export default function CourseDetailsHeader({ image, arrowcolor }: Props) {
  return (
    <View style={styles.container}>
      {image ?? <CourseBg height={200} width={screenWidth} />}
      <View style={styles.navigation}>
        <HeadNavigation icon2={<HeartIcon />} icon3={<HeadIcon />} style={{}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    height: 250,
  },
  navigation: {
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
  },
});
