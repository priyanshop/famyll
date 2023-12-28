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

const MakeClaim = ({ navigation, route }: any) => {
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      header: (props) => (
        <CustomHeader title={"Make a Claim"} navigation={navigation} />
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
              <Text style={styles.welcome2}>{"Make Claim"}</Text>
              <Text style={styles.value2}>
                {"Please provide the details to complete your claim process."}
              </Text>
              <CustomDropdown
                data={data}
                onSelect={(selectedItem) => {}}
                placeholder={"Select Visit Type"}
                label={"Enter Visit Type"}
              />
              <CustomTextInput
                label={"Enter Date of Service"}
                placeholderText={"DD/MM/YYYY"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomTextInput
                label={"Service Provider"}
                placeholderText={"Enter Service Provider"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomTextInput
                label={"Enter Amount to Reimburse"}
                placeholderText={"Enter Amount Here"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomTextInput
                label={"Wallet Number"}
                placeholderText={"Enter Your Wallet Number"}
                value={""}
                onChangeText={() => {}}
              />
              <Text style={styles.heading2}>
                {
                  "*In a case where we do not have a provider in our network for that specific service, we shall reimburse at 100% ."
                }
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomTab}>
        <View>
          <Text style={styles.terms}>
            {
              "You will get 50% of amount as a reimbursement from entered amount"
            }
          </Text>
          <Text style={styles.welcome}>{"$XXXX"}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity onPress={onBackdropPress} style={styles.skipBtn2}>
            <Text style={styles.skipText2}>{"Submit Claim"}</Text>
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
            {
              "You have successfully secured the health of your family. Their coverage will begin after a 6 months mandatory wait period, that is on xx/xx/xx (enter exact day)."
            }
          </Text>
        </View>
        <View style={{ padding: 0 }}>
          <CustomButton marginTop={10}>{"Continue"}</CustomButton>
        </View>
      </Overlay>
    </SafeAreaView>
  );
};

export default MakeClaim;

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
  welcome2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 15,
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
    fontSize: 16,
    fontWeight: "400",
    color: "#7E7585",
    marginTop: 20,
  },
  value2: {
    fontSize: 16,
    fontWeight: "500",
    color: "#332640",
    marginTop: 5,
    marginBottom: 25,
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
    borderRadius: 16,
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
