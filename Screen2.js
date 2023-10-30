// // Screen2.js
// import React, { useState } from "react";
// import { View, Button, TextInput } from "react-native";
// import firebase from "firebase/app";
// import "firebase/database";
// import { db } from "./App";
// import { collection, addDoc } from "firebase/firestore";

// const Screen2 = () => {
//   const [text, setText] = useState("");

//   const saveTextToDatabase = async () => {
//     await addDoc(collection(db, "texts"), {
//       title: text,
//     });
//   };

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         gap: 10,
//       }}
//     >
//       <TextInput
//         placeholder="Enter text"
//         onChangeText={(newText) => setText(newText)}
//       />
//       <Button title="Save Text to Firebase" onPress={saveTextToDatabase} />
//     </View>
//   );
// };

// export default Screen2;
