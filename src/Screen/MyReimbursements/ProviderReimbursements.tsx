import React from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import { Images } from "../../assets/index";
import CustomImageButton from "../../Components/CustomImageButton";
import { Colors } from "../../Helper/Colors";

const transactions = [
  {
    memberNumber: "#FML1000M",
    date: "12/06/2016",
    timeOfPayment: "10:00 AM",
    claimedAmount: "$500",
    paymentStatus: "Paid",
    paymentApproval: "Completed",
  },
  {
    memberNumber: "#FML1000M",
    date: "12/06/2016",
    timeOfPayment: "10:00 AM",
    claimedAmount: "$500",
    paymentStatus: "Not Paid",
    paymentApproval: "In Progress",
  },
  {
    memberNumber: "#FML1000M",
    date: "12/06/2016",
    timeOfPayment: "10:00 AM",
    claimedAmount: "$500",
    paymentStatus: "Paid",
    paymentApproval: "Completed",
  },
];

const CustomInfo = ({ label, value, clip = false, color, status }: any) => {
  return (
    <View style={{ marginVertical: 15, flex: 0.5 }}>
      <Text style={styles.heading}>{label}</Text>
      {clip ? (
        <View style={styles.statusView}>
          <Octicons name={"dot-fill"} size={14} color={color} />
          <Text style={{ fontSize: 14, fontWeight: "500", color: color }}>
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

const ProviderReimbursements = ({ navigation, route }: any) => {
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
        <View style={{ marginTop: 10, marginBottom: 100 }}>
          <View>
            {transactions.map((item) => (
              <View style={styles.contactInfo}>
                <View style={styles.row}>
                  <CustomInfo label="Member Number" value={item.memberNumber} />
                  <CustomInfo label="Date" value={item.date} />
                </View>
                <View style={styles.row}>
                  <CustomInfo
                    label="Time of Payment"
                    value={item.timeOfPayment}
                  />
                  <CustomInfo
                    label="Claimed Amount"
                    value={item.claimedAmount}
                  />
                </View>
                <View style={styles.row}>
                  <CustomInfo
                    label="Payment Status"
                    value={item.paymentStatus}
                  />
                  <CustomInfo
                    clip={true}
                    status={item.paymentApproval}
                    label="Payment Approval"
                    color={Colors[item.paymentApproval]}
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

export default ProviderReimbursements;

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
