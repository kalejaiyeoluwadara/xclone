import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Nav from "../components/Nav";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Nav */}
      <Nav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(17, 24, 39)",
    height: "100%",
    width: "100%",
  },
});
