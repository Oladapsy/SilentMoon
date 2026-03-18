import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  View,
  StyleProp,
  TextStyle,
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
}

const MainButton = ({
  onPress,
  text,
  icon,
  color = colors.tetiary,
  textStyle,
  route,
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

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
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
    width: "90%",
    borderRadius: 38,
    paddingVertical: 20,
    paddingHorizontal: 20,
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
