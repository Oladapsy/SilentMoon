import React from "react";
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, View } from "react-native";

interface MainButtonProp extends TouchableOpacityProps {
  onpress: () => void;
  text: string;
  icon?: React.ReactNode;
}

const MainButton = ({ onpress, text, icon }: MainButtonProp) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onpress}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F2F2F3",
    borderRadius: 100,
    paddingVertical: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  text: {
    color: "#0D0D0D",
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
  },
    icon: {
        
    }
});

export default MainButton;
