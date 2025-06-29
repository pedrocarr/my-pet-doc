import 'global.css'
import { AuthProvider } from '~/provider/AuthProvider';
import Navigation from '~/navigation';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
      <StatusBar />
    </>
  );
}
