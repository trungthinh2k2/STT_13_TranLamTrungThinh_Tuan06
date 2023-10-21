import React from "react";
import { StyleSheet, View, Pressable, Image } from "react-native";
export default function Footer() {
  return (
    <View style={styles.footer}>
      <Pressable>
        <Image style={styles.menu_icon} source={require("../assets/menu_icon.png")}
        />
      </Pressable>
      <Pressable>
        <Image style={styles.home} source={require("../assets/home.png")} />
      </Pressable>
      <Pressable>
        <Image style={styles.back2} source={require("../assets/back.png")} />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#1BA9FF",
    bottom: 0,
    width: "100%",
    height: 42,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    zIndex: 1,
  },
  menu_icon: {
    width: 28,
    height: 28.85,
    resizeMode: "contain",
  },
  home: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  back2: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});
