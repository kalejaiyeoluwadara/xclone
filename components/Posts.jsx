import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import img from "../assets/example.jpeg";
import heart from "../assets/heart.png";
import Icon from "react-native-vector-icons/FontAwesome";
export default function Posts() {
  return (
    <ScrollView>
      <View className="px-4 py-6 border-y border-gray-600 ">
        {/* title */}
        <View className="flex flex-row space-x-2 items-center mb-3 ">
          <Image
            source={img}
            className="h-[50px] w-[50px] rounded-full bg-center bg-cover "
          />
          <View className="flex space-x-2 flex-row items-center ">
            <Text className="font-semibold text-lg  ">Moral Wisdom</Text>
            <Text className="text-gray-500 font-medium text-base  ">
              @Moral wisdom
            </Text>
            <Text className="text-gray-500 font-medium text-base  ">16h</Text>
          </View>
        </View>
        {/* Content */}
        <View>
          <Text className="text-lg ">
            The greatest glory in living lies not in never falling, but in
            rising every
          </Text>
          <Image
            source={img}
            className="h-[300px] mt-6 w-full rounded-2xl bg-center bg-cover "
          />
        </View>
        {/* Footer */}
        <View className="flex flex-row mt-8 space-x-2 ">
          <View>
            <Image source={heart} />
          </View>
          <View>
            <Text className="text-base">100</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
