import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import "firebase/database";
import { getDocs } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

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

const Screen1 = ({ navigation }) => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const handleGreet = () => {
    if (name) {
      setGreeting(`Hello, ${name}`);
    } else {
      setGreeting("");
    }
  };

  useEffect(() => {
    const textsCollection = collection(db, "texts");

    getDocs(textsCollection).then((snapshot) => {
      let collection = [];
      snapshot.docs.forEach((doc) => {
        collection.push({ ...doc.data(), id: doc.id });
      });
      setName(collection[1]?.title);
    });
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate("Screen2")}
      />
      <TextInput
        placeholder="The text from Firebase will be shown here"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button color="red" title="Greet me" onPress={handleGreet} />
      <Text>{greeting}</Text>
    </View>
  );
};

const Screen2 = () => {
  const [text, setText] = useState("");

  const saveTextToDatabase = async () => {
    await addDoc(collection(db, "texts"), {
      title: text,
    });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <TextInput
        placeholder="Enter text"
        onChangeText={(newText) => setText(newText)}
      />
      <Button title="Save Text to Firebase" onPress={saveTextToDatabase} />
    </View>
  );
};

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
