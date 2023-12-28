import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { Images } from "../../assets/index";
import CustomButton from "../../Components/CustomButton";
import CustomImageButton from "../../Components/CustomImageButton";
import { Colors } from "../../Helper/Colors";

let contactInformation = [
  {
    type: "Contact Information",
    details: [
      { type: "Phone Number", value: "(+012) 345-6789" },
      { type: "Email Address", value: "example@email.com" },
      { type: "City", value: "Chicago" },
      { type: "State/Province", value: "Illinois" },
      { type: "Country", value: "United States" },
    ],
  },
  {
    type: "Primary Clinic",
    details: [
      { type: "Name", value: "Sample Text" },
      { type: "Phone Number", value: "(+012) 345-6789" },
      {
        type: "Business Address",
        value:
          "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
      },
    ],
  },
  {
    type: "Primary Hospital",
    details: [
      { type: "Name", value: "Sample Text" },
      { type: "Phone Number", value: "(+012) 345-6789" },
      {
        type: "Business Address",
        value:
          "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
      },
    ],
  },
  {
    type: "Affiliated Hospital",
    details: [
      { type: "Name", value: "Sample Text" },
      { type: "Phone Number", value: "(+012) 345-6789" },
      {
        type: "Business Address",
        value:
          "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
      },
    ],
  },
  {
    type: "Consultation",
    details: [
      { type: "Consultation Days", value: "7 Days" },
      { type: "Consultation Hours", value: "4 Hrs/Day" },
    ],
  },
];
const CustomInfo1 = ({ label, value }: any) => {
  return (
    <View style={{ marginVertical: 7.5, flex: 0.5 }}>
      <Text style={styles.heading2}>{label}</Text>
      <Text style={styles.value2}>{value}</Text>
    </View>
  );
};
const ProviderProfile = ({ navigation, route }: any) => {
  const [expandedSections, setExpandedSections] = useState({
    "0": true,
    "1": true,
    "2": true,
    "3": true,
    "4": true,
  });

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const navigateToChangePassword = () => {
    navigation.navigate("ChangePassword");
  };

  const EmployeeCard = ({ name, id, status }: any) => (
    <View style={styles.profileCard}>
      <ImageBackground
        source={{
          uri: "https://iili.io/JReD8pS.jpg",
        }}
        resizeMode={"cover"}
        style={styles.coverImage}
        imageStyle={styles.coverImage}
      />
      <View style={styles.profileNameView}>
        <View>
          <View style={{ flex: 0.4 }}>
            <Image
              source={{
                uri: "https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
              }}
              style={styles.profileImage}
              resizeMode={"cover"}
            />
          </View>
          <View style={styles.ProfileCardView}>
            <Text style={styles.nameText}>{"Martin Smith"}</Text>
            <Text style={styles.nameText}>{"Type: General Practioner"}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={navigateToChangePassword}
            style={styles.button}
          >
            <Text style={styles.buttonText}>{"Change Password"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skipBtn2}>
            <Text style={styles.skipText2}>{"Edit Profile"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <CustomInfo1 label={item.type} value={item.value} />
  );

  return (
    <SafeAreaView style={{ backgroundColor: Colors.bg, flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.headerView}>
          <View>
            <Text style={styles.welcome}>My Profile</Text>
          </View>
          <View style={styles.serachView}>
            <CustomImageButton imageSource={Images.searchnormal} />
            <CustomImageButton imageSource={Images.notification} />
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <EmployeeCard />
          <View style={styles.contactInfo}>
            {contactInformation.map((item, index, data) => (
              <View>
                <TouchableOpacity
                  style={styles.acordionTitleView}
                  onPress={() => toggleSection(index)}
                >
                  <Text style={styles.welcome2}>{item.type}</Text>
                  <Feather
                    name={
                      expandedSections[index] ? "chevron-up" : "chevron-down"
                    }
                    size={20}
                    color={"#332640"}
                  />
                </TouchableOpacity>
                {expandedSections[index] && (
                  <View>
                    <FlatList
                      data={item.details}
                      renderItem={renderItem}
                      keyExtractor={(item) => item.type}
                      numColumns={2}
                      contentContainerStyle={styles.container2}
                      style={{
                        backgroundColor: "#FFF",
                      }}
                    />
                    {index !== data.length - 1 && <View style={styles.line} />}
                  </View>
                )}
              </View>
            ))}
          </View>
          <TouchableOpacity style={styles.logoutBtn}>
            <Image
              source={Images.Logout}
              resizeMode={"contain"}
              style={styles.logoutIcon}
            />
            <Text style={styles.logoutBtnTxt}>{"  Logout"}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProviderProfile;

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
    flexDirection: "row",
    marginTop: 5,
    flex: 1,
    marginHorizontal: 5,
    paddingHorizontal: 12,
  },
  buttonText: {
    color: "#0B1B22",
    fontSize: 14,
    fontWeight: "600",
  },
  nameText: {
    color: "#332640",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
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
  profileCard: {
    borderRadius: 16,
    height: 224,
    marginVertical: 10,
  },
  coverImage: {
    backgroundColor: "#C7AFDE",
    flex: 0.5,
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
  },
  profileNameView: {
    backgroundColor: "#FFFFFF",
    flex: 0.5,
    borderBottomStartRadius: 16,
    borderBottomRightRadius: 16,
    // flexDirection: "row",
  },
  profileImage: {
    height: 90,
    width: 90,
    marginTop: -45,
    marginLeft: 15,
    borderRadius: 16,
  },
  ProfileCardView: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  contactInfo: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 15,
    marginVertical: 10,
    paddingVertical: 5,
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
  dashedView: {
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#B1A8BA",
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    marginVertical: 10,
  },
  addBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    padding: 16,
    marginVertical: 5,
    backgroundColor: Colors.primaryColor,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  addTxt: { fontSize: 17, fontWeight: "600", color: "#fff" },
  logoutBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    padding: 16,
    marginVertical: 5,
    backgroundColor: Colors.logOut,
    justifyContent: "center",
    width: "100%",
    marginBottom: 100,
  },
  logoutBtnTxt: { fontSize: 17, fontWeight: "600", color: "#fff" },
  logoutIcon: {
    height: 24,
    width: 24,
  },
  acordionTitleView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 10,
  },
  welcome2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  heading2: {
    fontSize: 14,
    fontWeight: "500",
    color: "#8B7F97",
  },
  value2: {
    fontSize: 16,
    fontWeight: "500",
    color: "#332640",
    marginTop: 5,
  },
  line: {
    height: 1,
    backgroundColor: "#E3E1E5",
    width: "100%",
    marginTop: 10,
  },
  container2: {
    justifyContent: "space-between",
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
});
