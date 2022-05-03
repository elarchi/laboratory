import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      if (email && password) {
        setErrorMessage("");
        const response = await axios.post("http://backendURL/", {
          //backend URL to update
          email,
          password,
        });
        console.log("response.data:", reponse.data);
        //miss token part
      } else {
        setErrorMessage("Please fill all fields");
      }
    } catch (error) {
      console.log(error.response);
      console.log(error.message);
      if (error.response.status === 400 || error.response.status === 401) {
        setErrorMessage("Wrong email or password");
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* main view */}

      <View style={styles.logo__View}>
        {/* logo view */}

        <Image
          source={require("./assets/logo.png")}
          resizeMode="contain"
          style={styles.Image}
        />
        <Text style={styles.p22_bold__Text}>Sign in</Text>
      </View>

      <View style={styles.inputs__View}>
        {/* inputs view */}
        <TextInput
          value={email}
          placeholder="email"
          style={styles.Input}
          textContentType="emailAddress"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <TextInput
          value={password}
          placeholder="password"
          style={styles.Input}
          secureTextEntry={true}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </View>

      <View style={styles.btn__View}>
        {/* button view */}

        <Text style={styles.red__Text}>{errorMessage}</Text>
        <TouchableOpacity style={styles.TouchableOpacity} onPress={handleLogin}>
          <Text style={styles.p18__Text}>Sign in</Text>
        </TouchableOpacity>
        <Text style={styles.p14__Text}>No account? Register</Text>
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
  logo__View: {
    alignItems: "center",
    justifyContent: "space-between",
    height: 150,
  },
  Image: {
    height: 100,
  },
  inputs__View: {
    justifyContent: "space-between",
    height: 50,
  },
  Input: {
    borderColor: "white",
    borderBottomColor: "red",
    borderWidth: 1,
    width: 150,
  },
  btn__View: {
    alignItems: "center",
    justifyContent: "space-between",
    height: 90,
  },
  TouchableOpacity: {
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 20,
    height: 40,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  p22_bold__Text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "grey",
  },
  p18__Text: {
    fontSize: 18,
    color: "grey",
  },
  p14__Text: {
    fontSize: 14,
  },
  red__Text: {
    color: "red",
  },
});
