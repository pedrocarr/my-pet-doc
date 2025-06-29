import { View, ActivityIndicator } from "react-native";
import { Layout, themeColor } from "react-native-rapi-ui";

export default function () {
  return (
    <Layout>
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color={themeColor.primary} />
      </View>
    </Layout>
  );
}