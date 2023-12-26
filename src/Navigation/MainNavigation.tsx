import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CompleteProfile from "../Screen/Auth/CompleteProfile";
import ForgotPassword from "../Screen/Auth/ForgotPassword";
import ResetPassword from "../Screen/Auth/ResetPassword";
import SelectUserType from "../Screen/Auth/SelectUserType";
import SignInScreen from "../Screen/Auth/SignIn";
import SignUp from "../Screen/Auth/SignUp";
import VerifyOTP from "../Screen/Auth/VerfiyOTP";
import TabBar from "./TabBar";
import HelloWorldApp from "../Screen/index";
import MyPortfolio from "../Screen/Portfolio/MyPortfolio";
import MyEarning from "../Screen/MyEarning/MyEarning";
import MyProfile from "../Screen/Profile/Profile";
import ChangePassword from "../Screen/Profile/ChangePassword";

type RootStackParamList = {
  Home: any;
  Feed: any;
  Profile: any;
  Settings: any;
};

const BottomTab: any = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator tabBar={TabBar} screenOptions={{ headerShown: false }}>
      <BottomTab.Screen name="MyCare" component={MyPortfolio} />
      <BottomTab.Screen name="Providers" component={MyPortfolio} />
      <BottomTab.Screen name="MyEarning" component={MyEarning} />
      <BottomTab.Screen name="Profile" component={MyProfile} />
    </BottomTab.Navigator>
  );
}

function MainNavigator() {
  const forFade = ({ current }: any) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  const screenConfigurations = [
    {
      name: "SelectUser",
      component: SelectUserType,
      options: {
        headerTitle: "SelectUser",
        headerShown: false,
      },
    },
    {
      name: "Home",
      component: BottomTabNavigator,
      options: {
        headerTitle: "Home",
        headerShown: false,
      },
    },
    {
      name: "ChangePassword",
      component: ChangePassword,
      options: {
        headerTitle: "ChangePassword",
        headerShown: false,
      },
    },
    {
      name: "SignInScreen",
      component: SignInScreen,
      options: {
        headerTitle: "SignInScreen",
        headerShown: false,
      },
    },
    {
      name: "ForgotPassword",
      component: ForgotPassword,
      options: {
        headerTitle: "ForgotPassword",
        headerShown: false,
      },
    },
    {
      name: "VerifyOTP",
      component: VerifyOTP,
      options: {
        headerTitle: "VerifyOTP",
        headerShown: false,
      },
    },
    {
      name: "ResetPassword",
      component: ResetPassword,
      options: {
        headerTitle: "ResetPassword",
        headerShown: false,
      },
    },
    {
      name: "SignUp",
      component: SignUp,
      options: {
        headerTitle: "SignUp",
        headerShown: false,
      },
    },
    {
      name: "CompleteProfile",
      component: CompleteProfile,
      options: {
        headerTitle: "CompleteProfile",
        headerShown: false,
      },
    },
  ];

  return (
    <Stack.Navigator initialRouteName={screenConfigurations[0].name}>
      {screenConfigurations.map((screen) => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </Stack.Navigator>
  );
}
export default MainNavigator;
