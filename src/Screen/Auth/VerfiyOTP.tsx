//@ts-nocheck
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Images } from "../../assets/index";
import { Colors } from "../../Helper/Colors";
import CustomButton from "../../Components/CustomButton";
import CustomTextInput from "../../Components/CustomTextInput";

const VerifyOTP = ({ navigation, route }: any) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  useEffect(() => {
    if (route.params) {
      setEmail(route.params.email);
    }
  }, [route.params]);

  const navigateToResetPassword = () => {
    navigation.navigate("ResetPassword");
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={Images.AppLogo} resizeMode="contain" style={styles.logo} />
      <Text style={styles.title}>{"Verify OTP"}</Text>
      <Text style={styles.title2}>
        {"Please enter the OTP that we sent to "}
        <Text style={styles.email}>{email}</Text>
        {" for the verification."}
      </Text>
      <View>
        <CustomTextInput
          label={"OTP"}
          placeholderText={"Enter OTP Here"}
          value={otp}
          onChangeText={setOtp}
        />
        <View style={styles.forgotView}>
          <Text style={styles.countDownMsg}>
            {"Resend OTP in "}
            <Text style={styles.countDownTxt}>{seconds}</Text>
            {" Seconds."}
          </Text>
        </View>
        <CustomButton onPress={navigateToResetPassword} marginTop={50}>
          {"Submit"}
        </CustomButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  forgotView: {
    flexDirection: "row",
    justifyContent: "flex-end",
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
  email: {
    fontSize: 17,
    fontWeight: "400",
    color: Colors.selectedEmail,
    marginBottom: 15,
  },
  countDownTxt: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.primaryColor,
  },
  countDownMsg: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.defualtTxtColor,
  },
});

export default VerifyOTP;
