//@ts-nocheck
import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Images } from "../../assets/index";
import { Colors } from "../../Helper/Colors";
import CustomButton from "../../Components/CustomButton";
import CustomTextInput from "../../Components/CustomTextInput";

const ForgotPassword = ({ navigation, route }: any) => {
  const [email, setEmail] = useState("");

  const navigateToVerfyOTP = () => {
    navigation.navigate("VerifyOTP", { email: email });
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={Images.AppLogo} resizeMode="contain" style={styles.logo} />
      <Text style={styles.title}>{"Forgot Password?"}</Text>
      <Text style={styles.title2}>
        {"Please enter your email address to get OTP for the verification."}
      </Text>
      <View>
        <CustomTextInput
          label={"Email address"}
          placeholderText={"Enter Email Here"}
          value={email}
          onChangeText={setEmail}
        />
        <CustomButton onPress={navigateToVerfyOTP} marginTop={50}>
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

export default ForgotPassword;
