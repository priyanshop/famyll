//@ts-nocheck
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import { Images } from "../../assets/index";
import { Colors } from "../../Helper/Colors";
import CustomButton from "../../Components/CustomButton";

const UserTypeOption = ({
  option,
  selectedOption,
  handleOptionChange,
}: any) => (
  <TouchableOpacity
    key={option.value}
    style={[
      styles.optionContainer,
      selectedOption === option.value ? styles.selectedOption : null,
    ]}
    onPress={() => handleOptionChange(option.value)}
  >
    <RadioButton.Android
      value={option.value}
      status={selectedOption === option.value ? "checked" : "unchecked"}
      onPress={() => handleOptionChange(option.value)}
      color={Colors.primaryColor}
    />
    <Text
      style={[
        styles.optionText,
        selectedOption === option.value ? styles.selectedOptionText : null,
      ]}
    >
      {option.label}
    </Text>
  </TouchableOpacity>
);

const SelectUserType = ({navigation,route}:any) => {
  const [selectedOption, setSelectedOption] = useState("A");

  const options = [
    { label: "Plan Owner", value: "A" },
    { label: "Member", value: "B" },
    { label: "Provider", value: "C" },
  ];

  const handleOptionChange = (value: any) => {
    setSelectedOption(value);
  };

  const navigateToSignIN = () => {
    navigation.navigate("SignInScreen",{
      isMember: selectedOption === "B",
      isPlan: selectedOption === "A",
      isProvider: selectedOption === "C",
    });
  };

  return (
    <View style={styles.container}>
      <Image source={Images.AppLogo} resizeMode="contain" style={styles.logo} />
      <Text style={styles.title}>Select Your User Type</Text>

      <View>
        {options.map((option) => (
          <UserTypeOption
            key={option.value}
            option={option}
            selectedOption={selectedOption}
            handleOptionChange={handleOptionChange}
          />
        ))}
        <CustomButton onPress={navigateToSignIN} marginTop={50}>Continue</CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  logo: {
    width: "50%",
    marginTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 15,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 30,
    width: "100%",
    padding: 8,
    marginVertical: 5,
    borderColor: Colors.commonBorderColor,
  },
  selectedOption: {
    backgroundColor: "#F1EBF7",
  },
  optionText: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.defualtTxtColor,
  },
  selectedOptionText: {
    color: "#000000",
  },
});

export default SelectUserType;
