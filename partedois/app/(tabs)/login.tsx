import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import {getAuth} from 'firebase/auth'
import {app} from '../../firebaseConfig'
import { useState } from 'react';

export default function HomeScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const auth = getAuth(app)

  return (
     <ScrollView style={{ flex: 1, padding: 20 }}>
    
          <Text style={{
            fontSize: 26,
            fontWeight: "bold",
            marginBottom: 20,
            color: "#698CC2"
          }}>
            Login
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
    
    
          <TouchableOpacity>
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
                Entrar
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/')}>
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
                Não possui conta?
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