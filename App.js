// import * as Permissions from 'expo-permissions';
// import { StatusBar } from "expo-status-bar";
// import React, {Component} from "react";
// import {
//   StyleSheet,
//   Text,Image,
//   View,Button,Alert,TouchableOpacity,
// } from 'react-native';
// import * as Location from "expo-location";

// export default function App() {
//   async function GetLocation(){
//     let { status } = await Permissions.askAsync(Permissions.LOCATION);

//     if (status !== "granted") {
//       Alert.alert(
//         "Permission not granted",
//         "Allow the app to use location service.",
//         [{ text: "OK" }],
//         { cancelable: false }
//       );
//     }

//     let { coords } = await Location.getCurrentPositionAsync();

//     if (coords) {
//       const { latitude, longitude } = coords;
//       let response = await Location.reverseGeocodeAsync({
//         latitude,
//         longitude,
//       });

//       for (let item of response) {
//         let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;

//         alert(address)
//       }
//     }
//   };
//     return(
//       <View style = {styles.container}>
//     <Button title="Show My Location" onPress={GetLocation} />
//     <StatusBar style="auto" />
//       </View>
//     );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#F5CFF',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });

import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import { Input } from "react-native-elements";

const GOOGLE_PLACES_API_KEY = "AIzaSyCMANyWvjcYxwagcf0NNch5rJEGrNTMmvg";

const GooglePlacesInput = () => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Enter the location"
        query={{
          key: "AIzaSyCMANyWvjcYxwagcf0NNch5rJEGrNTMmvg",
          language: "en", // language of the results
        }}
        onPress={(data, details) => console.log(data, details)}
        textInputProps={{
          marginHorizontal: 20,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: `#808080`,
          // InputComp: Input,
          // leftIcon: { type: 'font-awesome', name: 'chevron-left' },
          errorStyle: { color: "red" },
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 500,
  },
});

export default GooglePlacesInput;
