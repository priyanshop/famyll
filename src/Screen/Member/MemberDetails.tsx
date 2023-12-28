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
import { Overlay } from "react-native-elements";
import Octicons from "react-native-vector-icons/Octicons";
import CustomHeader from "../../Components/CustomHeader";
import { Colors } from "../../Helper/Colors";
import CustomClip from "../../Components/CustomClip";
import CustomButton from "../../Components/CustomButton";
import MemberCard from "../../Components/CustomCard";

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
    type: "Pre-existing Condition",
    details: [{ type: "Smoker", value: "Yes" }],
  },
  {
    type: "Plan Details",
  },
];

const healthcareDetails = [
  {
    category: "General Practitioner (Primary Care Provider)",
    availableVisit: 1,
    coveredAmount: "156",
    amountUsed: "100",
    balance: "56",
  },
  {
    category: "Maternity (Labor and Delivery)",
    availableVisit: 1,
    coveredAmount: "156",
    amountUsed: "100",
    balance: "56",
  },
  {
    category: "Specialist Care Provider",
    availableVisit: 1,
    coveredAmount: "156",
    amountUsed: "100",
    balance: "56",
  },
  {
    category: "Pharmacy",
    availableVisit: 1,
    coveredAmount: "156",
    amountUsed: "100",
    balance: "56",
  },
  {
    category: "Radiation Therapy",
    availableVisit: 1,
    coveredAmount: "156",
    amountUsed: "100",
    balance: "56",
  },
  {
    category: "Hospitalization",
    availableVisit: 1,
    coveredAmount: "156",
    amountUsed: "100",
    balance: "56",
  },
];

const careTeam = [
  {
    category: "General Practitioner (Primary Care Provider)",
    selectedProvider: "",
  },
  {
    category: "Specialist Care Provider",
    selectedProvider: "Dr. Jane Smith",
  },
  {
    category: "Radiation Therapy",
    selectedProvider: "Radiant Healing Center",
  },
  {
    category: "Maternity (Labor and Delivery)",
    selectedProvider: "Motherly Care Maternity",
  },
  {
    category: "Pharmacy",
    selectedProvider: "Healthy Life Pharmacy",
  },
  {
    category: "Hospitalization",
    selectedProvider: "Healing Hands Hospital",
  },
];

