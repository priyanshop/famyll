import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { Overlay } from "react-native-elements";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Images } from "../../assets";

import CustomHeader from "../../Components/CustomHeader";
import CustomTextInput from "../../Components/CustomTextInput";
import { Colors } from "../../Helper/Colors";
import CustomButton from "../../Components/CustomButton";

const CompletePayment = ({ navigation, route }: any) => {
    const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      header: (props) => (
        <CustomHeader title={"Complete Payment"} navigation={navigation} />
      ),
    });
  }, [navigation, route]);

  const navigateTo = () => {
    navigation.navigate("ProviderDetails", {
      toAdd: true,
    });
  };

  const onBackdropPress = () => {
    setIsVisible(!isVisible);
  };

  return (
    <SafeAreaView style={{ backgroundColor: Colors.bg, flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={{ marginTop: 5, paddingBottom: 170 }}>
          <View style={styles.contactInfo}>
            <View>
              <Text style={styles.value2}>
                {"Continue your payment with card"}
              </Text>
              <View style={styles.radioView}>
                <RadioButton.Android
                  value={true}
                  status={true ? "checked" : "unchecked"}
                  onPress={() => {}}
                  color={Colors.primaryColor}
                />
                <Text style={[styles.optionText]}>{"Payment With Card"}</Text>
              </View>
              <Image
                source={Images.VisaCard}
                resizeMode={"contain"}
                style={{ height: 200, width: "100%" }}
              />
              <View style={styles.radioView}>
                <RadioButton.Android
                  value={true}
                  status={true ? "checked" : "unchecked"}
                  onPress={() => {}}
                  color={Colors.primaryColor}
                />
                <Text style={[styles.optionText]}>{"Add New Card"}</Text>
              </View>
              <View style={styles.dashedBox}>
                <View style={styles.buttonView}>
                  <TouchableOpacity style={styles.button}>
                    <AntDesign name="plus" size={15} color={"#574766"} />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={[styles.titleText]}>
                {"Fill up your card details"}
              </Text>
              <CustomTextInput
                label={"Name on Card"}
                placeholderText={"Enter Name on Card"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomTextInput
                label={"Card Number"}
                placeholderText={"Enter Card Number"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomTextInput
                label={"CVV Number"}
                placeholderText={"Enter CVV Number"}
                value={""}
                onChangeText={() => {}}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomTab}>
        <View>
          <Text style={styles.terms}>
            {
              "Total Amount (Applied 10% discount for adding 5 or more than 5 members.)"
            }
          </Text>
          <Text style={styles.welcome}>{"$XXXX"}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity onPress={onBackdropPress} style={styles.skipBtn2}>
            <Text style={styles.skipText2}>{"Complete Payment"}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Overlay
        animationType={"slide"}
        isVisible={isVisible}
        onBackdropPress={onBackdropPress}
        overlayStyle={styles.bottomSheetContainer}
      >
        <View style={styles.SureView}>
          <Text style={styles.welcome}>{"Congratulations!"}</Text>
        </View>
        <View style={styles.desctiptionView}>
          <Text style={styles.countineTxt}>
            {"You have successfully secured the health of your family. Their coverage will begin after a 6 months mandatory wait period, that is on xx/xx/xx (enter exact day)."}
          </Text>
        </View>
        <View style={{ padding: 0 }}>
          <CustomButton marginTop={10}>{"Continue"}</CustomButton>
        </View>
      </Overlay>
    </SafeAreaView>
  );
};

export default CompletePayment;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: Colors.bg,
    flexGrow: 1,
  },
  container2: {
    justifyContent: "space-between",
  },
  welcome: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#000",
  },
  contactInfo: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginVertical: 5,
  },
  card: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  details: {
    flex: 0.7,
  },
  button: {
    backgroundColor: "#EBF3F7",
    padding: 13,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    alignSelf: "flex-start",
  },
  value: {
    fontSize: 12,
    fontWeight: "500",
    color: "#332640",
  },
  line: {
    height: 1,
    backgroundColor: "#E3E1E5",
    width: "100%",
    marginVertical: 10,
  },
  heading2: {
    fontSize: 14,
    fontWeight: "500",
    color: "#8B7F97",
  },
  value2: {
    fontSize: 16,
    fontWeight: "500",
    color: "#332640",
    marginTop: 5,
  },
  skipText2: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  skipBtn2: {
    flexDirection: "row",
    alignItems: "center",
    padding: 13,
    borderRadius: 25,
    backgroundColor: Colors.primaryColor,
    justifyContent: "center",
    marginTop: 5,
    borderWidth: 1.5,
    flex: 1,
    marginHorizontal: 5,
    paddingHorizontal: 12,
    borderColor: Colors.primaryColor,
  },
  terms: {
    fontSize: 17,
    fontWeight: "500",
    color: "#826C99",
  },
  bottomTab: {
    width: "100%",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    padding: 20,
    paddingBottom: 40,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4, // Elevation for shadow on Android
      },
    }),
  },
  optionText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#574766",
  },
  radioView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  dashedBox: {
    borderWidth: 1.5,
    borderRadius: 16,
    borderColor: Colors.defualtTxtColor,
    borderStyle: "dashed",
    padding: 55,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonView: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 19,
    fontWeight: "500",
    color: "#574766",
    marginTop: 15,
  },
  bottomSheetContainer: {
    // position: "absolute",
    // bottom: 0,
    // left: 0,
    // right: 0,
    height: "30%",
    backgroundColor: "#F8FAFE",
    width: "90%",
    // paddingBottom: 0,
    // paddingHorizontal: 0,
    // borderTopRightRadius: 16,
    // borderTopLeftRadius: 16,
    padding: 15,
    borderRadius:16,
  },
  countineTxt: {
    fontSize: 17,
    fontWeight: "400",
    color: "#574766",
    textAlign: "center",
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
    padding: 15,
  },
  SureView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
});
