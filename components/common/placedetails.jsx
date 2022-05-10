import { View, Text, StyleSheet } from "react-native";

export default function PlaceDetails(props) {
  return (
    <View style={styles.container}>
      <Text> Place details here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
