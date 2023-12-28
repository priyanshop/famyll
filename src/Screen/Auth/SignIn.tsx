//@ts-nocheck
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Images } from "../../assets/index";
import { Colors } from "../../Helper/Colors";
import CustomButton from "../../Components/CustomButton";
import CustomTextInput from "../../Components/CustomTextInput";

const SignInScreen = ({ navigation, route }: any) => {
  const [screenName, setScreenName] = useState("Plan Owner");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (route.params) {
      if (route.params.isMember) {
        setScreenName("Member");
      }
      if (route.params.isPlan) {
        setScreenName("Plan Owner");
      }
      if (route.params.isProvider) {
        setScreenName("Provider");
      }
    }
  }, [route.params]);

  const navigateToForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };

  const navigateToHome = () => {
    if (route.params.isMember) {
      navigation.navigate("MemberHome");
    }
    if (route.params.isPlan) {
      navigation.navigate("Home");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={Images.AppLogo} resizeMode="contain" style={styles.logo} />
      <Text style={styles.title}>{"Sign in to " + screenName}</Text>
      <Text style={styles.title2}>{"Enter your details to continue."}</Text>
      <View>
        <CustomTextInput
          label={"Email address"}
          placeholderText={"Enter Email Here"}
          value={email}
          onChangeText={setEmail}
        />
        <CustomTextInput
          label={"Password"}
          secureTextEntry={true}
          placeholderText={"Enter Password Here"}
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.forgotView}>
          <Text onPress={navigateToForgotPassword} style={styles.forgtPass}>
            {"Forgot Password?"}
          </Text>
        </View>
        <CustomButton onPress={navigateToHome} marginTop={50}>
          Sign In
        </CustomButton>
        <View>
          <Text style={styles.newAccPass}>
            {"Don’t have an account? "}
            <Text onPress={navigateToSignUp} style={styles.forgtPass}>
              {"Sign Up"}
            </Text>
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
  forgtPass: {
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.primaryColor,
  },
  newAccPass: {
    fontSize: 17,
    fontWeight: "600",
    color: Colors.grey,
    marginTop: 15,
    textAlign: "center",
  },
});

export default SignInScreen;
