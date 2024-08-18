import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import img from "../assets/example.jpeg";
import heart from "../assets/heart.png";
import Icon from "react-native-vector-icons/FontAwesome";
import Post from "./Post";
export default function Posts() {
  return (
    <ScrollView>
      {[1, 2, 3, 4, 5, 6].map((post, id) => {
        return <Post key={id} />;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
