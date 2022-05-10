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
import VerticalScrollList from "./common/verticalscrolllist";

const Data = [
  {
    name: "Taj Mahal",
    imageUrl:
      "https://th.bing.com/th/id/OIP.VkSBlLqzEfkMz_kwOWntbAHaG2?pid=ImgDet&rs=1",
  },
  {
    name: "Hampi",
    imageUrl:
      "https://global-uploads.webflow.com/5ec64dd010abbf1a7cd39650/5ef4767f8ac404333648cdfa_1547272303.jpeg",
  },
  {
    name: "Kodagu",
    imageUrl:
      "https://1.bp.blogspot.com/-s9dhR9Q7jbI/W84UyNWt4WI/AAAAAAAAKa8/tbMleFZx5FoZGqd9l9aGwLsSUu1Vi97MgCLcBGAs/w0/coorg.JPG",
  },
  {
    name: "Sakaleshpura",
    imageUrl:
      "https://i.pinimg.com/564x/d5/fc/b9/d5fcb9fe8a6ae9ca8a0ff4dc376a077e.jpg",
  },
  {
    name: "Test Place",
    imageUrl:
      "https://www.wns.co.za/Portals/0/Images/HeaderBanner/desktop/1087/53/travel_HD.jpg",
  },
  {
    name: "Test Place",
    imageUrl:
      "https://www.wns.co.za/Portals/0/Images/HeaderBanner/desktop/1087/53/travel_HD.jpg",
  },
  {
    name: "Test Place",
    imageUrl:
      "https://www.wns.co.za/Portals/0/Images/HeaderBanner/desktop/1087/53/travel_HD.jpg",
  },
  {
    name: "Test Place",
    imageUrl:
      "https://www.wns.co.za/Portals/0/Images/HeaderBanner/desktop/1087/53/travel_HD.jpg",
  },
];

export default function Home(props) {
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
      <HorizontalScrollList
        {...props}
        mainText="Recent  searches"
        itemList={Data}
      />
      <VerticalScrollList
        {...props}
        itemList={Data}
        mainText="Recent  searches"
      />
      {/* <HorizontalScrollList mainText="Recomonded places" itemList={count} />
      <HorizontalScrollList mainText="Trending places" itemList={count} /> */}
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
