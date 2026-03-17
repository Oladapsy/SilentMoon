import React from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Text } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    // Airbnb Cereal
    "AirbnbCereal-Bold": require("@/assets/fonts/airbnb-cereal-font/AirbnbCereal_W_Bd.otf"),
    "AirbnbCereal-Light": require("@/assets/fonts/airbnb-cereal-font/AirbnbCereal_W_Lt.otf"),
    "AirbnbCereal-Book": require("@/assets/fonts/airbnb-cereal-font/AirbnbCereal_W_Bk.otf"),
    "AirbnbCereal-Medium": require("@/assets/fonts/airbnb-cereal-font/AirbnbCereal_W_Md.otf"),
    "AirbnbCereal-Black": require("@/assets/fonts/airbnb-cereal-font/AirbnbCereal_W_Blk.otf"),
    "AirbnbCereal-ExtraBold": require("@/assets/fonts/airbnb-cereal-font/AirbnbCereal_W_XBd.otf"),

    // Helvetica Neue (14 variants)
    "HelveticaNeue-Black": require("@/assets/fonts/helvetica-neue-5/HelveticaNeueBlack.otf"),
    "HelveticaNeue-BlackItalic": require("@/assets/fonts/helvetica-neue-5/HelveticaNeueBlackItalic.otf"),
    "HelveticaNeue-Bold": require("@/assets/fonts/helvetica-neue-5/HelveticaNeueBold.otf"),
    "HelveticaNeue-BoldItalic": require("@/assets/fonts/helvetica-neue-5/HelveticaNeueBoldItalic.otf"),
    "HelveticaNeue-Heavy": require("@/assets/fonts/helvetica-neue-5/HelveticaNeueHeavy.otf"),
    "HelveticaNeue-HeavyItalic": require("@/assets/fonts/helvetica-neue-5/HelveticaNeueHeavyItalic.otf"),
    "HelveticaNeue-Italic": require("@/assets/fonts/helvetica-neue-5/HelveticaNeueItalic.ttf"),
    "HelveticaNeue-Light": require("@/assets/fonts/helvetica-neue-5/HelveticaNeueLight.otf"),
    "HelveticaNeue-LightItalic": require("@/assets/fonts/helvetica-neue-5/HelveticaNeueLightItalic.otf"),
    "HelveticaNeue-Medium": require("@/assets/fonts/helvetica-neue-5/HelveticaNeueMedium.otf"),
    "HelveticaNeue-MediumItalic": require("@/assets/fonts/helvetica-neue-5/HelveticaNeueMediumItalic.otf"),
    "HelveticaNeue-Roman": require("@/assets/fonts/helvetica-neue-5/HelveticaNeueRoman.otf"),
    "HelveticaNeue-Thin": require("@/assets/fonts/helvetica-neue-5/HelveticaNeueThin.otf"),
    "HelveticaNeue-ThinItalic": require("@/assets/fonts/helvetica-neue-5/HelveticaNeueThinItalic.otf"),
    "HelveticaNeue-UltraLight": require("@/assets/fonts/helvetica-neue-5/HelveticaNeueUltraLight.otf"),
    "HelveticaNeue-UltraLightItalic": require("@/assets/fonts/helvetica-neue-5/HelveticaNeueUltraLightItalic.otf"),
  });


  if (!fontsLoaded) {
    return <Text>Loading fonts…</Text>;
  }

  return <Stack>
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="sign-in" options={{ headerShown: false }} />
  </Stack>;
}
