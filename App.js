import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";

const firebaseConfig = {
  apiKey: "AIzaSyCbEcPCbwWFRHgMBjHpup9Z-UDRa84JuCc",
  authDomain: "sma-lab-58dab.firebaseapp.com",
  projectId: "sma-lab-58dab",
  storageBucket: "sma-lab-58dab.appspot.com",
  messagingSenderId: "891151142335",
  appId: "1:891151142335:web:2534535b4fe6dc22ac250a",
  measurementId: "G-FD5HV1X0PN",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
