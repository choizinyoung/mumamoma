import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import InformationPage from "./InformationPage";
import SettingPage from "./SettingPage";

export default function Navigator() {
  return (
    <View style={styles.container}>
      <Text>안녕하세요</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
