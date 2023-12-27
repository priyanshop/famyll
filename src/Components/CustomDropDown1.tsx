import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Entypo from "react-native-vector-icons/Entypo";
import { Colors } from "../Helper/Colors";

const CustomDropdown1 = ({
  data,
  onSelect,
  placeholder = "",
  border = false,
}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Dropdown
      style={[
        styles.dropdown,
        border && { borderColor: Colors.primaryColor, borderWidth: 1.5 },
        border && { backgroundColor: "#fff" },
      ]}
      placeholderStyle={
        border ? styles.placeholderStyleFocus : styles.placeholderStyle
      }
      selectedTextStyle={
        border ? styles.selectedTextStyle1 : styles.selectedTextStyle
      }
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
          color={border ? Colors.primaryColor : "#FFF"}
          name={!isFocus ? "chevron-thin-down" : "chevron-thin-up"}
          size={20}
        />
      )}
    />
  );
};

export default CustomDropdown1;

const styles = StyleSheet.create({
  dropdown: {
    height: 40,

    borderRadius: 25,
    paddingHorizontal: 8,
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: Colors.primaryColor,
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
    fontWeight: "600",
    color: "#fff",
  },
  placeholderStyleFocus: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.primaryColor,
  },
  selectedTextStyle: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.primaryColor,
  },
  selectedTextStyle1: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
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
