import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SecondScreen from "../screens/SecondScreen";
import { MainStackParamList } from "~/types/navigation";
// import MainTabs from "./MainTabs";

const MainStack = createNativeStackNavigator<MainStackParamList>();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <MainStack.Screen name="MainTabs" component={MainTabs} /> */}
      <MainStack.Screen name="SecondScreen" component={SecondScreen} />
    </MainStack.Navigator>
  );
};

export default Main;