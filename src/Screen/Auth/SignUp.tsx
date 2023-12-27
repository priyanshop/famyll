//@ts-nocheck
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Checkbox } from "react-native-paper";
import { Images } from "../../assets/index";
import { Colors } from "../../Helper/Colors";
import CustomButton from "../../Components/CustomButton";
import CustomTextInput from "../../Components/CustomTextInput";

const SignUp = ({ navigation, route }: any) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isBusinessAccount, setIsBusinessAccount] = useState(false);
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [legalAuthority, setLegalAuthority] = useState(false);
  const [signature, setSignature] = useState("");
  const navigateToHome = () => {
    navigation.navigate("Home");

  };

  const navigateToSignInScreen = () => {
    navigation.navigate("SignInScreen");
  };
  return (
    <ScrollView style={styles.container}>
      <Image source={Images.AppLogo} resizeMode="contain" style={styles.logo} />
      <Text style={styles.title}>{"Create Account"}</Text>
      <Text style={styles.title2}>
        {"Enter necessary details to create your account."}
      </Text>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <CustomTextInput
            label={"First Name"}
            placeholderText={"Enter First Name"}
            value={firstName}
            onChangeText={firstName}
          />
          <CustomTextInput
            label={"Last Name"}
            placeholderText={"Enter Last Name"}
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Checkbox.Android
            status={isBusinessAccount ? "checked" : "unchecked"}
            onPress={() => {
              setBusinessName(!isBusinessAccount);
            }}
            color={Colors.primaryColor}
          />
          <Text style={styles.checkBoxText}>
            {"This is a Business Account."}
          </Text>
        </View>
        <CustomTextInput
          label={"Name of Business"}
          placeholderText={"Enter Business Name"}
          value={businessName}
          onChangeText={setBusinessName}
        />
        <CustomTextInput
          label={"Email Address"}
          placeholderText={"Enter Email Address"}
          value={email}
          onChangeText={setEmail}
        />
        <CustomTextInput
          label={"Password"}
          placeholderText={"Enter Password Here"}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <CustomTextInput
            label={"City Name"}
            placeholderText={"Enter City"}
            value={city}
            onChangeText={setCity}
          />
          <CustomTextInput
            label={"Country"}
            placeholderText={"Enter Country"}
            value={country}
            onChangeText={setCountry}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Checkbox.Android
            status={legalAuthority ? "checked" : "unchecked"}
            onPress={() => {
              setLegalAuthority(!legalAuthority);
            }}
            color={Colors.primaryColor}
          />
          <View style={{ paddingRight: 25, marginTop: 5 }}>
            <Text style={styles.checkBoxText2}>
              {
                "I certify that I have the legal authority to create this account and engage on this site as Plan Administrator on behalf of the above stated business. I understand that creating this account, my first name and last name represent my electronic signature."
              }
            </Text>
          </View>
        </View>
        <CustomButton onPress={navigateToHome} marginTop={25}>
          Create Account
        </CustomButton>
        <View>
          <Text style={styles.newAccPass}>
            {"Already have an account? "}
            <Text onPress={navigateToSignInScreen} style={styles.forgtPass}>{"Sign In"}</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 25,
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
  checkBoxText: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.defualtTxtColor,
  },
  checkBoxText2: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.defualtTxtColor,
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

export default SignUp;
