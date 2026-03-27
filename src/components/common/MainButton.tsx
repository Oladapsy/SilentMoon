import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  View,
  StyleProp,
  TextStyle,
  DimensionValue,
} from "react-native";
import { colors } from "@/src/theme/colors";
import { Href, useRouter } from "expo-router";

interface MainButtonProps extends TouchableOpacityProps {
  onPress?: () => void;
  text: string;
  icon?: React.ReactNode;
  color?: string;
  textStyle?: StyleProp<TextStyle>;
  route?: Href;
  paddingVertical?: number;
  width?: DimensionValue;
  paddingHorizontal?: number;
}

const MainButton = ({
  onPress,
  text,
  width = "100%",
  icon,
  color = colors.tetiary,
  textStyle,
  route,
  paddingHorizontal = 20,
  paddingVertical = 20.5,
  ...rest
}: MainButtonProps) => {
  const router = useRouter();

  const handlePress = () => {
    if (route) {
      router.push(route); // navigate to route if provided
    } else if (onPress) {
      onPress(); // otherwise run custom onPress
    }
  };
  const isFullWidth = width === "100%";

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: color,
          paddingVertical,
          paddingHorizontal,
          width,
          marginVertical: isFullWidth ? 10 : 0,
        },
      ]}
      onPress={handlePress}
      {...rest}
    >
      {icon ? (
        <>
          <View style={styles.icon}>{icon}</View>
          <Text style={[styles.text, textStyle]}>{text}</Text>
          <View style={styles.spacer} />
          {/* keeps text centered when icon exists */}
        </>
      ) : (
        <Text style={[styles.text, textStyle]}>{text}</Text> // centered when no icon
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 38,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: colors.buttonText,
    fontSize: 14,
    fontFamily: "HelveticaNeue-Medium",
    textAlign: "center",
    flex: 1,
  },
  icon: {
    marginRight: 8,
    marginLeft: 12,
  },
  spacer: {
    width: 24,
  },
});

export default MainButton;
