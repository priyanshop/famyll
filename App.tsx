/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from "react";
import MainNavigator from "./src/Navigation/MainNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-native-paper";

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Provider>
        <MainNavigator />
      </Provider>
    </NavigationContainer>
  );
}
export default App;
