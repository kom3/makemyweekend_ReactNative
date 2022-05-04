import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
} from "react-native";

const loc_ic = require("../../images/lociccn.png");

export default function LocationSearchBar(props) {
  return (
    <View style={styles.searchbar_wrpr}>
      <View style={styles.locicn_wrpr}>
        <ImageBackground
          source={loc_ic}
          style={styles.locicn}
        ></ImageBackground>
      </View>
      <TextInput placeholder="Choose location" style={styles.searchbar} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchbar_wrpr: {
    marginTop: 40,
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  searchbar: {
    height: 48,
    minWidth: 390,
    fontFamily: "Roboto_300Light",
    margin: 12,
    borderRadius: 12,
    backgroundColor: "#F4F4F4",
    borderWidth: 1,
    borderColor: "#FCFCFC",
    padding: 10,
  },

  locicn_wrpr: {
    height: 35,
    width: 35,
    position: "absolute",
    zIndex: 1,
    right: 15,
    top: 18,
    padding: 6,
  },

  locicn: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
});
