import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { firebase } from "../../firebase/config";
import styles from "./styles";
export default function DetailEntityScreen(props) {
  const [entityText, setEntityText] = useState("");
  const [entity, setEntity] = useState({
    text: "",
    authorID: "",
    createdAt: "",
  });

  const getEntityById = async (id) => {
    const dbRef = firebase.firestore().collection("entities").doc(id);
    const doc = await dbRef.get();
    const entity = doc.data();
    setEntity({
      ...entity,
      id: doc.id,
    });
  };
  useEffect(() => {
    getEntityById(props.route.params.entityId);
  }, []);

  const handleChangeText = (name, value)=>{
      setEntity({...entity, [name]: value});
  }
  const deleteEntity = async () => {
    const dbRef = firebase
      .firestore()
      .collection("entities")
      .doc(props.route.params.entityId);
    await dbRef.delete();
    props.navigation.navigate("Home");
  };

  const updateEntity = async () => {
      const dbRef= firebase.firestore().collection('entities').doc(entity.id);
      await dbRef.set({
        text: entity.text,
        authorID: entity.authorID,
        createdAt: entity.createdAt,
      })
      props.navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add new entity"
          placeholderTextColor="#aaaaaa"
          onChangeText={(value) => handleChangeText("text", value)}
          value={entity.text}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={() => updateEntity()}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonDel}
          onPress={() => deleteEntity()}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
