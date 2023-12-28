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
import Octicons from "react-native-vector-icons/Octicons";
import { Images } from "../../assets";
import CustomDropdown1 from "../../Components/CustomDropDown1";
import CustomHeader from "../../Components/CustomHeader";
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

const UpgradePlan = ({ navigation, route }: any) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      header: (props) => (
        <CustomHeader title={"Update Coverage Plan"} navigation={navigation} />
      ),
    });
  }, [navigation, route]);

  const navigateTo = () => {
    navigation.navigate("SelectMember");
  };

  return (
    <SafeAreaView style={{ backgroundColor: Colors.bg, flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={{ marginTop: 5, paddingBottom: 50 }}>
          <View style={styles.contactInfo}>
            <View>
              <Text style={[styles.welcome, { marginVertical: 10 }]}>
                {"Update Coverage Plan"}
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
                      <View style={{ flex: 0.5 }}>
                        <Text style={styles.planName}>{item.Plan}</Text>
                      </View>
                      <View style={{ flex: 0.5, alignItems: "flex-end" }}>
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
                      <TouchableOpacity style={styles.ViewBtn}>
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
                  <Text style={styles.unSelectedCheck}>
                    {
                      "The following items cannot be added after plan is bought: MRI, Radiation Therapy, Chemotherapy, and Hospitalization. You will be able to add during plan renewal open window."
                    }
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpgradePlan;

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
  optionText: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.defualtTxtColor,
  },
  row: {
    flexDirection: "row",
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
    marginTop: 5,
  },
  low2Row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
});
