import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
} from "react-native";

import {
  useFonts,
  Satisfy_400Regular,
  SansitaSwashed_600SemiBold,
  Poppins_600SemiBold,
  PublicSans_600SemiBold,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/dev";
import LocationSearchBar from "./common/locationsearchbar";
import HorizontalScrollList from "./common/horizontalscrolllist";

const count = [
  "Kodaikanal",
  "Ooty",
  "Nandi Hills",
  "Kodagu",
  "Chikkamagaluru",
  "Mysore Palace",
  "Mysore Palace",
  "Mysore Palace",
  "Mysore Palace",
  "Mysore Palace",
  "Mysore Palace",
];

export default function Home() {
  let [fontsLoaded] = useFonts({
    Satisfy_400Regular,
    SansitaSwashed_600SemiBold,
    Poppins_600SemiBold,
    PublicSans_600SemiBold,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <LocationSearchBar />
      <HorizontalScrollList mainText="Recent  searches" itemList={count} />
      <HorizontalScrollList mainText="Recomonded places" itemList={count} />
      <HorizontalScrollList mainText="Trending places" itemList={count} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    backgroundColor: "#E5E5E5",
  },
});
