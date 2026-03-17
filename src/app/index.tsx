import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
// import { Logo } from "@/src/components/common/Logo";

export default function WelcomeScreen() {
  return (
      <View style={styles.container}>
        {/* <Logo /> */}
        <Text style={styles.text}>Welcome to Silent Moon</Text>
        <Text style={styles.text}>Welcome to Silent Moon</Text>
        <Link href="/sign-in">
          <Text style={styles.text}>Go to Sign In</Text>
        </Link>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  text: {
      color: "black",
      fontSize: 30,
  }
});
