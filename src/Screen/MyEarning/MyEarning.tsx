import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Images } from "../../assets/index";
import CustomClip from "../../Components/CustomClip";
import CustomImageButton from "../../Components/CustomImageButton";
import { Colors } from "../../Helper/Colors";

const EmployeeList = [
  { name: "Alena Smith", id: "#FML1000M", status: "Covered" },
  { name: "Peter Smith", id: "#FML1001M", status: "Waiting" },
  { name: "Williams Biber", id: "#FML1002M", status: "Covered" },
  { name: "Steve Stockholm", id: "#FML1003M", status: "Suspended" },
  { name: "Kevin Rohds", id: "#FML1004M", status: "Covered" },
];

const EmployeeCard = ({ name, id, status }: any) => (
  <View style={styles.card}>
    <View style={styles.imageView}>
      <Image
        source={{
          uri: "https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        }}
        style={styles.image}
      />
    </View>
    <View style={styles.details}>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.idText}>{id}</Text>
      <CustomClip color={Colors[status]} status={status} />
    </View>
    <View style={styles.viewBtn}>
      <Text style={styles.buttonText}>{"$ 5000"}</Text>
    </View>
  </View>
);

const MyEarning = () => {
  return (
    <SafeAreaView style={{ backgroundColor: Colors.bg, flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.headerView}>
          <View>
            <Text style={styles.welcome}>My Earnings</Text>
          </View>
          <View style={styles.serachView}>
            <CustomImageButton imageSource={Images.searchnormal} />
            <CustomImageButton imageSource={Images.notification} />
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          {EmployeeList.map((employee) => (
            <EmployeeCard {...employee} key={employee.id} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyEarning;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.bg,
    flex: 1,
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
  profileName: {
    fontSize: 26,
    fontWeight: "bold",
    color: Colors.primaryColor,
  },
  hand: {
    fontSize: 35,
  },
  date: {
    fontSize: 16,
    color: "#574766",
    fontWeight: "400",
  },
  card: {
    flexDirection: "row",
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 5,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  details: {
    flex: 0.5,
  },
  button: {
    backgroundColor: "#EBF3F7",
    padding: 13,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: Colors.primaryColor,
    fontSize: 18,
    fontWeight: "700",
  },
  nameText: {
    color: "#332640",
    fontSize: 16,
    fontWeight: "500",
  },
  idText: {
    color: "#826C99",
    fontSize: 14,
    fontWeight: "500",
  },
  status: {
    fontSize: 12,
    fontWeight: "500",
    color: "#1A9C2F",
  },
  viewBtn: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  imageView: {
    flex: 0.2,
  },
});
