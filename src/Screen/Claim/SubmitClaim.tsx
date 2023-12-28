import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Checkbox } from "react-native-paper";
import { Overlay } from "react-native-elements";

import CustomButton from "../../Components/CustomButton";
import CustomDropdown from "../../Components/CustomDropdown";
import CustomHeader from "../../Components/CustomHeader";
import CustomTextInput from "../../Components/CustomTextInput";
import { Colors } from "../../Helper/Colors";
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

const CustomCheckbox = ({ label, isChecked, onToggle }: any) => {
  return (
    <View style={styles.checkboxContainer}>
      <Checkbox.Android
        status={isChecked ? "checked" : "unchecked"}
        onPress={() => {}}
        color={Colors.primaryColor}
      />
      <Text style={isChecked ? styles.selectedCheck : styles.unSelectedCheck}>
        {label}
      </Text>
    </View>
  );
};

const SubmitClaim = ({ navigation, route }: any) => {
  const [selectedConditions, setSelectedConditions] = useState(new Set());
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);

  const [termCheck, setTermCheck] = useState(false);

  const healthConditions = [
    "HIV/AIDS",
    "Cancer",
    "Diabetes",
    "High Blood Pressure",
    "None",
  ];


  useLayoutEffect(() => {
    navigation.setOptions({
      header: (props:any) => (
        <CustomHeader
          title={"Submit Claim"}
          navigation={navigation}
        />
      ),
    });
  }, [navigation, route]);

  const toggleCondition = (condition:any) => {
    const newSelectedConditions = new Set(selectedConditions);
    if (selectedConditions.has(condition)) {
      newSelectedConditions.delete(condition);
    } else {
      newSelectedConditions.add(condition);
    }
    setSelectedConditions(newSelectedConditions);
  };


  const onBackdropPress = () => {
    setIsVisible(!isVisible);
  };
  const onBackdropPress1 = () => {
    setIsVisible1(!isVisible1);
  };
  return (
    <SafeAreaView style={{ backgroundColor: Colors.bg, flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={{ marginTop: 5, paddingBottom: 160 }}>
          <View style={styles.contactInfo}>
            <View>
              <Text style={[styles.welcome, { marginVertical: 10 }]}>
                {"Membership Number"}
              </Text>
              <Text style={styles.value2}>
                {
                  "Please enter the Membership Number of Member for which you want to submit a claim."
                }
              </Text>
              <CustomTextInput
                label={"Membership Number"}
                placeholderText={"Enter Membership Number"}
                value={""}
                onChangeText={() => {}}
              />
              <Text style={[styles.welcome, { marginVertical: 10 }]}>
                {"Type of Visit"}
              </Text>

              <CustomCheckbox label="Sick Visit" isChecked={true} />
              <Text style={[styles.optionText, { marginVertical: 10 }]}>
                {"Patient has pre-existing condition of"}
              </Text>
              <View>
                <Text style={styles.row}>
                  {healthConditions.map((condition) => (
                    <View key={condition} style={styles.checkboxContainer}>
                      <Checkbox.Android
                        status={
                          selectedConditions.has(condition)
                            ? "checked"
                            : "unchecked"
                        }
                        onPress={() => toggleCondition(condition)}
                        color={Colors.primaryColor}
                      />
                      <Text
                        style={
                          selectedConditions.has(condition)
                            ? styles.selectedCheck
                            : styles.unSelectedCheck
                        }
                      >
                        {condition}
                      </Text>
                    </View>
                  ))}
                </Text>
              </View>
              <View style={styles.line} />

              <CustomCheckbox label="Annual Physical Exam" isChecked={true} />
              <Text style={[styles.optionText, { marginVertical: 10 }]}>
                {"Patient has pre-existing condition of"}
              </Text>
              <View>
                <Text style={styles.row}>
                  {healthConditions.map((condition) => (
                    <View key={condition} style={styles.checkboxContainer}>
                      <Checkbox.Android
                        status={
                          selectedConditions.has(condition)
                            ? "checked"
                            : "unchecked"
                        }
                        onPress={() => toggleCondition(condition)}
                        color={Colors.primaryColor}
                      />
                      <Text
                        style={
                          selectedConditions.has(condition)
                            ? styles.selectedCheck
                            : styles.unSelectedCheck
                        }
                      >
                        {condition}
                      </Text>
                    </View>
                  ))}
                </Text>
              </View>
              <View style={styles.line} />

              <CustomCheckbox label="New diagnosis" isChecked={true} />
              <Text style={[styles.optionText, { marginVertical: 10 }]}>
                {"Patient is newly diagnosed with"}
              </Text>
              <View>
                <Text style={styles.row}>
                  {healthConditions.map((condition) => (
                    <View key={condition} style={styles.checkboxContainer}>
                      <Checkbox.Android
                        status={
                          selectedConditions.has(condition)
                            ? "checked"
                            : "unchecked"
                        }
                        onPress={() => toggleCondition(condition)}
                        color={Colors.primaryColor}
                      />
                      <Text
                        style={
                          selectedConditions.has(condition)
                            ? styles.selectedCheck
                            : styles.unSelectedCheck
                        }
                      >
                        {condition}
                      </Text>
                    </View>
                  ))}
                </Text>
              </View>
              <View style={styles.line} />

              <CustomCheckbox label="Imaging Visit" isChecked={true} />
              <Text style={[styles.optionText, { marginVertical: 10 }]}>
                {"Select type of imaging center."}
              </Text>
              {[0, 0, 0, 0, 0, 0].map(() => (
                <>
                  <CustomCheckbox label="EKG" isChecked={true} />
                  <CustomTextInput
                    label={""}
                    placeholderText={"Specify Exam Type"}
                    value={""}
                    onChangeText={() => {}}
                  />
                </>
              ))}
              <View style={styles.line} />
              <CustomCheckbox label="Lab Visit" isChecked={true} />
              <Text style={[styles.optionText, { marginVertical: 10 }]}>
                {"Select type of imaging center."}
              </Text>
              <CustomTextInput
                label={"Type Visit"}
                placeholderText={"Enter Test Type"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomTextInput
                label={"Description"}
                placeholderText={"Enter Description"}
                value={""}
                onChangeText={() => {}}
              />
              <View style={styles.line} />

              <CustomCheckbox label="Radiation Therapy" isChecked={true} />
              <CustomTextInput
                label={"Diagnosis "}
                placeholderText={"Enter Diagnosis"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomTextInput
                label={"Prescribed Treatment"}
                placeholderText={"Enter Here"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomDropdown
                data={data}
                onSelect={(selectedItem:any) => {}}
                placeholder={"Treatment Sessions(1-100)"}
                label={"Treatment Sessions"}
              />
              <View style={styles.line} />

              <CustomCheckbox label="Hospitalization" isChecked={true} />
              <CustomTextInput
                label={"Specify Reason"}
                placeholderText={"Enter Here"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomDropdown
                data={data}
                onSelect={(selectedItem:any) => {}}
                placeholder={"From 1-180 Days"}
                label={"Length of Stay"}
              />
              <View style={styles.line} />

              <CustomCheckbox label="Surgery" isChecked={true} />
              <CustomTextInput
                label={"Specify Procedure"}
                placeholderText={"Enter Here"}
                value={""}
                onChangeText={() => {}}
              />
              <View style={styles.line} />

              <CustomCheckbox label="Chemotherapy" isChecked={true} />
              <CustomTextInput
                label={"Diagnosis "}
                placeholderText={"Enter Diagnosis"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomTextInput
                label={"Prescribed Treatment"}
                placeholderText={"Enter Here"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomDropdown
                data={data}
                onSelect={(selectedItem:any) => {}}
                placeholder={"Treatment Sessions(1-100)"}
                label={"Treatment Sessions"}
              />
              <View style={styles.line} />

              <CustomCheckbox label="Pharmacy" isChecked={true} />
              <CustomTextInput
                label={"Specify Rx"}
                placeholderText={"Enter Diagnosis"}
                value={""}
                onChangeText={() => {}}
              />
              <View style={styles.line} />

              <CustomCheckbox label="Other" isChecked={false} />
              <Text style={[styles.optionText, { marginVertical: 10 }]}>
                {"Write other reason"}
              </Text>

              <Text style={[styles.welcome, { marginVertical: 10 }]}>
                {"Service Information"}
              </Text>
              <CustomTextInput
                label={"Date of Service "}
                placeholderText={"Enter Date of Service"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomTextInput
                label={"Cost of Service (In FCFA)"}
                placeholderText={"Enter Cost of Service"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomTextInput
                label={"Amount to e Reimbursed (In FCFA) "}
                placeholderText={"Enter Amount "}
                value={""}
                onChangeText={() => {}}
              />
              <Text style={[styles.optionText, { marginVertical: 10 }]}>
                {
                  "*Amount to be reimbursed can not be more than cost of service."
                }
              </Text>

              <Text style={[styles.welcome, { marginVertical: 10 }]}>
                {"Upload Documents"}
              </Text>
              <Text style={styles.uploadImageTxt}>
                {"Upload Copy of Membership Card"}
              </Text>
              <View style={styles.dashedBox}>
                <View style={styles.buttonView}>
                  <TouchableOpacity style={styles.button2}>
                    <Text style={styles.buttonText}>Add More</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.uploadImageTxt}>
                {"Upload Copy of Service Note"}
              </Text>
              <View style={styles.dashedBox}>
                <View style={styles.buttonView}>
                  <TouchableOpacity onPress={onBackdropPress1} style={styles.button2}>
                    <Text style={styles.buttonText}>Add More</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomTab}>
        <View>
          <Text style={styles.terms}>{"Total Payout"}</Text>
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
          <Text style={styles.welcome}>{"Claim Submitted Successfully."}</Text>
        </View>
        <View style={styles.desctiptionView}>
          <Text style={styles.countineTxt}>
            {"You have successfully submitted your claim for the member #FML1000M. You will receive your payout in next 7 days."}
          </Text>
        </View>
        <View style={{ padding: 0 }}>
          <CustomButton onPress={onBackdropPress} marginTop={10}>{"Okay"}</CustomButton>
        </View>
      </Overlay>
      <Overlay
        animationType={"slide"}
        isVisible={isVisible1}
        onBackdropPress={onBackdropPress1}
        overlayStyle={styles.bottomSheetContainer}
      >
        <View style={styles.SureView}>
          <Text style={styles.welcome}>{"Unable to Submit"}</Text>
        </View>
        <View style={styles.desctiptionView}>
          <Text style={styles.countineTxt}>
            {"Your claim for the member #FML1000M has been cancelled due to member's visit exceeded available plan limit. We strongly recommend you verify each member's coverage before proceeding to provide care. To cover this visit, the member's Plan Owner must up their plan's visit limit for this service."}
          </Text>
        </View>
        <View style={{ padding: 0 }}>
          <CustomButton onPress={onBackdropPress1} marginTop={10}>{"Okay, Got it."}</CustomButton>
        </View>
      </Overlay>
    </SafeAreaView>
  );
};

export default SubmitClaim;

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
  contactInfo: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
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
    color: "#332640",
  },
  uploadImageTxt: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.labelTxt,
    paddingHorizontal: 5,
    marginTop: 10,
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
  optionText: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.defualtTxtColor,
  },
  row: {
    flexDirection: "row",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  selectedCheck: {
    fontSize: 16,
    fontWeight: "400",
    color: "#150425",
  },
  unSelectedCheck: {
    fontSize: 16,
    fontWeight: "400",
    color: "#7E7585",
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
        elevation: 4,
      },
    }),
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
    textAlign: "center",
    paddingHorizontal: 20,
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
