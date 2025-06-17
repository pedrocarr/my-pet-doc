import { ScreenContent } from '~/components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import './global.css';
import AuthStack from '~/navigation/AuthStack';
import 'react-native-url-polyfill/auto'

export default function App() {
  return (
    <>
      <AuthStack/>
    </>
  );
}
