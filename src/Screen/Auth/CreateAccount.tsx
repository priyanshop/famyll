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
import CustomDropdown from "../../Components/CustomDropdown";

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];

const CreateAccount = ({ navigation, route }: any) => {
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const navigateToHome = () => {
    navigation.navigate("Home");
  };

  const navigateToSignInScreen = () => {
    navigation.navigate("SignInScreen", {
      isMember: false,
      isPlan: false,
      isProvider: true,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={Images.AppLogo} resizeMode="contain" style={styles.logo} />
      <Text style={styles.title}>{"Create Account"}</Text>
      <Text style={styles.title2}>
        {"Enter necessary details to create your account."}
      </Text>
      <View>
        <CustomTextInput
          label={"Business Name"}
          placeholderText={"Enter Your Business Name"}
          value={businessName}
          onChangeText={setBusinessName}
        />
        <CustomDropdown
          data={data}
          onSelect={(selectedItem) => {}}
          placeholder={"Select Provider Type"}
          label={"Type of Provider"}
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
        <CustomButton onPress={navigateToHome} marginTop={25}>
          Create Account
        </CustomButton>
        <View>
          <Text style={styles.newAccPass}>
            {"Already have an account? "}
            <Text onPress={navigateToSignInScreen} style={styles.forgtPass}>
              {"Sign In"}
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

export default CreateAccount;
