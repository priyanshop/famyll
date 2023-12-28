import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import CustomButton from "../../Components/CustomButton";
import CustomTextInput from "../../Components/CustomTextInput";
import { Colors } from "../../Helper/Colors";

const CustomComponent = ({ label, onPress }: any) => {
  return (
    <View style={styles.containerOK}>
      <View style={styles.leftContainer}>
        <Text style={styles.welcome}>{label}</Text>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.button2} onPress={onPress}>
          <Text style={styles.buttonText}>{"Add More"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const MyChip = ({ onPress, label }: any) => (
  <TouchableOpacity style={styles.clipView} onPress={onPress}>
    <Text style={styles.unSelectedCheck}>{" " + label + " "}</Text>
    <Feather name="x-circle" size={20} color={"#7E7585"} />
  </TouchableOpacity>
);

const ServiceInfo = ({ navigation, route }: any) => {
  return (
    <SafeAreaView style={{ backgroundColor: Colors.bg, flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.headerView}>
          <View style={styles.innerHeader}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Entypo name="chevron-thin-left" size={18} color="#332640" />
            </TouchableOpacity>
          </View>
        </View>
        <View></View>
        <View style={{ marginTop: 5, paddingBottom: 50 }}>
          <Text style={styles.welcome}>{"Service Information"}</Text>
          <Text style={styles.value2}>
            {"Kindly enter your service details here to complete your profile."}
          </Text>
          <View style={styles.contactInfo}>
            <View>
              <Text
                style={[styles.welcome, { marginVertical: 10, fontSize: 20 }]}
              >
                {"Personal Information & Education"}
              </Text>
              <Text style={styles.uploadImageTxt}>
                {"Upload Profile Image"}
              </Text>
              <View style={styles.dashedBox}>
                <View style={styles.buttonView}>
                  <TouchableOpacity style={styles.button}>
                    <AntDesign name="plus" size={15} color={"#574766"} />
                  </TouchableOpacity>
                  <Text style={styles.uploadImageInnerTxt}>
                    {"Upload Profile Image Here"}
                  </Text>
                </View>
              </View>
              <CustomTextInput
                label={"First Name"}
                placeholderText={"Enter First Name"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomTextInput
                label={"Middle Name"}
                placeholderText={"Enter Middle Name"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomTextInput
                label={"Last Name"}
                placeholderText={"Enter Last Name"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomTextInput
                label={"Medical School Attended*"}
                placeholderText={"Enter Name Here"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomTextInput
                label={"Graduation Year*"}
                placeholderText={"Enter Graduation Year"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomTextInput
                label={"Years of Experience"}
                placeholderText={"Enter Years of Experience"}
                value={""}
                onChangeText={() => {}}
              />
              <Text style={styles.welcome2}>{"Location Details"}</Text>
              <CustomTextInput
                label={"City Name*"}
                placeholderText={"Enter City Name"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomTextInput
                label={"State Name*"}
                placeholderText={"Enter State Name"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomTextInput
                label={"Country Name*"}
                placeholderText={"Enter Country Name"}
                value={""}
                onChangeText={() => {}}
              />
              <Text style={styles.welcome2}>{"Primary Clinic*"}</Text>
              <CustomTextInput
                label={"Phone Number*"}
                placeholderText={"Enter Phone Number"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomTextInput
                label={"Business Address* "}
                placeholderText={"Write Address Here"}
                value={""}
                onChangeText={() => {}}
              />
              <Text style={styles.welcome2}>{"Primary Hospital"}</Text>
              <CustomTextInput
                label={"Phone Number"}
                placeholderText={"Enter Phone Number"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomTextInput
                label={"Business Address "}
                placeholderText={"Write Address Here"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomComponent label={"Affiliated Hospital (Optional)"} />
              <CustomTextInput
                label={"Business Address "}
                placeholderText={"Write Address Here"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomComponent label={"Affiliated Clinic (Optional)"} />
              <CustomTextInput
                label={"Business Address "}
                placeholderText={"Write Address Here"}
                value={""}
                onChangeText={() => {}}
              />
              <Text style={styles.welcome2}>{"Consultation*"}</Text>
              <CustomTextInput
                label={"Consultation Days*"}
                placeholderText={"Enter Consultation Days"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomTextInput
                label={"Consultation Hours* "}
                placeholderText={"Enter Consultation Hours"}
                value={""}
                onChangeText={() => {}}
              />
              <Text style={styles.welcome2}>
                {"List of Services You Provide*"}
              </Text>
              <CustomTextInput
                label={"Service List with Cost*"}
                placeholderText={"Enter Here"}
                value={""}
                onChangeText={() => {}}
              />
              <View>
                <Text>
                  <View style={{ margin: 5 }}>
                    <MyChip label={"Radiation Therapy Cost:156 FCFA"} />
                  </View>
                </Text>
              </View>
              <View>
                <CustomButton marginTop={20}>Submit</CustomButton>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ServiceInfo;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: Colors.bg,
    flexGrow: 1,
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
    marginVertical: 10,
  },
  contactInfo: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 16,
    marginVertical: 15,
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
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#EEEBF0",
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    backgroundColor: "#EBF3F7",
    padding: 13,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#0B1B22",
    fontSize: 14,
    fontWeight: "600",
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
    marginTop: 10,
  },
  value2: {
    fontSize: 14,
    fontWeight: "500",
    color: "#574766",
    marginTop: 5,
  },
  uploadImageTxt: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.labelTxt,
    paddingHorizontal: 5,
    marginTop: 10,
  },
  uploadImageInnerTxt: {
    fontSize: 16,
    fontWeight: "500",
    color: "#7E7585",
    marginTop: 5,
  },
  dashedBox: {
    borderWidth: 1.5,
    borderRadius: 16,
    borderColor: Colors.defualtTxtColor,
    borderStyle: "dashed",
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonView: {
    justifyContent: "center",
    alignItems: "center",
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    padding: 5,
    paddingRight: 12,
    marginVertical: 5,
  },
  selectedOption: {
    backgroundColor: "#F1EBF7",
  },
  optionText: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.defualtTxtColor,
  },
  selectedOptionText: {
    color: "#000000",
  },
  radioRow: {
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: Colors.defualtTxtColor,
    marginBottom: 5,
  },
  viewPlanTxt: {
    fontSize: 15,
    fontWeight: "600",
    color: Colors.primaryColor,
  },
  planName: {
    fontSize: 17,
    fontWeight: "600",
    color: "#332640",
  },
  planPrice: {
    fontSize: 19,
    fontWeight: "600",
    color: "#332640",
  },
  planOri: {
    fontSize: 18,
    fontWeight: "600",
    color: "#826C99",
  },
  annualPriceTxt: {
    fontSize: 18,
    fontWeight: "600",
    color: "#7E7585",
  },
  annualPrice: {
    fontSize: 19,
    fontWeight: "600",
    color: Colors.primaryColor,
  },
  ViewBtn: {
    padding: 8,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    borderRadius: 22,
    paddingHorizontal: 10,
  },
  cardView: {
    borderWidth: 1.5,
    borderRadius: 12,
    padding: 18,
    borderColor: Colors.primaryColor,
    marginVertical: 5,
  },
  cardImgView: {
    borderRadius: 12,
  },
  cardFirstRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  annualView: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    marginTop: 15,
  },
  lowRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  selectedCheck: {
    fontSize: 16,
    fontWeight: "400",
    color: "#150425",
  },
  unSelectedCheck: {
    fontSize: 17,
    fontWeight: "400",
    color: "#7E7585",
  },
  unSelectedCheck2: {
    fontSize: 16,
    fontWeight: "400",
    color: "#574766",
  },
  low2Row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  containerOK: {
    flex: 1,
    flexDirection: "row",
    marginTop: 15,
  },
  leftContainer: {
    flex: 0.5,
  },
  rightContainer: {
    flex: 0.5,
    alignItems: "flex-end",
  },
  clipView: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1EBF7",
    justifyContent: "space-between",
    padding: 5,
    borderRadius: 20,
    paddingRight: 5,
  },
  innerHeader: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 15,
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.bg,
  },
});
