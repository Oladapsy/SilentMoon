import React from "react";
import { View } from "react-native";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/src/components/common/InputField";
import MainButton from "@/src/components/common/MainButton";
import { useRouter } from "expo-router"

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function SignInForm() {
  const router = useRouter()
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Login data:", data);
    router.push("/welcome")
  };

  return (
    <View>
      <InputField control={control} name="email" placeholder="Email address" />
      <InputField control={control} name="password" placeholder="Password" secureTextEntry showToggle />
      <MainButton text="LOG IN" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
