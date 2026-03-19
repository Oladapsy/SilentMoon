import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/src/components/common/InputField";
import MainButton from "@/src/components/common/MainButton";
import ActionText from "@/src/components/common/ActionText";
import { colors } from "@/src/theme/colors";
import CheckIcon from "@/assets/svg/checkBox.svg";
//route wehn complete
import { useRouter } from "expo-router";

const signupSchema = z.object({
  name: z.string().min(6, "Your name must be at least 6 charcater"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  acceptPolicy: z.boolean().refine((val) => val === true, {
    message: "You must accept the Privacy Policy",
  }),
});

export default function SignUpForm() {
  const router = useRouter();

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: any) => {
    console.log("signup data:", data);
    router.push({
      pathname: "/welcome",
      params: { name: data.name, mail: data.email },
    });
  };

  return (
    <View>
      <InputField
        control={control}
        name="name"
        placeholder="Oladapo Odedeyi"
        showCheck
      />
      <InputField control={control} name="email" placeholder="Email address" />
      <InputField
        control={control}
        name="password"
        placeholder="Password"
        secureTextEntry
        showToggle
      />

      {/* Terms and checkbox */}
      <Controller
        control={control}
        name="acceptPolicy"
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <View style={styles.checkboxRow}>
            <View style={styles.terms}>
              <ActionText
                main="I have read the"
                sub="Privacy Policy"
                route="/"
              />

              <TouchableOpacity
                onPress={() => onChange(!value)}
                style={[styles.checkbox, value && styles.checkboxChecked]}
              >
                {value && <CheckIcon />}
              </TouchableOpacity>
            </View>
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </View>
        )}
      />

      <MainButton text="GET STARTED" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  terms: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", 
    width: "100%",
  },
  checkboxRow: {},
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: colors.mainText,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  checkboxChecked: {
    backgroundColor: colors.tetiary,
  },
  errorText: {
    color: colors.error,
    fontSize: 13,
    marginTop: -5,
  },
});
