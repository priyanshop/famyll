import { StyleSheet, View } from 'react-native';
import React from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import TabBarComponent from './ProviderComponent';

const ProviderTabBar = ({ state, navigation, descriptors }: BottomTabBarProps) => {    
  return (
    <View style={styles.tabBarStyle}>
      <TabBarComponent
        state={state}
        navigation={navigation}
        descriptors={descriptors}
      />
    </View>
  );
};

export default ProviderTabBar;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: 'white',
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    bottom: 0, // here you can use the bottom inset for more flexbility
    left: 0,
    right: 0,
    height: 80,
    flex: 1,
    elevation: 0,
    // borderRadius: 15,
    // shadowColor: '#000000',
    // shadowOpacity: 0.05,
    // shadowOffset: {
    //   width: 10,
    //   height: 10,
    // },
  },
});