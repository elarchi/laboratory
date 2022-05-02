//component
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
//style
import colors from "./colors";
//expo
import Constants from "expo-constants";
//icons
import { FontAwesome, Feather, FontAwesome5 } from "@expo/vector-icons";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.ScrollView}>
      {/* 
      ------------ headband (hb)  
      */}
      <View style={styles.hb__View}>
        <Image
          source={require("./assets/logo.png")}
          style={styles.hb_logo__Image}
        />
      </View>

      {/* 
      ------------ movie (mov)
      */}
      <View style={styles.darkGrey__View}>
        {/* 
        titles
        */}
        <Text style={[styles.white__Text, styles.mov_title__Text]}>
          Interstellar
        </Text>
        <Text style={styles.lightGrey__Text}>
          2014 PG-13 2h49min Adventure, Drama, Sci-Fi
        </Text>

        {/* 
        presentation (pres)
        */}
        <View style={styles.mov_pres__View}>
          {/*
          left-side 
          */}
          <View>
            <Image
              source={require("./assets/film.jpg")}
              style={styles.mov__Image}
            />
          </View>
          {/* 
          right-side 
          */}
          <View style={styles.mov_pres_rightSide__View}>
            <Text style={[styles.white__Text, styles.mov_pres_rightSide__Text]}>
              A team of explorers travel through a wormhole in space in attempt
              to ensure humanity's survival.
            </Text>
            <TouchableOpacity style={styles.blue__TouchableOpacity}>
              <Text style={styles.white__Text}>+ ADD TO WATCHLIST</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* 
          rating
          */}
        <View style={styles.mov_rating__View}>
          <View style={styles.mov_rating_1__View}>
            <FontAwesome name="star" size={24} color={colors.gold} />
          </View>
          <View style={styles.mov_rating_2__View}>
            <Feather name="star" size={24} color="black" />
          </View>
          <View style={styles.mov_rating_3__View}>
            <FontAwesome5 name="js-square" size={24} color={colors.green} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
//-----------------------------
//            STYLES
//-----------------------------
const styles = StyleSheet.create({
  /*
  container
  */
  ScrollView: {
    backgroundColor: colors.extraDarkGrey,
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  darkGrey__View: {
    backgroundColor: colors.darkGrey,
  },
  /*
  text color
  */
  white__Text: {
    color: colors.white,
  },
  lightGrey__Text: {
    color: colors.lightGrey,
  },
  /* 
  button
  */
  blue__TouchableOpacity: {
    height: 30,
    backgroundColor: colors.blue,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
  /* 
  ------------ headband (hb) 
  */
  hb__View: {
    backgroundColor: colors.softGrey,
    height: 50,
    justifyContent: "center",
  },
  hb_logo__Image: {
    height: 30,
    width: 100,
    resizeMode: "contain",
  },
  /*
  ------------ movie (mov) 
  */
  mov_title__Text: {
    fontSize: 40,
  },
  mov__Image: {
    height: 150,
    width: 100,
    resizeMode: "cover",
  },
  mov_pres__View: {
    flexDirection: "row",
    padding: 10,
  },
  mov_pres_rightSide__View: {
    flexDirection: "column",
    padding: 10,
    width: 250,
  },
  mov_pres_rightSide__Text: {
    marginBottom: 20,
  },
  mov_rating__View: {
    flexDirection: "row",
  },
});
