import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { SafeAreaView } from "react-native-safe-area-context";
import img from "../assets/example.jpeg";
import twitter from "../assets/twitter.png";

export default function Nav() {
  return (
    <SafeAreaView>
      <View className="flex w-full h-[60px] flex-row justify-between items-center px-4">
        {/* Profile Picture */}
        <View className="h-[50px] overflow-hidden w-[50px]  rounded-full">
          <Image
            className="bg-cover h-[50px] w-[50px] bg-center"
            source={img}
          />
        </View>

        {/* Twitter Icon */}
        <View className=" overflow-hidden  rounded-full">
          <Image
            className="bg-cover h-[40px] w-[40px] bg-center"
            source={twitter}
          />
        </View>

        {/* Empty View */}
        <View></View>
      </View>

      {/* Scrollable Tabs */}
      <ScrollView horizontal>
        <View className="pt-4 px-4 border-b border-gray-500 flex-row gap-10">
          {[
            "For you",
            "Following",
            "Javascript",
            "Javascript",
            "Javascript",
            "Javascript",
            "Javascript",
          ].map((item, id) => (
            <Text
              className={`${
                id === 0
                  ? "t-white font-bold pb-2 border-b-[2px] border-blue-600"
                  : "text-gray-600 mb-1 font-medium"
              } text-lg`}
              key={id}
            >
              {item}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
