//@ts-nocheck
import React, { useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Images } from "../../assets/index";
import { Colors } from "../../Helper/Colors";
import CustomButton from "../../Components/CustomButton";
import CustomTextInput from "../../Components/CustomTextInput";

const ResetPassword = ({ navigation, route }: any) => {
  const [newPassword, setNewPassword] = useState("");
  const [confrimPassword, setConfrimPassword] = useState("");

  const navigateToVerfyOTP = () => {
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={Images.AppLogo} resizeMode="contain" style={styles.logo} />
      <Text style={styles.title}>{"Reset Password?"}</Text>
      <Text style={styles.title2}>{"Kindly enter your new password."}</Text>
      <View>
        <CustomTextInput
          label={"New Password"}
          placeholderText={"Enter New Password"}
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
        <CustomButton onPress={navigateToVerfyOTP} marginTop={25}>
          Submit
        </CustomButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  logo: {
    width: "50%",
    marginTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 15,
  },
  title2: {
    fontSize: 17,
    fontWeight: "400",
    color: Colors.defualtTxtColor,
    marginBottom: 15,
  },
});

export default ResetPassword;
