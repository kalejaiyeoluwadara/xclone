import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Nav from "../components/Nav";
import Posts from "../components/Posts";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Nav */}
      <Nav />
      <Posts />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "rgb(17, 24, 39)",
    height: "100%",
    width: "100%",
  },
});
