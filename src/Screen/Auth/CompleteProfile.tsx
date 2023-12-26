//@ts-nocheck
import React, { useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Images } from "../../assets/index";
import { Colors } from "../../Helper/Colors";
import CustomButton from "../../Components/CustomButton";
import CustomTextInput from "../../Components/CustomTextInput";

const CompleteProfile = ({ navigation, route }: any) => {
  const [newPassword, setNewPassword] = useState("");
  const [confrimPassword, setConfrimPassword] = useState("");
  const [memberNo, setMemberNo] = useState("");
  const navigateToVerfyOTP = () => {};

  return (
    <ScrollView style={styles.container}>
      <Image source={Images.AppLogo} resizeMode="contain" style={styles.logo} />
      <Text style={styles.title}>{"Complete Profile"}</Text>
      <Text style={styles.title2}>
        {"Enter necessary details to create your account."}
      </Text>
      <View>
        <CustomTextInput
          label={"Member Number"}
          placeholderText={"Enter Your Member Number"}
          value={memberNo}
          onChangeText={setMemberNo}
        />
        <CustomTextInput
          label={"Create Password"}
          placeholderText={"Enter Password Here"}
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
          Sign Up
        </CustomButton>
        <View>
          <Text style={styles.newAccPass}>
            {"Already have an account? "}
            <Text style={styles.forgtPass}>{"Sign In"}</Text>
          </Text>
        </View>
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
  newAccPass: {
    fontSize: 17,
    fontWeight: "600",
    color: Colors.grey,
    marginTop: 15,
    textAlign: "center",
    marginBottom: 50,
  },
  forgtPass: {
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.primaryColor,
  },
});

export default CompleteProfile;
