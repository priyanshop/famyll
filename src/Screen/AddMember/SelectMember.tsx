import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Overlay } from "react-native-elements";
import { Colors } from "../../Helper/Colors";
import CustomDropdown from "../../Components/CustomDropdown";
import CustomHeader from "../../Components/CustomHeader";
import CustomButton from "../../Components/CustomButton";

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

const SelectMember = ({ navigation, route }: any) => {
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      header: (props) => (
        <CustomHeader title={"Add Member"} navigation={navigation} />
      ),
    });
  }, [navigation, route]);

  const navigateTo = () => {
    navigation.navigate("ProviderDetails", {
      toAdd: true,
    });
  };

  const onBackdropPress = () => {
    setIsVisible(!isVisible);
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
          <CustomInfo label="Email : " value="martin@yopmail.com" />
          <CustomInfo label="Phone : " value="9586541235" />
          <CustomInfo label="City :  " value="Chicago" />
        </View>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity onPress={onBackdropPress} style={styles.selectBtn}>
          <Text style={styles.selectText}>Select</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateTo} style={styles.button}>
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateTo} style={styles.skipBtn}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ backgroundColor: Colors.bg, flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={{ marginTop: 0, paddingBottom: 120 }}>
          <View>
            <Text style={styles.welcome2}>
              Select Your General Practitioner
            </Text>
          </View>

          {/* <CustomDropdown
            data={data}
            onSelect={(selectedItem) => {
              console.log("Selected Item:", selectedItem);
            }}
            placeholder={"Provider Type"}
          /> */}
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
      <Overlay
        animationType={"slide"}
        isVisible={isVisible}
        onBackdropPress={onBackdropPress}
        overlayStyle={styles.bottomSheetContainer}
      >
        <View style={styles.SureView}>
          <Text style={styles.welcome}>{"Are You Sure?"}</Text>
        </View>
        <View style={styles.desctiptionView}>
          <Text style={styles.countineTxt}>
            {"Are you sure you want to continue this provider?"}
          </Text>
        </View>
        <View style={{ padding: 10 }}>
          <CustomButton marginTop={20}>{"Complete Payment"}</CustomButton>
          <TouchableOpacity onPress={onBackdropPress} style={styles.cancelBtn}>
            <Text style={styles.cancelTxt}>{"Cancel"}</Text>
          </TouchableOpacity>
        </View>
      </Overlay>
    </SafeAreaView>
  );
};

export default SelectMember;

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
    // flexDirection: "row",
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
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#0B1B22",
    fontSize: 14,
    fontWeight: "700",
  },
  selectText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
  },
  skipText: {
    color: Colors.primaryColor,
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
  },
  btnView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  contentView: {
    flexDirection: "row",
    flex: 1,
  },
  bottomSheetContainer: {
    // position: "absolute",
    // bottom: 0,
    // left: 0,
    // right: 0,
    height: "35%",
    backgroundColor: "#F8FAFE",
    width: "90%",
    // paddingBottom: 0,
    // paddingHorizontal: 0,
    // borderTopRightRadius: 16,
    // borderTopLeftRadius: 16,
    padding: 15,
    borderRadius:16,
  },
  countineTxt: {
    fontSize: 17,
    fontWeight: "400",
    color: "#574766",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  cancelBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    width: "100%",
    padding: 16,
    marginVertical: 5,
    backgroundColor: "#EBF3F7",
    justifyContent: "center",
  },
  cancelTxt: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0B1B22",
  },
  desctiptionView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  SureView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
});
