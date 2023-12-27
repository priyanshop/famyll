import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { Images } from "../assets";
import { Colors } from "../Helper/Colors";
import CustomImageButton from "./CustomImageButton";

export const CustomHeader = ({ navigation, title }) => {
  return (
    <SafeAreaView style={styles.headerView}>
      <View style={styles.innerHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo name="chevron-thin-left" size={18} color="#332640" />
        </TouchableOpacity>
        <Text style={styles.welcome}>{"  " + title}</Text>
      </View>
      <View style={styles.serachView}>
        <CustomImageButton imageSource={Images.searchnormal} />
        <CustomImageButton imageSource={Images.notification} />
      </View>
    </SafeAreaView>
  );
};

const styles = {
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    backgroundColor: Colors.bg,
  },
  innerHeader: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  welcome: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#000",
  },

  serachView: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 7.5,
  },
};

export default CustomHeader;
