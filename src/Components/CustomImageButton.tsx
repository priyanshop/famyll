import React from "react";
import { TouchableOpacity, Image } from "react-native";

const CustomImageButton = ({ imageSource, onPress }: any) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#FFF",
        height: 48,
        width: 48,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 2.5,
      }}
      onPress={onPress}
    >
      <Image
        source={imageSource}
        resizeMode="contain"
        style={{ height: 24, width: 24 }}
      />
    </TouchableOpacity>
  );
};

export default CustomImageButton;
