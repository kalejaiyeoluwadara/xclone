import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Nav() {
  return (
    <SafeAreaView>
      <View className="flex w-full h-[60px] flex-row  justify-between items-center px-4  ">
        <View className="h-[50px] w-[50px] bg-gray-300 rounded-full "></View>
        <View className="h-[50px] w-[50px] bg-gray-300 rounded-full "></View>
        <View></View>
      </View>
      <ScrollView horizontal>
        <View className="text flex-row gap-10 ">
          {[
            "For you",
            "Following",
            "Javascript",
            ,
            "Javascript",
            ,
            "Javascript",
          ].map((item, id) => {
            return (
              <Text className="text-white text- " key={id}>
                {item}
              </Text>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
