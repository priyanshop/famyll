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
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import CustomHeader from "../../Components/CustomHeader";
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

const CustomInfo = ({ label, value }: any) => {
  return (
    <View style={styles.InfoView}>
      <View style={styles.infoNextView}>
        <Text style={styles.heading}>{label}</Text>
      </View>
      <View style={styles.infoNextView}>
        <Text numberOfLines={1} style={styles.value}>
          {value}
        </Text>
      </View>
    </View>
  );
};

const CustomInfo1 = ({ label, value }: any) => {
  return (
    <View style={{ marginVertical: 7.5, flex: 0.5 }}>
      <Text style={styles.heading2}>{label}</Text>
      <Text style={styles.value2}>{value}</Text>
    </View>
  );
};

const ProviderDetails = ({ navigation, route }: any) => {
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

  useLayoutEffect(() => {
    navigation.setOptions({
      header: (props) => (
        <CustomHeader
          title={
            route?.params?.header
              ? route?.params?.header
              : route?.params?.toAdd
              ? "Add Member"
              : "Provider Details"
          }
          navigation={navigation}
        />
      ),
    });
  }, [navigation, route]);

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
        <CustomInfo label="Provider Type:  " value="General Practitioner" />
        <CustomInfo label="Graduation Year:" value="2012" />
        <CustomInfo label="Graduated From: " value="Medical School Name" />
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <CustomInfo1 label={item.type} value={item.value} />
  );

  const navigateTo = () => {
    navigation.navigate("MakePayment");
  };

  return (
    <SafeAreaView style={{ backgroundColor: Colors.bg, flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={{ marginTop: 5, paddingBottom: 50 }}>
          <View style={styles.contactInfo}>
            <View>
              {route?.params?.toAdd && (
                <View style={styles.newHeader}>
                  <View style={styles.innerHeader}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                      <Entypo
                        name="chevron-thin-left"
                        size={18}
                        color="#332640"
                      />
                    </TouchableOpacity>
                    <Text style={styles.welcome2}>{"  Back to Member"}</Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={navigateTo}
                      style={styles.skipBtn}
                    >
                      <Text style={styles.skipText}>{"Select"}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              <EmployeeCard
                {...{ name: "Alena Smith", id: "#FML1000M", status: "Covered" }}
              />
              <View style={styles.line} />
              {contactInformation.map((item, index) => (
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
                      <View style={styles.line} />
                    </View>
                  )}
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProviderDetails;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: Colors.bg,
    flexGrow: 1,
  },
  container2: {
    justifyContent: "space-between",
  },
  welcome: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#000",
  },
  welcome2: {
    fontSize: 20,
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
  imageView: {
    flex: 0.3,
  },
  heading: {
    fontSize: 12,
    fontWeight: "500",
    color: "#8B7F97",
  },
  value: {
    fontSize: 12,
    fontWeight: "500",
    color: "#332640",
  },
  InfoView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  infoNextView: {
    justifyContent: "flex-start",
    flexDirection: "row",
    flex: 0.5,
  },
  line: {
    height: 1,
    backgroundColor: "#E3E1E5",
    width: "100%",
    marginTop: 10,
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
  acordionTitleView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 10,
  },
  innerHeader: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  skipText: {
    color: Colors.primaryColor,
    fontSize: 14,
    fontWeight: "700",
  },
  skipBtn: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 25,
    borderColor: Colors.primaryColor,
    justifyContent: "center",
    marginTop: 5,
    borderWidth: 1.5,
    flex: 1,
    marginHorizontal: 5,
    paddingHorizontal: 12,
  },
  newHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
