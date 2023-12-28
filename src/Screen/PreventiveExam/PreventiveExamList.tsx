import React, { useCallback, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Alert,
  Linking,
  TouchableOpacity,
  Image,
} from "react-native";
import { Overlay } from "react-native-elements";
import CustomButton from "../../Components/CustomButton";
import CustomHeader from "../../Components/CustomHeader";
import { Colors } from "../../Helper/Colors";

const labs = [
  {
    name: "Any Lab Name",
    phoneNumber: "+(012) 345 6789",
    email: "example@email.com",
    businessHours: "8:00 AM to 2:00 PM",
  },
];

const exams = [
  {
    name: "PSA Exam Yearly",
    eligibility: "From 44 years old",
    status: "Pending Clinical Screening",
    link: "https://samplelink.com",
  },
  {
    name: "Colonoscopy every 5 years",
    eligibility: "From 45 years old",
    status: "Pending Clinical Screening",
    link: "https://samplelink.com",
  },
  {
    name: "Endoscopy every 3 years",
    eligibility: "From 45 years old",
    status: "Pending Clinical Screening",
    link: "https://samplelink.com",
  },
];

type OpenURLButtonProps = {
  url: string;
  children: string;
};

const OpenURLButton = ({ url, children }: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <Text
      onPress={handlePress}
      style={{ fontSize: 15, fontWeight: "500", color: Colors.primaryColor }}
    >
      {url}
    </Text>
  );
};

const CustomInfo = ({ label, value, link = false }: any) => {
  return (
    <View style={{ marginVertical: 15, flex: 0.5 }}>
      <Text style={styles.heading}>{label}</Text>
      {link ? (
        <View style={styles.statusView}>
          <OpenURLButton url={value} />
        </View>
      ) : (
        <Text style={styles.value}>{value}</Text>
      )}
    </View>
  );
};

const PreventiveExamList = ({ navigation, route }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  useLayoutEffect(() => {
    navigation.setOptions({
      header: (props) => (
        <CustomHeader title={"Preventive Exam"} navigation={navigation} />
      ),
    });
  }, [navigation, route]);

  const onBackdropPress = () => {
    setIsVisible(!isVisible);
  };

  return (
    <SafeAreaView style={{ backgroundColor: Colors.bg, flex: 1 }}>
      <ScrollView style={styles.container}>
        <View
          style={{
            marginTop: 10,
            marginBottom: 100,
          }}
        >
          <View style={styles.contactInfo}>
            {exams.map((item, index, data) => (
              <View>
                <View style={styles.newHeader}>
                  <View style={styles.innerHeader}>
                    <Text style={styles.welcome2}>{item.name}</Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={onBackdropPress}
                      style={styles.skipBtn}
                    >
                      <Text style={styles.skipText}>{"Schedule"}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.row}>
                  <CustomInfo
                    label="Exam elgibility:"
                    value={item.eligibility}
                  />
                  <CustomInfo label="Current Status" value={item.status} />
                </View>
                <View>
                  <CustomInfo
                    link={true}
                    value={item.link}
                    label="Learn more about PSA Exam:"
                  />
                </View>
                {data.length - 1 === index ? null : (
                  <View style={styles.line} />
                )}
              </View>
            ))}
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
          <Text style={styles.welcome2}>{"Schedule Exam"}</Text>
        </View>
        <View style={styles.desctiptionView}>
          <Image
            source={{
              uri: "https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
            }}
            style={styles.image}
            resizeMode={"cover"}
          />
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          <Text style={styles.titleTxt}>
            {"Lab: "}
            <Text style={styles.valueTxt}>{"Any Lab Name"}</Text>
          </Text>
          <Text style={styles.titleTxt}>
            {"Phone Number: "}
            <Text style={styles.valueTxt}>{"+(012) 345 6789"}</Text>
          </Text>
          <Text style={styles.titleTxt}>
            {"Email: "}
            <Text style={styles.valueTxt}>{"example@email.com"}</Text>
          </Text>
          <Text style={styles.titleTxt}>
            {"Business Hours: "}
            <Text style={styles.valueTxt}>{"8:00 AM to 2:00 PM"}</Text>
          </Text>
        </View>
        <View style={{ padding: 10, width: "70%", alignSelf: "center" }}>
          <CustomButton
            onPress={() => {
              Linking.openURL("tel:7894561230");
            }}
            marginTop={20}
          >
            {"Call to Schedule"}
          </CustomButton>
        </View>
      </Overlay>
    </SafeAreaView>
  );
};

export default PreventiveExamList;

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
    padding: 20,
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
  popupMsg: {
    fontSize: 20,
    fontWeight: "400",
    color: "#0B0611",
  },
  line: {
    height: 1,
    backgroundColor: "#E3E1E5",
    width: "100%",
    marginVertical: 10,
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
  innerHeader: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  welcome2: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  bottomSheetContainer: {
    backgroundColor: "#F8FAFE",
    width: "80%",
    padding: 15,
    borderRadius: 16,
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
    marginTop: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  titleTxt: {
    fontSize: 16,
    fontWeight: "500",
    color: "#7E7E7E",
    marginVertical: 5,
  },
  valueTxt: {
    fontSize: 16,
    fontWeight: "500",
    color: "#0D0D0D",
    marginVertical: 5,
  },
});
