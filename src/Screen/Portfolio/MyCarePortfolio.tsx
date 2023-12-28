import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
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
const CustomInfo = ({ label, value }: any) => {
  return (
    <View style={styles.InfoView}>
      <Text style={styles.heading}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};



const MemberCard = () => (
  <View style={styles.memberCard}>
    <View style={styles.newHeader}>
      <View style={styles.innerHeader}>
        <Text style={styles.welcome2}>{"Basic Plan"}</Text>
      </View>
      <View>
        <CustomClip color={Colors["Covered"]} status={"Covered"} />
      </View>
    </View>
    <View style={styles.newHeader2}>
      <View style={styles.innerHeader}>
        <Text style={styles.memberLabel}>{"Member Number:"}</Text>
      </View>
      <View>
        <Text style={styles.memberValue}>{"#FML1000M"}</Text>
      </View>
    </View>
    <View style={styles.newHeader2}>
      <View style={styles.innerHeader}>
        <Text style={styles.memberLabel}>{"Plan Onwer:"}</Text>
      </View>
      <View>
        <Text style={styles.memberValue}>{"ANONYMOUS"}</Text>
      </View>
    </View>
  </View>
);

const MyCarePortfolio = ({ navigation, route }: any) => {
  const navigateToMyPlan = () => {
    navigation.navigate("MyPlanDetails");
  };
  const navigateToProviderDetials = () => {
    navigation.navigate("ProviderDetails",{
      header:"General Practitioner"
    });
  };

  const navigateToMakeClaim = () => {
    navigation.navigate("MakeClaim");
  };

  const EmployeeCard = ({ name, id, status }: any) => (
    <>
      <View style={styles.centerDiv}>
        <Text style={styles.serviceTitle}>{"General Practitioner"}</Text>
        <Text style={styles.visitText}>
          {"Remaining Visit: "}
          <Text style={styles.buttonText}>1</Text>
        </Text>
      </View>
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
          <CustomInfo label="Phone : " value="9586541235" />
          <CustomInfo label="City :  " value="Chicago" />
          <TouchableOpacity onPress={navigateToProviderDetials} style={styles.button}>
            <Text style={styles.buttonText}>View Details</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line} />
    </>
  );

  return (
    <SafeAreaView style={{ backgroundColor: Colors.bg, flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.headerView}>
          <View>
            <Text style={styles.welcome}>Welcome,</Text>
            <Text style={styles.profileName}>
              John Smith <Text style={styles.hand}>✋</Text>
            </Text>
          </View>
          <View style={styles.serachView}>
            <CustomImageButton imageSource={Images.searchnormal} />
            <CustomImageButton imageSource={Images.notification} />
          </View>
        </View>
        <View style={styles.dateView}>
          <Image
            source={Images.calendar}
            resizeMode={"contain"}
            style={styles.calenderIcon}
          />
          <Text style={styles.date}> 16th August, 2023. Monday.</Text>
        </View>
        <View style={styles.centerDiv}>
          <TouchableOpacity onPress={navigateToMyPlan} style={styles.skipBtn}>
            <Text style={styles.skipText}>{"Plan Details"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skipBtn2}>
            <Text style={styles.skipText2}>{"Membership Card"}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contactInfo}>
          <View style={styles.centerDiv}>
            <Text style={styles.welcome}>{"My Plan"}</Text>
            <TouchableOpacity onPress={navigateToMakeClaim} style={styles.button}>
              <Text style={styles.buttonText}>Make Claim</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.line} />
          <MemberCard />
          <Text style={styles.serviceTitle}>{"Service List"}</Text>
          <View style={styles.line} />
          {EmployeeList.map((employee) => (
            <EmployeeCard {...employee} key={employee.id} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyCarePortfolio;

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
  dateView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginVertical: 10,
  },
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
  },
  buttonText: {
    color: "#0B1B22",
    fontSize: 14,
    fontWeight: "600",
  },
  status: {
    fontSize: 12,
    fontWeight: "500",
    color: "#1A9C2F",
  },
  imageView: {
    flex: 0.4,
  },
  skipText: {
    color: Colors.primaryColor,
    fontSize: 16,
    fontWeight: "700",
  },
  skipBtn: {
    flexDirection: "row",
    alignItems: "center",
    padding: 13,
    borderRadius: 25,
    borderColor: Colors.primaryColor,
    justifyContent: "center",
    marginTop: 5,
    borderWidth: 1.5,
    flex: 1,
    marginHorizontal: 5,
    paddingHorizontal: 12,
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
  contactInfo: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginVertical: 10,
    marginBottom: 100,
  },
  centerDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  line: {
    height: 1,
    backgroundColor: "#E3E1E5",
    width: "100%",
    marginVertical: 10,
  },
  serviceTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
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
  visitText: {
    color: "#646464",
    fontSize: 14,
    fontWeight: "600",
  },
  newHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  newHeader2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  innerHeader: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  welcome2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  memberLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: "#757575",
  },
  memberValue: {
    fontSize: 18,
    fontWeight: "600",
    color: "#332640",
  },
  memberCard: {
    backgroundColor: "#F5F4F9",
    borderRadius: 12,
    padding: 15,
    marginVertical: 5,
    marginBottom: 15,
  },
});
