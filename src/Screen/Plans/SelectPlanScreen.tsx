import React, { useLayoutEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { Checkbox } from "react-native-paper";
import Octicons from "react-native-vector-icons/Octicons";

import CustomHeader from "../../Components/CustomHeader";
import CustomTextInput from "../../Components/CustomTextInput";
import { Colors } from "../../Helper/Colors";

const medicalCoverage = [
  "100% Coverage except Pelvic exam covered at 50%",
  "2 sick visit/year",
  "1 Colonoscopy/5 years for men above 45 years old",
  "1 physical visit/year",
  "1 PSA/year for men",
  "1 Endoscopy/3 years for men above 45 years old",
];
const medicalServices = [
  "General Practitioner(Primary Care Provider)",
  "Specialist Care Provider",
  "Diagnostic Laboratory Service",
  "Radiation Therapy",
  "Dialysis",
  "Maternity (Labor and Delivery)",
  "Pharmacy",
  "Diagnostic Imaging",
];
const insurancePacks = [
  {
    pack: "Pack 1 - FCFA 500,000",
    vision: "FCFA 25,000",
    dental: "FCFA 25,000",
    hospitalization_surgery_chemo: "90% - FCFA 4,50,000",
  },
  {
    pack: "Pack 2 - FCFA 1,000,000",
    vision: "FCFA 50,000",
    dental: "FCFA 50,000",
    hospitalization_surgery_chemo: "90% - FCFA 9,00,000",
  },
];

const CustomDescription = ({ label, value }) => {
  return (
    <View style={[styles.low2Row, { alignItems: "center", paddingLeft: 12 }]}>
      <Octicons name={"dot-fill"} size={18} color={Colors.primaryColor} />
      <Text style={styles.selectedCheck}>{label + " - " + value}</Text>
    </View>
  );
};

const SelectPlanscreen = ({ navigation, route }: any) => {
  const [termCheck, setTermCheck] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      header: (props) => (
        <CustomHeader title={"Basic Plan"} navigation={navigation} />
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
          <View>
            <Text style={styles.welcome}>{"Basic Plan Details"}</Text>
          </View>
          <View style={styles.contactInfo}>
            {medicalCoverage.map((item) => (
              <View style={styles.low2Row}>
                <Octicons name={"dot-fill"} size={14} color={"#574766"} />
                <Text style={styles.selectedCheck}>{item}</Text>
              </View>
            ))}
          </View>
          <View style={styles.titleView}>
            <Text style={styles.welcome}>{"Main Service"}</Text>
          </View>
          <View style={[styles.low2Row, { alignItems: "center" }]}>
            <Octicons name={"dot-fill"} size={14} color={"#574766"} />
            <Text style={styles.selectedCheck}>
              {"General Practitioner(Primary Care Provider)"}
            </Text>
          </View>

          <CustomTextInput
            label={"Number of Visits"}
            placeholderText={"Enter Number of Visits"}
            value={"1"}
            onChangeText={() => {}}
          />

          <View style={styles.titleView}>
            <Text style={styles.welcome}>
              {"Add Additional Coverage (Optional)"}
            </Text>
          </View>
          <View style={[styles.low2Row, { alignItems: "center" }]}>
            <Octicons name={"dot-fill"} size={14} color={"#574766"} />
            <Text style={[styles.unSelectedCheck, { fontSize: 18 }]}>
              {"  Other Services"}
            </Text>
          </View>
          {medicalServices.map((item) => (
            <View style={[styles.checkboxContainer]}>
              <Checkbox.Android
                status={false ? "checked" : "unchecked"}
                color={Colors.primaryColor}
                onPress={() => setTermCheck(!termCheck)}
              />
              <Text style={styles.unSelectedCheck}>{item}</Text>
            </View>
          ))}

          {insurancePacks.map((item) => (
            <View
              style={[
                styles.contactInfo,
                { borderWidth: 1.2, borderColor: Colors.primaryColor },
              ]}
            >
              <View style={[styles.checkboxContainer]}>
                <Checkbox.Android
                  status={true ? "checked" : "unchecked"}
                  color={Colors.primaryColor}
                  onPress={() => setTermCheck(!termCheck)}
                />
                <Text style={styles.selectedCheck2}>{item.pack}</Text>
              </View>
              <CustomDescription label={"Vision"} value={item.vision} />
              <CustomDescription label={"Dental"} value={item.dental} />
              <CustomDescription
                label={"Hospitalization/Surgery/Chemo *"}
                value={item.hospitalization_surgery_chemo}
              />
            </View>
          ))}

          <Text style={[styles.optionText, { marginTop: 25 }]}>
            {
              "The first visit of all screening exams here listed are covered (except for Pelvic exam which is a 50/50 split offer) courtesy of Famyll, Inc. Should you require more than one of these screening exams at any given time, then you'll have to make use of our additional coverage plan option."
            }
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SelectPlanscreen;

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
    marginVertical: 5,
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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  selectedCheck: {
    fontSize: 16,
    fontWeight: "400",
    color: "#150425",
    marginLeft: 7,
  },
  selectedCheck2: {
    fontSize: 18,
    fontWeight: "500",
    color: "#332640",
    marginLeft: 7,
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
    marginVertical: 5,
  },
  titleView: {
    marginTop: 15,
    marginBottom: 10,
  },
});
