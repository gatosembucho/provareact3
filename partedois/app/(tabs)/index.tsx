import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import {db} from '../../firebaseConfig'
import { router, useRouter } from 'expo-router';

export default function CadastroPersonagem() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  async function registerUser() {
    try {

      if (!email || !password || !confirmPassword) {
        console.log("Campo obrigatório.");
        return;
      }

      const user = {
        name: email,
        species: password,
        age: confirmPassword,
      };

      await addDoc(collection(db, "usuarios"), user);
      console.log("Usuario cadastrado!");

    } catch (err) {
      console.log("Erro ao cadastrar:", err);
    }
  }

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>

      <Text style={{
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#698CC2"
      }}>
        Cadastrar
      </Text>

      <TextInput
        placeholder="email"
        placeholderTextColor="#888"
        onChangeText={setEmail}
        style={inputStyle}
      />

      <TextInput
        placeholder="senha"
        placeholderTextColor="#888"
        onChangeText={setPassword}
        style={inputStyle}
      />

      <TextInput
        placeholder="confirme a senha"
        placeholderTextColor="#888"
        onChangeText={setConfirmPassword}
        style={inputStyle}
      />


      <TouchableOpacity onPress={registerUser}>
        <View
          style={{
            backgroundColor: "#698CC2",
            paddingVertical: 14,
            borderRadius: 12,
            alignItems: "center",
            elevation: 3,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: "600",
              fontFamily: "serif"
            }}
          >
            Cadastrar
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/login')}>
        <View
          style={{
            alignItems: "center"
          }}
        >
          <Text
            style={{
              color: "#698CC2",
              fontSize: 18,
              fontWeight: "600",
              fontFamily: "serif"
            }}
          >
            Já possui conta?
          </Text>
        </View>
    </TouchableOpacity>


    </ScrollView>
  );
}

const inputStyle = {
  backgroundColor: "#fff",
  padding: 14,
  borderRadius: 10,
  marginBottom: 12,
  fontSize: 16,
  elevation: 2,
};
