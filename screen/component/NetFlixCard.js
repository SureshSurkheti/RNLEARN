import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const NetFlixCard = () => {
  return (
    <View style={styles.container}>
      <Text>Netflix Poster</Text>
      <View>
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default NetFlixCard;
