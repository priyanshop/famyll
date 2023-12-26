import React from "react";
import { View, Text } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";

const CustomClip = ({ color, status }: any) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: `${color}1A`,
        alignSelf: "flex-start",
        borderRadius: 14,
        padding: 2.5,
        paddingHorizontal: 5,
        marginTop: 5,
      }}
    >
      <Octicons name={"dot-fill"} size={14} color={color} />
      <Text style={{ fontSize: 13, fontWeight: "500", color: color }}>
        {"  "}
        {status}{" "}
      </Text>
    </View>
  );
};

export default CustomClip;
