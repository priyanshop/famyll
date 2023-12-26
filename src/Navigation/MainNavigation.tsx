import { createStackNavigator } from "@react-navigation/stack";
import CompleteProfile from "../Screen/Auth/CompleteProfile";
import ForgotPassword from "../Screen/Auth/ForgotPassword";
import ResetPassword from "../Screen/Auth/ResetPassword";
import SelectUserType from "../Screen/Auth/SelectUserType";
import SignInScreen from "../Screen/Auth/SignIn";
import SignUp from "../Screen/Auth/SignUp";
import VerifyOTP from "../Screen/Auth/VerfiyOTP";

const Stack = createStackNavigator();
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
