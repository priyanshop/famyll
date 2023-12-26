import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Colors } from "../Helper/Colors";

const CustomButton = ({ marginTop, onPress, children }: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 30,
        width: "100%",
        padding: 16,
        marginVertical: 5,
        backgroundColor: Colors.primaryColor,
        justifyContent: "center",
        marginTop: marginTop,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "600", color: "#fff" }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
