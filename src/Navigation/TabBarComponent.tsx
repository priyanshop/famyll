import { Dimensions, Image, Pressable, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
// import Animated, {
//   runOnUI,
//   useAnimatedStyle,
//   useSharedValue,
//   withTiming,
// } from 'react-native-reanimated';
import {
  TabNavigationState,
  ParamListBase,
  NavigationHelpers,
} from "@react-navigation/native";
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Colors } from "../Helper/Colors";
import { Images } from "../assets/index";
export const routes = {
  mycare: { name: "MyCare", icon: Images.MyCare },
  providers: { name: "Providers", icon: Images.Providers },
  myearning: { name: "MyEarning", icon: Images.MyEarning },
  profile: { name: "Profile", icon: Images.Profile },
};
type Props = {
  state: TabNavigationState<ParamListBase>;
  descriptors: any;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
};

const { width } = Dimensions.get("window");

// 20 on each side for absolute positioning of the tab bar
// 20 on each side for the internal padding
const TAB_WIDTH = (width - 40 * 2) / 4;

const TabBarComponent = ({ state, navigation, descriptors }: any) => {
  // const translateX = useSharedValue(0);
  // const focusedTab = state.index;

  // const handleAnimate = (index: number) => {
  //   'worklet';
  //   translateX.value = withTiming(index * TAB_WIDTH, {
  //     duration: 1000,
  //   });
  // };
  // useEffect(() => {
  //   runOnUI(handleAnimate)(focusedTab);
  // }, [focusedTab]);

  // const rnStyle = useAnimatedStyle(() => {
  //   return {
  //     transform: [{ translateX: translateX.value }],
  //   };
  // });

  return (
    <>
      {/* <View style={[styles.container]} /> */}
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({
              name: route.name,
              merge: true,
              params: {},
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        const routeName = route.name.toLowerCase() as keyof typeof routes;
        const icon = routes[routeName]?.icon;
        console.log("state.routes", route.name, routeName, icon, routes);

        return (
          <Pressable
            key={`route-${index}`}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={isFocused ? styles.item2 : styles.item}
          >
            <Image
              source={icon}
              resizeMode={"contain"}
              style={{
                height: 24,
                width: 24,
                tintColor: isFocused ? "#fff" : Colors.defualtTxtColor,
              }}
            />
            {/* <AntDesign
              name={icon}
              size={24}
              color={isFocused ? "#fff" : "black"}
            /> */}
          </Pressable>
        );
      })}
    </>
  );
};

export default TabBarComponent;

const styles = StyleSheet.create({
  container: {
    width: TAB_WIDTH,
    height: 40,
    backgroundColor: Colors.primaryColor,
    zIndex: 0,
    position: "absolute",
    marginHorizontal: 20,
    borderRadius: 20,
  },
  item: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
  },
  item2: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    backgroundColor: Colors.primaryColor,
    // marginHorizontal: 20,
    borderRadius: 20,
    // padding:10
  },
});
