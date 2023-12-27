import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
} from "react-native";
import { Checkbox, RadioButton } from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";
import { Images } from "../../assets";
import CustomButton from "../../Components/CustomButton";
import CustomDropdown1 from "../../Components/CustomDropDown1";
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

const plan = [
  {
    Plan: "Basic Plan",
    "Monthly Price": "$18",
    "Annual Membership": "$15",
  },
  {
    Plan: "Specialist Plan",
    "Monthly Price": "$20",
    "Annual Membership": "$15",
  },
  {
    Plan: "BYOP (Build Your Own Plan)",
    "Monthly Price": "$90.62",
    "Annual Membership": "$XX",
  },
];

const UserTypeOption = ({
  option,
  selectedOption,
  handleOptionChange,
}: any) => (
  <TouchableOpacity
    key={option.value}
    style={[
      styles.optionContainer,
      selectedOption === option.value ? styles.selectedOption : null,
    ]}
    onPress={() => handleOptionChange(option.value)}
  >
    <RadioButton.Android
      value={option.value}
      status={selectedOption === option.value ? "checked" : "unchecked"}
      onPress={() => handleOptionChange(option.value)}
      color={Colors.primaryColor}
    />
    <Text
      style={[
        styles.optionText,
        selectedOption === option.value ? styles.selectedOptionText : null,
      ]}
    >
      {option.label}
    </Text>
  </TouchableOpacity>
);

