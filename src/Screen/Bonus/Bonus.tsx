import React from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import { Images } from "../../assets/index";
import CustomImageButton from "../../Components/CustomImageButton";
import { Colors } from "../../Helper/Colors";

const transactions = [
  {
    year: "2023",
    amountCommitted: "2500",
    payOut: "150",
    paidVia: "MTN Mobile Money",
    datePaid: "10/10/2023",
    mobileNumber: "*****6723",
  },
  {
    year: "2023",
    amountCommitted: "3000",
    payOut: "200",
    paidVia: "MTN Mobile Money",
    datePaid: "11/10/2023",
    mobileNumber: "*****6724",
  },
  {
    year: "2023",
    amountCommitted: "3500",
    payOut: "250",
    paidVia: "MTN Mobile Money",
    datePaid: "12/10/2023",
    mobileNumber: "*****6725",
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

const Bonus = ({ navigation, route }: any) => {
  return (
    <SafeAreaView style={{ backgroundColor: Colors.bg, flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.headerView}>
          <View>
            <Text style={styles.welcome}>Bonus Incentive</Text>
          </View>
          <View style={styles.serachView}>
            <CustomImageButton imageSource={Images.searchnormal} />
            <CustomImageButton imageSource={Images.notification} />
          </View>
        </View>
        <View style={{ marginTop: 10, marginBottom: 100 }}>
          <View style={styles.contactInfo}>
            {transactions.map((item, index, data) => (
              <View>
                <View style={styles.row}>
                  <CustomInfo label="Year" value={item.year} />
                  <CustomInfo
                    label="Amount Commited"
                    value={item.amountCommitted}
                  />
                </View>
                <View style={styles.row}>
                  <CustomInfo label="Your Pay Out" value={item.payOut} />
                  <CustomInfo label="Paid Via" value={item.paidVia} />
                </View>
                <View style={styles.row}>
                  <CustomInfo label="Date Paid" value={item.datePaid} />
                  <CustomInfo
                    label="Paid to Mobile Number"
                    value={item.mobileNumber}
                  />
                </View>
                {data.length - 1 !== index && <View style={styles.line} />}
              </View>
            ))}
          </View>
          <Text style={[styles.welcome,{marginTop:15}]}>{"Past Distributions"}</Text>
          <View style={styles.contactInfo}>
            {transactions.map((item, index, data) => (
              <View>
                <View style={styles.row}>
                  <CustomInfo label="Year" value={item.year} />
                  <CustomInfo
                    label="Amount Commited"
                    value={item.amountCommitted}
                  />
                </View>
                <View style={styles.row}>
                  <CustomInfo label="Your Pay Out" value={item.payOut} />
                  <CustomInfo label="Paid Via" value={item.paidVia} />
                </View>
                <View style={styles.row}>
                  <CustomInfo label="Date Paid" value={item.datePaid} />
                  <CustomInfo
                    label="Paid to Mobile Number"
                    value={item.mobileNumber}
                  />
                </View>
                {data.length - 1 !== index && <View style={styles.line} />}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bonus;

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
  line: {
    height: 1,
    backgroundColor: "#E3E1E5",
    width: "100%",
    marginTop: 10,
  },
});
