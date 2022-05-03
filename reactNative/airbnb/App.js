import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* main view */}

      <View>
        {/* logo view */}

        <Image
          source={require("./assets/logo.png")}
          resizeMode="contain"
          style={styles.logo__Image}
        />
        <Text>Sign in</Text>
      </View>

      <View>
        {/* inputs view */}
        <TextInput placeholder="email" />
        <TextInput placeholder="password" />
      </View>

      <View>
        {/* button view */}

        <TouchableOpacity>
          <Text>Sign in</Text>
        </TouchableOpacity>
        <Text>No account? Register</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  logo__Image: {
    height: 100,
  },
});
