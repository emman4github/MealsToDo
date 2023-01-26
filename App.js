import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, Text, View, SafeAreaView, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchbar}>
          <Searchbar />
        </View>
        <View style={styles.list}>
          <Text style={styles.text}>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchbar: {
    padding: 16,
    backgroundColor: "#fff",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
  text: {
    color: "#fff",
  },
});
