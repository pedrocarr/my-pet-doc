import { View, KeyboardAvoidingView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '~/types/navigation';
import { Layout, Text, TextInput, Button } from 'react-native-rapi-ui';


export default function Login({ navigation }: NativeStackScreenProps<AuthStackParamList, 'Login'>) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState<boolean>(false)

  const handleLogin = async () => {
    setLoading(true)
    const { error, data } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setLoading(false)
      alert(error.message)
    }
    if (!error && !data.user) {
      setLoading(false)
      alert("Check your email for the login link")
    }
  }

  return (
    <KeyboardAvoidingView behavior='height' enabled className='flex-1'>
      <Layout>
        <ScrollView className='flex-grow'>
          <View className='flex-1 justify-center items-center bg-white'>
            <Image
              resizeMode="contain"
              className='h-[200px] w-[200px]'
              source={require("../../../assets/login.png")}
            />
          </View>
          <View className='flex-3 px-5 pb-5 bg-white'>
            <Text
              className='self-center p-[30px] font-bold'
              size='h3'
            >
              Login
            </Text>
            <Text>Email</Text>
            <TextInput
              containerStyle={{ marginTop: 15 }}
              placeholder='Enter your email'
              value={email}
              autoCapitalize='none'
              autoComplete='off'
              autoCorrect={false}
              keyboardType='email-address'
              onChangeText={(text) => setEmail(text)}
            />
            <Text className='mt-[15px]'>Password</Text>
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
              text={loading ? "Loading" : "Continue"}
              onPress={() => {
                handleLogin();
              }}
              className='mt-[20px]'
              disabled={loading}
            />
            <View
              className='flex-row items-center mt-[15px] justify-center'
            >
              <Text size="md">Don&apos;t have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("SignUp");
                }}
              >
                <Text
                  size='md'
                  className='ml-[5px] font-bold'
                >
                  Register here
                </Text>
              </TouchableOpacity>
            </View>
            <View
              className='flex-row items-center mt-[10px] justify-center'
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ForgotPassword");
                }}
              >
                <Text size='md' className='font-bold'>
                  Forget password
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Layout>
    </KeyboardAvoidingView>
  );
}
