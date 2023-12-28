import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";
import { Colors } from "../Helper/Colors";

const CustomTextInput = ({
  label,
  secureTextEntry = false,
  value,
  onChangeText,
  placeholderText = "",
  error = "",
}) => {
  const [isSecure, setIsSecure] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  const toggleSecureTextEntry = () => {
    setIsSecure((prev) => !prev);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View
      style={{
        flexDirection: "column",
        marginVertical: 8,
        flex: 1,
        marginHorizontal: 5,
      }}
    >
      {label &&<Text
        style={{
          marginBottom: 5,
          fontSize: 16,
          fontWeight: "500",
          color: isFocused ? Colors.primaryColor : Colors.labelTxt,
        }}
      >
        {label}
      </Text>}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderRadius: 30,
          width: "100%",
          padding: 12,
          borderColor: isFocused
            ? Colors.primaryColor
            : Colors.commonBorderColor,
        }}
      >
        <TextInput
          style={{ flex: 1, fontSize: 16, fontWeight: "500", color: "#000" }}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholderText}
          placeholderTextColor={Colors.defualtTxtColor}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={toggleSecureTextEntry}>
            {/* You can replace the eye and eye-slash icons with your own icons */}
            {isSecure ? (
              <Feather
                name="eye-off"
                size={20}
                color={Colors.defualtTxtColor}
              />
            ) : (
              <Feather name="eye" size={20} color={Colors.defualtTxtColor} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={{ color: "red" }}>{error}</Text>}
    </View>
  );
};

export default CustomTextInput;