const CustomInfo = ({ label, value }: any) => {
  return (
    <View style={styles.InfoView}>
      <View style={styles.infoNextView}>
        <Text style={styles.heading}>{label}</Text>
      </View>
      <View style={[styles.infoNextView, { flex: 0.7 }]}>
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

const MemberDetails = ({ navigation, route }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    "0": true,
    "1": true,
    "2": true,
    "3": true,
    "4": true,
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      header: (props) => (
        <CustomHeader title={"Member Details"} navigation={navigation} />
      ),
    });
  }, [navigation, route]);

  const onBackdropPress = () => {
    setIsVisible(!isVisible);
  };

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const EmployeeCard = ({ name, id, status }: any) => (
    <View style={styles.card}>
      <View style={styles.contentView}>
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
          <CustomInfo label="Gender:  " value="Male" />
          <CustomInfo label="DOB:" value="12/05/1986" />
          <CustomInfo label="Relation: " value="Brother" />
        </View>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity onPress={onBackdropPress} style={styles.selectBtn}>
          <Text style={styles.selectText}>Membership Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToAddMemberScreen} style={styles.button}>
          <Text style={styles.buttonText}>{route.params.isProvider? "Submit Claim":"Edit Member"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <CustomInfo1 label={item.type} value={item.value} />
  );
  const navigateToUpgradePlan = () => {
    navigation.navigate("UpgradePlan");
  };

  const PlanDetails = () => (
    <>
      <View style={styles.planView}>
        <View style={styles.newHeader}>
          <View style={styles.innerHeader}>
            <Text style={styles.welcome2}>{"Basic Plan"}</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={navigateToUpgradePlan}
              style={styles.skipBtn}
            >
              <Text style={styles.skipText}>{"Update Coverage Plan"}</Text>
            </TouchableOpacity>
          </View>
        </View>
        {healthcareDetails.map((item) => (
          <View style={styles.dotView}>
            <View>
              <Octicons
                name={"dot-fill"}
                size={14}
                color={Colors.primaryColor}
              />
            </View>
            <View style={{ marginLeft: 5 }}>
              <Text style={styles.catLabel}>{item.category}</Text>
              <Text style={styles.catTitle}>
                {"Available Visit: "}
                <Text style={styles.textValue}>{item.availableVisit}</Text>
              </Text>
              <Text style={styles.catTitle}>
                {"Covered Amount: $"}
                <Text style={styles.textValue}>{item.coveredAmount}</Text>
              </Text>
              <Text style={styles.catTitle}>
                {"Amount Used: $"}
                <Text style={styles.textValue}>{item.amountUsed}</Text>
              </Text>
              <Text style={styles.catTitle}>
                {"Balance: $"}
                <Text style={styles.textValue}>{item.balance}</Text>
              </Text>
            </View>
          </View>
        ))}
        <View style={styles.TotalView}>
          <Text style={styles.welcome2}>{"Covered Percentage"}</Text>
          <Text style={styles.coveragePer}>{"50%"}</Text>
        </View>
        <Text style={styles.unSelectedCheck}>
          {"*Pelvic exam is covered at 50%."}
        </Text>
        <Text style={styles.unSelectedCheck}>
          {
            "*You can combine visit counts per covered service for one physical visit. For example, if you have 3 visits for CT Scanner at cost of 180,000 FCFA and the cost of your CT exam is 120,000FCFA, your CT exam is automatically covered by the number of your purchased CT visits. In this scenario, you will still have a balance of 60,000FCFA in your bank to use for any other CT exam."
          }
        </Text>
        <View style={styles.line} />
        <View style={styles.TotalView}>
          <Text style={styles.welcome2}>{"Total Plan Value"}</Text>
          <Text style={styles.welcome2}>{"$325"}</Text>
        </View>
      </View>
      <View style={styles.planView}>
        <View style={styles.newHeader}>
          <View style={styles.innerHeader}>
            <Text style={styles.welcome2}>{"My Care Team"}</Text>
          </View>
          <View />
        </View>
        {careTeam.map((item) => (
          <View style={styles.dotView}>
            <View>
              <Octicons
                name={"dot-fill"}
                size={14}
                color={Colors.primaryColor}
              />
            </View>
            <View style={{ marginLeft: 5 }}>
              <Text style={styles.catLabel}>{item.category}</Text>
              <Text style={styles.catTitle}>
                {item.selectedProvider === ""
                  ? "Not Selected Yet "
                  : item.selectedProvider}
                {item.selectedProvider === "" && (
                  <Text style={styles.textValue2}>{"Select Now"}</Text>
                )}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </>
  );

  const navigateToAddMemberScreen = () => {
    navigation.navigate("AddMemberScreen",{isEdit:true});
  };

  return (
    <SafeAreaView style={{ backgroundColor: Colors.bg, flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={{ marginTop: 5, paddingBottom: 50 }}>
          <View style={styles.contactInfo}>
            <View>
              <View style={styles.newHeader}>
                <View style={styles.innerHeader}>
                  <Text style={styles.welcome2}>{"Member #FML1000M"}</Text>
                </View>
                <View>
                  <CustomClip color={Colors["Covered"]} status={"Covered"} />
                </View>
              </View>
              <View style={styles.line} />
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
                      {index == 1 ? (
                        <Text style={styles.value2}>
                          {"High Blood Pressure, Diabetes"}
                        </Text>
                      ) : null}
                      {index === 2 ? <PlanDetails /> : null}
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
                      {index !== 2 && <View style={styles.line} />}
                    </View>
                  )}
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <Overlay
        animationType={"slide"}
        isVisible={isVisible}
        onBackdropPress={onBackdropPress}
        overlayStyle={styles.bottomSheetContainer}
      >
        <View style={styles.SureView}>
          <Text style={styles.welcome}>{"Membership Card"}</Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center", marginVertical:15 }}>
          <MemberCard />
        </View>
        <View style={{ padding: 10 }}>
          <CustomButton marginTop={20}>
            {"Download Membership Card"}
          </CustomButton>
        </View>
      </Overlay>
    </SafeAreaView>
  );
};

export default MemberDetails;

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
    flex: 1,
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
    flex: 0.3,
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
    padding: 10,
    borderRadius: 25,
    borderColor: Colors.primaryColor,
    justifyContent: "center",
    marginTop: 5,
    borderWidth: 1.5,
    flex: 1,
    paddingHorizontal: 12,
  },
  newHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  catTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#826C99",
    marginVertical: 2,
  },
  catLabel: {
    fontSize: 14,
    fontWeight: "400",
    color: "#574766",
    marginBottom: 5,
  },
  textValue: {
    color: "#574766",
  },
  coveragePer: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.primaryColor,
  },
  unSelectedCheck: {
    fontSize: 16,
    fontWeight: "400",
    color: "#7E7585",
    marginVertical: 5,
  },
  TotalView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  textValue2: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primaryColor,
  },
  planView: {
    backgroundColor: "#F5F4F9",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  dotView: { flexDirection: "row", marginVertical: 10 },
  contentView: {
    flexDirection: "row",
    flex: 1,
  },
  btnView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  selectText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
  },
  selectBtn: {
    flexDirection: "row",
    alignItems: "center",
    padding: 13,
    borderRadius: 25,
    backgroundColor: Colors.primaryColor,
    justifyContent: "center",
    marginTop: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  bottomSheetContainer: {
    // position: "absolute",
    // bottom: 0,
    // left: 0,
    // right: 0,
    // height: "35%",
    backgroundColor: "#F8FAFE",
    width: "90%",
    // paddingBottom: 0,
    // paddingHorizontal: 0,
    // borderTopRightRadius: 16,
    // borderTopLeftRadius: 16,
    padding: 15,
    borderRadius: 16,
  },
  SureView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
});
