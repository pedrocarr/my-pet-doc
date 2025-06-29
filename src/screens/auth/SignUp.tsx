import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '~/types/navigation';

export default function SignUp({ navigation }: NativeStackScreenProps<AuthStackParamList, "SignUp">) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      Alert.alert(error.message)
    }
    else alert("Check your email to confirm your account!");
  };

  return (
    <View className="flex-1 justify-center p-6">
      <Text className="text-2xl font-bold mb-4">Sign Up</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="border p-2 rounded mb-4"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="border p-2 rounded mb-4"
      />
      <TouchableOpacity onPress={handleSignup} className="bg-green-500 p-3 rounded">
        <Text className="text-white text-center font-semibold">Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
