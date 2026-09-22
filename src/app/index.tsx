import { Image, ScrollView, Text, View, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>New Course React Native.</Text>
        <Text style={styles.paragraph}>I am happy to learn React Native.</Text>

        <Image
          source={{
            uri: "https://cdn.shopaccino.com/igmguru/articles/What-Is-React-Native.png?v=548",
          }}
          style={styles.image}
        />

        {Array.from({ length: 12 }).map((_, index) => (
          <Text key={index} style={styles.sectionHeader}>
            New Course React Native.
          </Text>
        ))}
      </ScrollView>

      <View style={styles.navigation}>
        <Text>Home</Text>
        <Text>Genre</Text>
        <Text>Account</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    color: "red",
    fontWeight: "700",
    fontSize: 30,
  },
  paragraph: {
    fontSize: 15,
    color: "#2a3f9c",
    marginTop: 10,
    lineHeight: 20,
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 20,
    borderRadius: 15,
  },
  sectionHeader: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    color: "#111827",
    marginTop: 20,
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    marginBottom: 20,
    borderTopWidth: 1,
    borderTopColor: "red",
  },
});