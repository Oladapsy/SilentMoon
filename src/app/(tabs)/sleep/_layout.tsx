// app/(tabs)/sleep/_layout.tsx
import { Stack } from "expo-router";

export default function SleepLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}