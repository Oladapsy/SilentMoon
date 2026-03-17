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

interface MainButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  text: string;
  icon?: React.ReactNode;
  color?: string;
  textStyle?: StyleProp<TextStyle>;
}

const MainButton = ({
  onPress,
  text,
  icon,
  color = colors.tetiary,
  textStyle,
  ...rest
}: MainButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
      {...rest}
    >
      {icon && <View style={styles.icon}>{icon}</View>}
      <Text style={[styles.text, textStyle]}>{text}</Text>
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
    justifyContent: "center",
  },
  text: {
    color: colors.buttonText,
    fontSize: 14,
    fontFamily: "HelveticaNeue-Light",
  },
  icon: {
    marginRight: 8,
  },
});

export default MainButton;
