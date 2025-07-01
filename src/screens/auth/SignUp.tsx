import { useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { supabase } from "../../lib/supabase";
import { AuthStackParamList } from "../../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Layout,
  Text,
  TextInput,
  Button,
} from "react-native-rapi-ui";

export default function SignUp ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, "SignUp">) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function signUp() {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (!error && data.user) {
      setLoading(false);
      alert("Check your email for the login link!");
    }
    if (error) {
      setLoading(false);
      alert(error.message);
    }
  }
  return (
    <KeyboardAvoidingView behavior="height" enabled className="flex-1">
      <Layout>
        <ScrollView
          className="flex-grow"
        >
          <View
            className="flex-1 justify-center items-center bg-white"
          >
            <Image
              resizeMode="contain"
              className="w-[220px] h-[220px]"
              source={require("../../../assets/register.png")}
            />
          </View>
          <View
            className="flex-3 px-[20px] pb-[20px] bg-white"
          >
            <Text
              size="h3"
              className="self-center p-[30px] font-bold"
            >
              Register
            </Text>
            <Text>Email</Text>
            <TextInput
              containerStyle={{ marginTop: 15 }}
              placeholder="Enter your email"
              value={email}
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
            />

            <Text className="mt-[15px]">Password</Text>
            <TextInput
              containerStyle={{ marginTop: 15 }}
              placeholder="Enter your password"
              value={password}
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
            <Button
              text={loading ? "Loading" : "Create an account"}
              onPress={() => {
                signUp();
              }}
              className="mt-[20px]"
              disabled={loading}
            />
            <View
              className="flex-row items-center mt-[15px] justify-center"
            >
              <Text size="md">Already have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text
                  size="md"
                  className="ml-[5px] font-bold"
                >
                  Login here
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Layout>
    </KeyboardAvoidingView>
  );
}