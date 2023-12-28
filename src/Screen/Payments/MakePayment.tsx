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
  Platform,
} from "react-native";
import CustomHeader from "../../Components/CustomHeader";
import { Colors } from "../../Helper/Colors";


const info = [
  { type: "Selected Coverage Plan", value: "Basic Plan" },
  { type: "Coverage Plan Fee", value: "$XX/Month" },
  { type: "Plan Service Fee", value: "$2.99/Month" },
  { type: "Membership Fee", value: "$XX/Year" },
  { type: "Membership Service Fee", value: "$0.99/Month (Paid Yearly)" },
];

const CustomInfo1 = ({ label, value }: any) => {
  return (
    <View style={{ marginVertical: 7.5, flex: 0.5 }}>
      <Text style={styles.heading2}>{label}</Text>
      <Text style={styles.value2}>{value}</Text>
    </View>
  );
};

const MakePayment = ({ navigation, route }: any) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      header: (props) => (
        <CustomHeader title={"Make Payment"} navigation={navigation} />
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
        <Text style={styles.hash}>{"Member #1"}</Text>
        <Text style={styles.welcome}>{name}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <CustomInfo1 label={item.type} value={item.value} />
  );

  const navigateToCompletePayment = () => {
    navigation.navigate("CompletePayment");
  };

  return (
    <SafeAreaView style={{ backgroundColor: Colors.bg, flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={{ marginTop: 5, paddingBottom: 170 }}>
          {[0, 0].map(() => (
            <View style={styles.contactInfo}>
              <View>
                <EmployeeCard
                  {...{
                    name: "Alena Smith",
                    id: "#FML1000M",
                    status: "Covered",
                  }}
                />
                <View style={styles.line} />
                <View>
                  <FlatList
                    data={info}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.type}
                    numColumns={2}
                    contentContainerStyle={styles.container2}
                    style={{
                      paddingHorizontal: 15,
                      backgroundColor: "#FFF",
                    }}
                  />
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.bottomTab}>
        <View>
          <Text style={styles.terms}>
            {
              "Total Amount (Applied 10% discount for adding 5 or more than 5 members.)"
            }
          </Text>
          <Text style={styles.welcome}>{"$XXXX"}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity style={styles.skipBtn}>
            <Text style={styles.skipText}>{"Add More Member"}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToCompletePayment} style={styles.skipBtn2}>
            <Text style={styles.skipText2}>{"Complete Payment"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MakePayment;

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
  contactInfo: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginVertical: 5,
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
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#0B1B22",
    fontSize: 14,
    fontWeight: "700",
  },
  imageView: {
    flex: 0.3,
  },
  value: {
    fontSize: 12,
    fontWeight: "500",
    color: "#332640",
  },
  line: {
    height: 1,
    backgroundColor: "#E3E1E5",
    width: "100%",
    marginVertical: 10,
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
  innerHeader: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
  newHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hash: {
    fontSize: 16,
    fontWeight: "500",
    color: "#826C99",
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
  terms: {
    fontSize: 17,
    fontWeight: "500",
    color: "#826C99",
  },
  bottomTab: {
    width: "100%",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    padding: 20,
    paddingBottom: 40,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4, // Elevation for shadow on Android
      },
    }),
  },
});
