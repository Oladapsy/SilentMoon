import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Controller } from "react-hook-form";
import EyeIcon from "@/assets/svg/signup/eyeClose.svg";
import CheckIcon from "@/assets/svg/signup/check.svg";

interface InputFieldProps {
  control: any;
  name: string;
  placeholder: string;
  secureTextEntry?: boolean;
  showToggle?: boolean;
  showCheck?: boolean;
}

export default function InputField({
  control,
  name,
  placeholder,
  secureTextEntry = false,
  showToggle = false,
  showCheck = false,
}: InputFieldProps) {
  const [hidden, setHidden] = useState(secureTextEntry);

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: `${placeholder} is required` }}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <View style={styles.wrapper}>
          <View style={[styles.inputWrapper, error && styles.errorBorder]}>
            <TextInput
              style={styles.input}
              placeholder={placeholder}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={hidden}
            />
            {showToggle && (
              <TouchableOpacity onPress={() => setHidden(!hidden)} style={styles.icon}>
                <EyeIcon />
              </TouchableOpacity>
            )}
            {showCheck && value?.length > 0 && (
              <View style={styles.icon}>
                <CheckIcon />
              </View>
            )}
          </View>
          {error && <Text style={styles.errorText}>{error.message}</Text>}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 14,
  },
  errorBorder: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
  icon: {
    marginLeft: 8,
  },
});
