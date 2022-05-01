import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import {
  useFonts,
  Satisfy_400Regular,
  SansitaSwashed_600SemiBold,
  Poppins_600SemiBold,
} from "@expo-google-fonts/dev";

const welc_img = require("../images/welcome1.jpg");

export default function Welcome(props) {
  let [fontsLoaded] = useFonts({
    Satisfy_400Regular,
    SansitaSwashed_600SemiBold,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <ImageBackground source={welc_img} style={styles.back_img}>
      <View>
        <View style={styles.text_background}>
          <Text style={styles.text}>Make My Weekend</Text>
          <Text style={styles.text2}>Things end but memories last forever</Text>
        </View>
        <View style={styles.btn_wrpr}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <View style={styles.login_btn}>
              <Text style={styles.lbtn_text}>LOGIN</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
            <View style={styles.signup_btn}>
              <Text style={styles.sbtn_text}>SIGN UP</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  text_background: {
    backgroundColor: "rgba(0, 0, 0, 0.24)",
    height: 170,
  },

  back_img: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },

  text: {
    marginTop: 60,
    fontFamily: "SansitaSwashed_600SemiBold",
    color: "#fff",
    fontSize: 28,
    fontWeight: "600",
    lineHeight: 34,
    letterSpacing: 0,
    textAlign: "center",
  },

  text2: {
    fontFamily: "Satisfy_400Regular",
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 34,
    letterSpacing: 0,
    textAlign: "center",
  },

  btn_wrpr: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  lbtn_text: {
    textAlign: "center",
    lineHeight: 53,
    color: "#fff",
    fontFamily: "Poppins_600SemiBold",
  },

  sbtn_text: {
    textAlign: "center",
    lineHeight: 53,
    color: "#142EB6",
    fontFamily: "Poppins_600SemiBold",
  },

  login_btn: {
    height: 53,
    width: 178,
    borderRadius: 45,
    backgroundColor: "#142EB6",
    elevation: 5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#fff",
  },
  signup_btn: {
    height: 53,
    width: 178,
    borderRadius: 45,
    backgroundColor: "#fff",
    elevation: 5,
    marginTop: 40,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#142EB6",
  },
});
