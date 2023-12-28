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
import Providers from "../Screen/Provider/Providers";
import { Images } from "../assets";
import CustomImageButton from "../Components/CustomImageButton";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { Colors } from "../Helper/Colors";
import AddMemberScreen from "../Screen/AddMember/AddMemberScreen";
import ProviderDetails from "../Screen/Provider/ProviderDetails";
import SelectMember from "../Screen/AddMember/SelectMember";
import MakePayment from "../Screen/Payments/MakePayment";
import CompletePayment from "../Screen/Payments/CompletePayment";
import UpgradePlan from "../Screen/Plans/UpgradePlan";
import MemberDetails from "../Screen/Member/MemberDetails";
import SelectPlanscreen from "../Screen/Plans/SelectPlanScreen";
import MemberTabBar from "./MemberTabBar";
import MyCarePortfolio from "../Screen/Portfolio/MyCarePortfolio";
import MyMemberProfile from "../Screen/Profile/MyMemberProfile";
import MyReimbursements from "../Screen/MyReimbursements/MyReimbursements";
import PreventiveExam from "../Screen/PreventiveExam/PreventiveExam";
import PreventiveExamList from "../Screen/PreventiveExam/PreventiveExamList";
import MyPlanDetails from "../Screen/Plans/MyPlanDetails";
import MakeClaim from "../Screen/Claim/MakeClaim";

const BottomTab: any = createBottomTabNavigator();
const Stack = createStackNavigator();



function BottomTabNavigator() {
  return (
    <BottomTab.Navigator tabBar={TabBar} screenOptions={{ headerShown: false }}>
      <BottomTab.Screen name="MyCare" component={MyPortfolio} />
      <BottomTab.Screen name="Providers" component={Providers} />
      <BottomTab.Screen name="MyEarning" component={MyEarning} />
      <BottomTab.Screen name="Profile" component={MyProfile} />
    </BottomTab.Navigator>
  );
}

function MemberBottomTabNavigator() {
  return (
    <BottomTab.Navigator tabBar={MemberTabBar} screenOptions={{ headerShown: false }}>
      <BottomTab.Screen name="MyCare" component={MyCarePortfolio} />
      <BottomTab.Screen name="PreventiveExam" component={PreventiveExam} />
      <BottomTab.Screen name="Provider" component={Providers} />
      <BottomTab.Screen name="Profile" component={MyMemberProfile} />
      <BottomTab.Screen name="MyReimbursements" component={MyReimbursements} />
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
      name: "MemberHome",
      component: MemberBottomTabNavigator,
      options: {
        headerTitle: "MemberHome",
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
      name: "ProviderDetails",
      component: ProviderDetails,
      options: {
        headerTitle: "ProviderDetails",
        headerShown: true,
      },
    },
    {
      name: "AddMemberScreen",
      component: AddMemberScreen,
      options: {
        headerTitle: "AddMemberScreen",
        headerShown: true,
      },
    },
    {
      name: "SelectMember",
      component: SelectMember,
      options: {
        headerTitle: "SelectMember",
        headerShown: true,
      },
    },
    {
      name: "MakePayment",
      component: MakePayment,
      options: {
        headerTitle: "MakePayment",
        headerShown: true,
      },
    },
    {
      name: "CompletePayment",
      component: CompletePayment,
      options: {
        headerTitle: "CompletePayment",
        headerShown: true,
      },
    },
    {
      name: "UpgradePlan",
      component: UpgradePlan,
      options: {
        headerTitle: "UpgradePlan",
        headerShown: true,
      },
    },
    {
      name: "MemberDetails",
      component: MemberDetails,
      options: {
        headerTitle: "MemberDetails",
        headerShown: true,
      },
    },
    {
      name: "SelectPlanscreen",
      component: SelectPlanscreen,
      options: {
        headerTitle: "SelectPlanscreen",
        headerShown: true,
      },
    },
    {
      name: "PreventiveExamList",
      component: PreventiveExamList,
      options: {
        headerTitle: "PreventiveExamList",
        headerShown: true,
      },
    },
    {
      name: "MyPlanDetails",
      component: MyPlanDetails,
      options: {
        headerTitle: "MyPlanDetails",
        headerShown: true,
      },
    },
    {
      name: "MakeClaim",
      component: MakeClaim,
      options: {
        headerTitle: "MakeClaim",
        headerShown: true,
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

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.bg,
    flexGrow: 1,
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  innerHeader: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  serachView: { flexDirection: "row", justifyContent: "space-between" },
  welcome: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#000",
  },

  contactInfo: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginVertical: 10,
  },
  logoutIcon: {
    height: 24,
    width: 24,
  },
  forgotView: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  forgtPass: {
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.primaryColor,
  },
});
