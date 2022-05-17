import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

const text_backgrd_color = "rgba(0, 0, 0, 0.69)";
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  horizontal_scrl_wrpr: {
    height: 200,
    maxWidth: "100%",
    overflow: "scroll",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  scroll_item: {
    height: 200,
    width: 220,
    marginRight: 8,
    backgroundColor: "rgba(244, 244, 244, 1)",
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(175, 165, 165, 1)",
    elevation: 4,
    shadowRadius: 8,
    // shadowOffset: { x: -10, y: 0 },
  },
  scroll_backgrd_img: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  overlay_txt: {
    color: "#fff",
    fontFamily: "Roboto_700Bold",
  },
  text_overly_wrpr: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
  },
  text_overly_backgrd_color: {
    backgroundColor: text_backgrd_color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 40,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  main_text: {
    fontFamily: "Roboto_700Bold",
    fontSize: 14,
    color: "rgba(92, 92, 92, 1)",
    marginBottom: 14,
  },
});

const img = require("../../images/img1.jpg");
export default function HorizontalScrollList(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.main_text}>{props.mainText || "Categories"}</Text>
      <View style={{...styles.horizontal_scrl_wrpr, ...props?.style}}>
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {props.itemList.map((item, idx) => {
            return (
              <TouchableWithoutFeedback
                onPress={() => props.navigation.navigate("PlaceDetails")}
                key={Math.random() + idx}
              >
                <View style={{ ...styles.scroll_item, ...props?.style }}>
                  <ImageBackground
                    source={{ uri: item.imageUrl }}
                    style={styles.scroll_backgrd_img}
                  >
                    <View style={styles.text_overly_wrpr}>
                      <View style={styles.text_overly_backgrd_color}>
                        <Text style={styles.overlay_txt} u>
                          {item.name}
                        </Text>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
