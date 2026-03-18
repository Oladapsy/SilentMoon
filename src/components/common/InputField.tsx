import React, { useState } from "react"; // to toggle password visibility
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { Controller } from "react-hook-form"; // connect custom input to rhf
import EyeClose from "@/assets/svg/signup/eyeClose.svg";
import EyeOpen from "@/assets/svg/signup/eyeOpen.svg";
import CheckIcon from "@/assets/svg/signup/check.svg";
import { colors } from "@/src/theme/colors";

interface InputFieldProps {
  control: any; // from react hook form
  name: string; // field name
  placeholder: string; // the input placeholder
  secureTextEntry?: boolean; // hide text passwordMode
  showToggle?: boolean; // show the check icon
  showCheck?: boolean; // show the eyeIcon
}

export default function InputField({
  control,
  name,
  placeholder,
  secureTextEntry = false,
  showToggle = false,
  showCheck = false,
}: InputFieldProps) {
  // state for managing hidden text
  const [hidden, setHidden] = useState(secureTextEntry);

  //Variable	Meaning
  // onChange	-> updates value
  // onBlur	-> when user leaves input
  // value -> current input value
  // error -> validation error

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: `${placeholder} is required` }}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
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
              <TouchableOpacity
                onPress={() => setHidden(!hidden)}
                style={styles.icon}
              >
                {hidden ? <EyeClose /> : <EyeOpen />}
              </TouchableOpacity>
            )}
            {showCheck && value?.length > 6 && (
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
    marginBottom: 12,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.15,
    borderColor: colors.secondary,
    borderRadius: 15,
    paddingHorizontal: 12,
    backgroundColor: colors.textInput,
  },
  input: {
    flex: 1,
    height: 56,
    fontSize: 16,
    color: colors.secondary,
    backgroundColor: colors.textInput,
  },
  errorBorder: {
    borderColor: colors.error,
  },
  errorText: {
    color: colors.error,
    fontSize: 13,
    marginTop: 2,
  },
  icon: {
    marginLeft: 8,
  },
});
