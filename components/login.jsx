import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import {
  useFonts,
  Satisfy_400Regular,
  SansitaSwashed_600SemiBold,
  Poppins_600SemiBold,
  PublicSans_600SemiBold,
  Roboto_300Light,
} from "@expo-google-fonts/dev";
import { TextInput } from "react-native-gesture-handler";

const welc_img = require("../images/login1.jpg");

export default function Login(props) {
  let [fontsLoaded] = useFonts({
    Satisfy_400Regular,
    SansitaSwashed_600SemiBold,
    Poppins_600SemiBold,
    PublicSans_600SemiBold,
    Roboto_300Light,
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <SafeAreaView>
      <ImageBackground source={welc_img} style={styles.back_img}>
        <Text style={styles.wlcm_text}>Welcome</Text>
        <View style={styles.container}>
          <View>
            <TextInput placeholder="Email" style={styles.input} />
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              style={styles.input}
            />
          </View>
          <TouchableOpacity
            style={styles.btn_wrpr}
            onPress={() => props.navigation.navigate("Home")}
          >
            <View style={styles.login_btn}>
              <Text style={styles.lbtn_text}>LOGIN</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  wlcm_text: {
    marginTop: 50,
    color: "#fff",
    textAlign: "center",
    fontFamily: "PublicSans_600SemiBold",
    fontWeight: "400",
    fontSize: 28,
  },

  back_img: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },

  input: {
    height: 48,
    minWidth: 300,
    fontFamily: "Roboto_300Light",
    margin: 12,
    borderRadius: 25,
    backgroundColor: "#F2F2F2",
    borderWidth: 1,
    borderColor: "#fff",
    padding: 10,
  },

  login_btn: {
    height: 53,
    width: 178,
    borderRadius: 45,
    backgroundColor: "rgba(20, 46, 182, 1)",
    elevation: 5,
    borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "#fff",
  },

  lbtn_text: {
    textAlign: "center",
    lineHeight: 53,
    color: "#fff",
    fontFamily: "Poppins_600SemiBold",
  },

  btn_wrpr: {
    marginTop: 40,
  },
});