const AddMemberScreen = ({ navigation, route }: any) => {
  const [selectedOption, setSelectedOption] = useState("A");
  const [selectedOption2, setSelectedOption2] = useState("Y");
  const [selectedConditions, setSelectedConditions] = useState(new Set());

  const [termCheck, setTermCheck] = useState(false);

  const healthConditions = [
    "HIV/AIDS",
    "Cancer",
    "Diabetes",
    "High Blood Pressure",
    "None",
  ];

  const options = [
    { label: "Male", value: "A" },
    { label: "Female", value: "B" },
    { label: "Others", value: "C" },
  ];
  const option2 = [
    { label: "Yes", value: "Y" },
    { label: "No", value: "N" },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      header: (props) => (
        <CustomHeader
          title={route.params?.isEdit ? "Edit Member" : "Add Member"}
          navigation={navigation}
        />
      ),
    });
  }, [navigation, route]);

  const toggleCondition = (condition) => {
    const newSelectedConditions = new Set(selectedConditions);
    if (selectedConditions.has(condition)) {
      newSelectedConditions.delete(condition);
    } else {
      newSelectedConditions.add(condition);
    }
    setSelectedConditions(newSelectedConditions);
  };

  const handleOptionChange = (value: any) => {
    setSelectedOption(value);
  };

  const handleOptionChange2 = (value: any) => {
    setSelectedOption2(value);
  };

  const navigateTo = () => {
    navigation.navigate("SelectMember");
  };

  const navigateToSelectPlanscreen = () => {
    navigation.navigate("SelectPlanscreen");
  };

  return (
    <SafeAreaView style={{ backgroundColor: Colors.bg, flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={{ marginTop: 5, paddingBottom: 50 }}>
          <View style={styles.contactInfo}>
            <View>
              <Text style={styles.value2}>
                {"Kindly enter necessary details to create your account."}
              </Text>
              <Text style={[styles.welcome, { marginVertical: 10 }]}>
                {"Personal Information"}
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
                label={"Last Name"}
                placeholderText={"Enter Last Name"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomTextInput
                label={"Date of Birth"}
                placeholderText={"DD/MM/YYYY"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomTextInput
                label={"Relationship"}
                placeholderText={"Enter Relation with Member"}
                value={""}
                onChangeText={() => {}}
              />
              <Text style={styles.uploadImageTxt}>{"Gender"}</Text>
              <View style={styles.radioRow}>
                {options.map((option) => (
                  <UserTypeOption
                    key={option.value}
                    option={option}
                    selectedOption={selectedOption}
                    handleOptionChange={handleOptionChange}
                  />
                ))}
              </View>
              <Text style={styles.uploadImageTxt}>{"Smoker ?"}</Text>
              <View style={styles.radioRow}>
                {option2.map((option) => (
                  <UserTypeOption
                    key={option.value}
                    option={option}
                    selectedOption={selectedOption2}
                    handleOptionChange={handleOptionChange2}
                  />
                ))}
              </View>
              <Text style={[styles.optionText, { marginVertical: 10 }]}>
                {
                  "*If the right option is not selected and person is diagnosed with lung cancer as a result of tobacco, their illness shall not be covered."
                }
              </Text>
              <View style={styles.line} />
              <Text style={[styles.welcome, { marginVertical: 10 }]}>
                {"Contact Details"}
              </Text>
              <CustomTextInput
                label={"Email Address "}
                placeholderText={"Enter Email Address"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomTextInput
                label={"Phone Number"}
                placeholderText={"Enter Phone Number"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomTextInput
                label={"City "}
                placeholderText={"Enter City Name"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomTextInput
                label={"State "}
                placeholderText={"Enter State Name"}
                value={""}
                onChangeText={() => {}}
              />
              <CustomTextInput
                label={"Country "}
                placeholderText={"Enter Country Name"}
                value={""}
                onChangeText={() => {}}
              />
              <Text style={[styles.welcome, { marginVertical: 10 }]}>
                {"Pre-existing Condition"}
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
              <Text style={[styles.welcome, { marginVertical: 10 }]}>
                {"Interested Coverage Plan"}
              </Text>
              <Text style={styles.optionTitle}>
                {"Change Plan Payment Frequency"}
              </Text>
              <Text style={[styles.optionText]}>
                {
                  "For each coverage option selected, we display different details and different cost."
                }
              </Text>
              <View style={[styles.row, { marginVertical: 10 }]}>
                <CustomDropdown1
                  data={data}
                  onSelect={(selectedItem) => {}}
                  placeholder={"18-44 Yr Old"}
                  border={true}
                />
                <CustomDropdown1
                  data={data}
                  onSelect={(selectedItem) => {}}
                  placeholder={"Monthly"}
                />
              </View>
              <View>
                {plan.map((item) => (
                  <ImageBackground
                    source={Images.planbg}
                    resizeMode={"cover"}
                    imageStyle={styles.cardImgView}
                    style={styles.cardView}
                  >
                    <View style={styles.cardFirstRow}>
                      <View style={{flex:0.5}}>
                        <Text style={styles.planName}>{item.Plan}</Text>
                      </View>
                      <View style={{flex:0.5, alignItems:'flex-end'}}>
                        <Text style={styles.planPrice}>
                          {item["Monthly Price"]}
                          <Text style={styles.planOri}>{"/Month"}</Text>
                        </Text>
                      </View>
                    </View>
                    <View style={styles.annualView}>
                      <Text style={styles.annualPriceTxt}>
                        {"Annual Membership: "}
                        <Text style={styles.annualPrice}>
                          {item["Annual Membership"]}
                        </Text>
                      </Text>
                    </View>
                    <View style={styles.lowRow}>
                      <TouchableOpacity onPress={navigateToSelectPlanscreen} style={styles.ViewBtn}>
                        <Text style={styles.viewPlanTxt}>{"View Plan"}</Text>
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                ))}
                <View>
                  <View style={styles.low2Row}>
                    <Octicons name={"dot-fill"} size={14} color={"#574766"} />
                    <Text style={styles.selectedCheck}>{" Note:"}</Text>
                  </View>
                  <Text style={styles.unSelectedCheck2}>
                    {
                      "The following items cannot be added after plan is bought: MRI, Radiation Therapy, Chemotherapy, and Hospitalization. You will be able to add during plan renewal open window."
                    }
                  </Text>
                </View>
                <View
                  style={[
                    styles.checkboxContainer,
                    { paddingRight: 15, marginTop: 20 },
                  ]}
                >
                  <Checkbox.Android
                    status={termCheck ? "checked" : "unchecked"}
                    color={Colors.primaryColor}
                    onPress={() => setTermCheck(!termCheck)}
                  />
                  <Text style={styles.unSelectedCheck}>
                    {"Display plan owner's name on this membership card."}
                  </Text>
                </View>
                <CustomButton onPress={navigateTo} marginTop={20}>
                  Submit
                </CustomButton>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddMemberScreen;

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
    fontSize: 16,
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
});
