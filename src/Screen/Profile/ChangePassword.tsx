import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

import { Images } from "../../assets/index";
import CustomButton from "../../Components/CustomButton";
import CustomImageButton from "../../Components/CustomImageButton";
import CustomTextInput from "../../Components/CustomTextInput";
import { Colors } from "../../Helper/Colors";

const ChangePassword = ({ navigation, route }: any) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confrimPassword, setConfrimPassword] = useState("");

  const navigateTo = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ backgroundColor: Colors.bg, flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.headerView}>
          <View style={styles.innerHeader}>
            <TouchableOpacity onPress={navigateTo}>
              <Entypo name={"chevron-thin-left"} size={18} color={"#332640"} />
            </TouchableOpacity>
            <Text style={styles.welcome}>{"  Change Password"}</Text>
          </View>
          <View style={styles.serachView}>
            <CustomImageButton imageSource={Images.searchnormal} />
            <CustomImageButton imageSource={Images.notification} />
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <View style={styles.contactInfo}>
            <View>
              <CustomTextInput
                label={"Old Password"}
                placeholderText={"Enter Your Old Password"}
                value={oldPassword}
                onChangeText={setOldPassword}
                secureTextEntry={true}
              />
              <CustomTextInput
                label={"New Password"}
                placeholderText={"Enter Your New Password"}
                value={newPassword}
                onChangeText={setNewPassword}
                secureTextEntry={true}
              />
              <CustomTextInput
                label={"Confirm Password"}
                placeholderText={"Confirm Your Password"}
                value={confrimPassword}
                onChangeText={setConfrimPassword}
                secureTextEntry={true}
              />
              <View style={styles.forgotView}>
                <Text style={styles.forgtPass}>{"Forgot Password?"}</Text>
              </View>
              <CustomButton marginTop={25}>Save Changes</CustomButton>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.bg,
    flexGrow: 1,
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  innerHeader: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  serachView: { flexDirection: "row", justifyContent: "space-between" },
  welcome: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#000",
  },

  contactInfo: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginVertical: 10,
  },
  logoutIcon: {
    height: 24,
    width: 24,
  },
  forgotView: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  forgtPass: {
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.primaryColor,
  },
});
