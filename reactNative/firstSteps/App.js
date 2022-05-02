import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Button,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{ height: 400, backgroundColor: "crimson", paddingTop: 100 }}
        >
          <Button
            title="Press here"
            onPress={() => {
              console.log("Pressed!");
            }}
          ></Button>
        </View>
        <View style={{ height: 400, backgroundColor: "pink" }}>
          <Image
            source={require("./assets/favicon.png")}
            style={styles.cover}
            resizeMode="contain"
          />
        </View>
        <View style={{ height: 400, backgroundColor: "salmon" }}>
          <ActivityIndicator
            size="large"
            color="purple"
            style={{ marginTop: 100 }}
          />
          <TouchableHighlight
            style={styles.btn}
            underlayColor="yellow"
            onPress={() => {
              console.log("Pressed!");
            }}
          >
            <Text style={styles.btnText}>Press here folks!</Text>
          </TouchableHighlight>
        </View>
        <View style={{ height: 400, backgroundColor: "white" }}>
          <Image
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={{ height: 400, backgroundColor: "deeppink" }}>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.8}
            onPress={() => {
              console.log("TouchableOpacity pressed!");
            }}
          >
            <Text style={styles.btnText}>Press here!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
    // SafeAreaView is specific to IOS
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "lightgrey",
    borderWidth: 2,
    height: 100,
    width: 200,
  },
  logo: {
    height: 80,
    width: 80,
  },
  btn: {
    backgroundColor: "green",
    margin: 100,
    width: "50%",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  btnText: {
    color: "white",
    fontSize: 30,
  },
});
