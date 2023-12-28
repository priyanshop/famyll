import React, { useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Overlay } from "react-native-elements";
import { Images } from "../../assets/index";
import { Colors } from "../../Helper/Colors";
import CustomButton from "../../Components/CustomButton";
import CustomTextInput from "../../Components/CustomTextInput";

const CompleteProfile = ({ navigation, route }: any) => {
  const [newPassword, setNewPassword] = useState("");
  const [confrimPassword, setConfrimPassword] = useState("");
  const [memberNo, setMemberNo] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const navigateToVerfyOTP = () => {};
  const onBackdropPress = () => {
    setIsVisible(!isVisible);
  };

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
        <CustomButton onPress={onBackdropPress} marginTop={25}>
          Sign Up
        </CustomButton>
        <View>
          <Text style={styles.newAccPass}>
            {"Already have an account? "}
            <Text style={styles.forgtPass}>{"Sign In"}</Text>
          </Text>
        </View>
      </View>
      <Overlay
        animationType={"slide"}
        isVisible={isVisible}
        onBackdropPress={onBackdropPress}
        overlayStyle={styles.bottomSheetContainer}
      >
        <View style={styles.SureView}>
          <Text style={styles.welcome}>{"Account Approval"}</Text>
        </View>
        <View style={styles.desctiptionView}>
          <Text style={styles.countineTxt}>
            {"We will get back to you with an email to confirm your account"}
          </Text>
        </View>
        <View style={{ padding: 10 }}>
          <CustomButton onPress={onBackdropPress} marginTop={10}>{"Okay"}</CustomButton>
        </View>
      </Overlay>
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
  bottomSheetContainer: {
    backgroundColor: "#F8FAFE",
    width: "90%",
    padding: 15,
    borderRadius:16,
  },
  countineTxt: {
    fontSize: 17,
    fontWeight: "400",
    color: "#574766",
    paddingHorizontal: 20,
  },
  cancelBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    width: "100%",
    padding: 16,
    marginVertical: 5,
    backgroundColor: "#EBF3F7",
    justifyContent: "center",
  },
  cancelTxt: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0B1B22",
  },
  desctiptionView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
  },
  SureView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  welcome: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#000",
  },
});

export default CompleteProfile;
