import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../types/navigation"

import Login from '../screens/auth/Login';
import SignUp from "~/screens/auth/SignUp";
import ForgotPassword from "~/screens/auth/ForgotPassword";



const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export default function Auth() {
  return (
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="SignUp" component={SignUp} />
        <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
      </AuthStack.Navigator>
  )
}
