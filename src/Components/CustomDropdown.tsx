import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Entypo from "react-native-vector-icons/Entypo";
import { Colors } from "../Helper/Colors";

const CustomDropdown = ({ data, onSelect, placeholder = "", label }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <>
      {label && (
        <Text
          style={{
            marginBottom: 5,
            fontSize: 16,
            fontWeight: "500",
            marginLeft:5,
            color: isFocus ? Colors.primaryColor : Colors.labelTxt,
          }}
        >
          {label}
        </Text>
      )}

      <Dropdown
        style={[
          styles.dropdown,
          isFocus || (value && { borderColor: Colors.primaryColor }),
        ]}
        placeholderStyle={
          isFocus ? styles.placeholderStyleFocus : styles.placeholderStyle
        }
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? placeholder : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
          onSelect(item.value);
        }}
        renderRightIcon={() => (
          <Entypo
            style={styles.icon}
            color={isFocus || value ? Colors.primaryColor : "#B1A8BA"}
            name={!isFocus ? "chevron-thin-down" : "chevron-thin-up"}
            size={20}
          />
        )}
      />
    </>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  dropdown: {
    height: 43,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 8,
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#B1A8BA",
  },
  placeholderStyleFocus: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.primaryColor,
  },
  selectedTextStyle: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.primaryColor,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
