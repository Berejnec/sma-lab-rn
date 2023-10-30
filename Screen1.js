import React, { useEffect, useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import "firebase/database";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./App";

// const Screen1 = ({ navigation }) => {
//   const [name, setName] = useState("");
//   const [greeting, setGreeting] = useState("");
//   const handleGreet = () => {
//     if (name) {
//       setGreeting(`Hello, ${name}`);
//     } else {
//       setGreeting("");
//     }
//   };

//   useEffect(() => {
//     const textsCollection = collection(db, "texts");

//     getDocs(textsCollection).then((snapshot) => {
//       let collection = [];
//       snapshot.docs.forEach((doc) => {
//         collection.push({ ...doc.data(), id: doc.id });
//       });
//       setName(collection[1]?.title);
//     });
//   });

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         gap: 10,
//       }}
//     >
//       <Button
//         title="Go to Screen 2"
//         onPress={() => navigation.navigate("Screen2")}
//       />
//       <TextInput
//         placeholder="Enter your name"
//         value={name}
//         onChangeText={(text) => setName(text)}
//       />
//       <Button color="red" title="Greet me" onPress={handleGreet} />
//       <Text>{greeting}</Text>
//     </View>
//   );
// };

// export default Screen1;
