import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Platform,
} from "react-native";
import { Images } from "../assets";
import { Colors } from "../Helper/Colors";

const MemberCard = () => {
  return (
    <ImageBackground
      source={Images.MembershipCard}
      style={{ borderRadius: 10, aspectRatio: 16 / 9, width: "100%" }}
      imageStyle={{
        flex: 1,
        // backgroundColor: "#7C45B2",
        aspectRatio: 16 / 9,
        borderRadius: 10,
        width: "100%",
      }}
      resizeMode={"cover"}
    >
      <View style={styles.upperView}>
        <Image
          source={Images.AppLogo}
          style={styles.appIcon}
          resizeMode={"contain"}
        />
        <View style={styles.coverView}>
          <Text style={styles.coverTxt}>{" Covered "}</Text>
        </View>
      </View>
      <View style={styles.profilView}>
        <Image
          source={{
            uri: "https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
          }}
          style={styles.profileImage}
          resizeMode={"cover"}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.name}>JOHN JACOB SMITH</Text>
          <Text style={styles.id}>#FML1000M</Text>
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <View style={styles.BottomView}>
          <View style={styles.halfFlex}>
            <Text style={styles.labelTxt}>{"DOB"}</Text>
            <Text style={styles.valueTxt}>{"12/05/1986"}</Text>
          </View>
          <View style={styles.halfFlex}>
            <Text style={styles.labelTxt}>{"PLAN OWNER"}</Text>
            <Text style={styles.valueTxt}>{"ANONYMOUS"}</Text>
          </View>
        </View>
        <View style={styles.BottomView}>
          <View style={styles.halfFlex}>
            <Text style={styles.labelTxt}>{"PLAN EFFECTIVITY"}</Text>
            <Text style={styles.valueTxt}>{"12/05/2023"}</Text>
          </View>
          <View style={styles.halfFlex}>
            <Text style={styles.labelTxt}>{"PLAN TYPE"}</Text>
            <Text style={styles.valueTxt}>{"SPECIALIST PLAN"}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MemberCard;

const styles = StyleSheet.create({
  upperView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    padding: 8,
  },
  appIcon: { width: 64, height: 18, tintColor: "#fff" },
  coverView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `#ffff`,
    alignSelf: "flex-start",
    borderRadius: 14,
    padding: 2.5,
    paddingHorizontal: 5,
    marginTop: 5,
  },
  coverTxt: {
    fontSize: 13,
    fontWeight: "500",
    color: Colors.Covered,
  },
  profilView: {
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  profileImage: {
    width: 42,
    height: 42,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4, // Elevation for shadow on Android
      },
    }),
  },
  name: { color: "white", fontSize: 16, fontWeight: "700" },
  id: { color: "white", fontSize: 12, fontWeight: "700", marginTop: 12 },
  BottomView: {
    flexDirection: "row",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  labelTxt: { color: "white", fontSize: 10, fontWeight: "600" },
  valueTxt: { color: "white", fontSize: 12, fontWeight: "600", marginTop: 2 },
  halfFlex: {
    flex: 0.5,
  },
});
