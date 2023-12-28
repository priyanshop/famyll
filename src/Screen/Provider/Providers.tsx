import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Images } from "../../assets/index";
import { Colors } from "../../Helper/Colors";
import CustomDropdown from "../../Components/CustomDropdown";
import CustomImageButton from "../../Components/CustomImageButton";

const EmployeeList = [
  { name: "Alena Smith", id: "#FML1000M", status: "Covered" },
  { name: "Peter Smith", id: "#FML1001M", status: "Waiting" },
  { name: "Williams Biber", id: "#FML1002M", status: "Covered" },
  { name: "Steve Stockholm", id: "#FML1003M", status: "Suspended" },
  { name: "Kevin Rohds", id: "#FML1004M", status: "Covered" },
];
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
const CustomInfo = ({ label, value }: any) => {
  return (
    <View style={styles.InfoView}>
      <Text style={styles.heading}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const Providers = ({ navigation, route }: any) => {
  const navigateTo = () => {
    navigation.navigate("ProviderDetails");
  };

  const EmployeeCard = ({ name, id, status }: any) => (
    <View style={styles.card}>
      <View style={styles.imageView}>
        <Image
          source={{
            uri: "https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
          }}
          style={styles.image}
          resizeMode={"cover"}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.welcome}>{name}</Text>
        <CustomInfo label="Email : " value="martin@yopmail.com" />
        <CustomInfo label="Phone : " value="9586541235" />
        <CustomInfo label="City :  " value="Chicago" />
        <TouchableOpacity onPress={navigateTo} style={styles.button}>
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ backgroundColor: Colors.bg, flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.headerView}>
          <View>
            <Text style={styles.welcome}>Providers</Text>
          </View>
          <View style={styles.serachView}>
            <CustomImageButton imageSource={Images.searchnormal} />
            <CustomImageButton imageSource={Images.notification} />
          </View>
        </View>
        <View style={{ marginTop: 10, paddingBottom: 120 }}>
          <View>
            <Text style={styles.welcome2}>Providers List</Text>
          </View>

          <CustomDropdown
            data={data}
            onSelect={(selectedItem) => {
              console.log("Selected Item:", selectedItem);
            }}
            placeholder={"Provider Type"}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomDropdown
              data={data}
              onSelect={(selectedItem) => {
                console.log("Selected Item:", selectedItem);
              }}
              placeholder={"Country"}
            />
            <CustomDropdown
              data={data}
              onSelect={(selectedItem) => {
                console.log("Selected Item:", selectedItem);
              }}
              placeholder={"State"}
            />
            <CustomDropdown
              data={data}
              onSelect={(selectedItem) => {
                console.log("Selected Item:", selectedItem);
              }}
              placeholder={"City"}
            />
          </View>
          {EmployeeList.map((employee) => (
            <EmployeeCard {...employee} key={employee.id} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Providers;

const styles = StyleSheet.create({
  container: {
    padding: 15,
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
  welcome2: {
    fontSize: 22,
    fontWeight: "700",
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
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  details: {
    flex: 0.6,
  },
  button: {
    backgroundColor: "#EBF3F7",
    padding: 13,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  buttonText: {
    color: "#0B1B22",
    fontSize: 14,
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
    flex: 0.4,
  },
  heading: {
    fontSize: 14,
    fontWeight: "500",
    color: "#8B7F97",
  },
  value: {
    fontSize: 14,
    fontWeight: "500",
    color: "#332640",
  },
  InfoView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 5,
  },
});
