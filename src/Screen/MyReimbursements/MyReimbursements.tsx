import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import { Images } from "../../assets/index";
import CustomImageButton from "../../Components/CustomImageButton";
import { Colors } from "../../Helper/Colors";

const data = [
  {
    Date: "12/06/2016",
    "Time of Payment": "10:00 AM",
    "Amount to Claim": "$500",
    "Claim Type": "Claim Type",
    "Payment Approval": "Completed",
  },
  {
    Date: "12/06/2016",
    "Time of Payment": "10:00 AM",
    "Amount to Claim": "$500",
    "Claim Type": "",
    "Payment Approval": "Completed",
  },
  {
    Date: "12/06/2016",
    "Time of Payment": "10:00 AM",
    "Amount to Claim": "$500",
    "Claim Type": "Claim Type",
    "Payment Approval": "In Progress",
  },
  {
    Date: "12/06/2016",
    "Time of Payment": "10:00 AM",
    "Amount to Claim": "$500",
    "Claim Type": "Claim Type",
    "Payment Approval": "Completed",
  },
  {
    Date: "12/06/2016",
    "Time of Payment": "10:00 AM",
    "Amount to Claim": "$500",
    "Claim Type": "Claim Type",
    "Payment Approval": "Completed",
  },
];

const CustomInfo = ({ label, value, clip = false, color, status }: any) => {
  return (
    <View style={{ marginVertical: 15, flex: 0.5 }}>
      <Text style={styles.heading}>{label}</Text>
      {clip ? (
        <View style={styles.statusView}>
          <Octicons name={"dot-fill"} size={14} color={color} />
          <Text style={{ fontSize: 13, fontWeight: "500", color: color }}>
            {"  "}
            {status}{" "}
          </Text>
        </View>
      ) : (
        <Text style={styles.value}>{value}</Text>
      )}
    </View>
  );
};

const MyReimbursements = ({ navigation, route }: any) => {
  return (
    <SafeAreaView style={{ backgroundColor: Colors.bg, flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.headerView}>
          <View>
            <Text style={styles.welcome}>My Reimbursements</Text>
          </View>
          <View style={styles.serachView}>
            <CustomImageButton imageSource={Images.searchnormal} />
            <CustomImageButton imageSource={Images.notification} />
          </View>
        </View>
        <View style={{ marginTop: 10, marginBottom:100 }}>
          <View>
            {data.map((item) => (
              <View style={styles.contactInfo}>
                <View style={styles.row}>
                  <CustomInfo label="Date" value={item.Date} />
                  <CustomInfo
                    label="Time of Payment"
                    value={item["Time of Payment"]}
                  />
                </View>
                <View style={styles.row}>
                  <CustomInfo
                    label="Amount to Claim"
                    value={item["Amount to Claim"]}
                  />
                  <CustomInfo label="Claim Type" value={item["Claim Type"]} />
                </View>
                <View>
                  <CustomInfo
                    clip={true}
                    status={item["Payment Approval"]}
                    label="Payment Approval"
                    color={Colors[item["Payment Approval"]]}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyReimbursements;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: Colors.bg,
    flexGrow: 1,
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  serachView: { flexDirection: "row", justifyContent: "space-between" },
  calenderIcon: { height: 24, width: 24 },
  dateView: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  welcome: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#000",
  },
  contactInfo: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  heading: {
    fontSize: 14,
    fontWeight: "500",
    color: "#8B7F97",
  },
  value: {
    fontSize: 16,
    fontWeight: "500",
    color: "#332640",
    marginTop: 5,
  },
  row: {
    flexDirection: "row",
  },
  statusView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
});
