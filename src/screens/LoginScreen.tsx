import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { supabase } from '../lib/supabase';


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      console.log("🚀 ~ handleLogin ~ error:", error)
      alert(error.message)
    } else {
      // Redirect to app screen or update auth state
    }
  }

  return (
    <View className="flex-1 justify-center p-6">
      <Text className="text-2xl font-bold mb-4">Login</Text>
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
      <TouchableOpacity onPress={handleLogin} className="bg-blue-500 p-3 rounded">
        <Text className="text-white text-center font-semibold">Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text className="text-sm text-blue-600 text-center mt-4">Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text className="text-sm text-gray-600 text-center mt-2">Don&apos;t have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}
