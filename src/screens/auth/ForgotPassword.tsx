import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, TouchableOpacity, View, Image } from 'react-native';
import { Layout, Text, TextInput, Button } from 'react-native-rapi-ui';
import { supabase } from '~/lib/supabase';
import { AuthStackParamList } from '~/types/navigation';

export default function ForgotPassword({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, 'ForgotPassword'>) {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleForget = async () => {
    setLoading(true);
    const { data, error } = await supabase.auth.resetPasswordForEmail(email);
    if (!error) {
      setLoading(false);
      alert('Check your email to reset your password!');
    }
    if (error) {
      setLoading(false);
      alert(error.message);
    }
  };
  return (
    <KeyboardAvoidingView behavior="height" enabled className='flex-1'>
      <Layout>
        <ScrollView className="flex-grow">
          <View className="flex-1 justify-center bg-white items-center">
            <Image
              resizeMode="contain"
              className='h-[220px] w-[220px]'
              source={require('../../../assets/forget.png')}
            />
          </View>
          <View
            className='flex-3 px-[20px] pb-[20px] bg-white'>
            <Text
              size="h3"
              className='self-center p-[30px] font-bold'>
              Forget Password
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
            <Button
              text={loading ? 'Loading' : 'Send email'}
              onPress={() => {
                handleForget();
              }}
              className='mt-[20px]'
              disabled={loading}
            />

            <View
              className='flex-row items-center mt-[15px] justify-center'>
              <Text size="md">Already have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                <Text
                  size="md"
                  className='ml-[5px] font-bold'
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
