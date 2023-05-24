import Login from './src/screen/Login';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <StatusBar 
        backgroundColor='transparent'
        translucent
      />
      <Login/>
    </>
  );
}

