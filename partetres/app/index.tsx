import { View,Text, StyleSheet, Image} from "react-native";

export default function App() {

  return (
    <View style={styles.tela}>


      <View style={styles.menu}>


        <Text style={styles.textTop}>📁</Text>

        <View style={styles.container}>
          <Text style={styles.textTop}>studying🐇</Text>
        </View>

        <Text style={styles.textTop}>📌</Text>

      </View>
      <Text style={styles.texto}>Timer Mode </Text>

      <Image 
        source={require('../assets/images/hachiware.jpg')}
        style={styles.image}
      />

      <Text style={styles.textoTimer}>01:00:00</Text>

      <View style={styles.barrinha}></View>

      <View style={styles.menu}>

        <View style={styles.bolaLado}>
          <Text style={styles.textoBola}>📄</Text>
        </View>

        <View style={styles.bolaMeio}> 
          <Text style={styles.textoBola}>Foco</Text>
        </View>

        <View style={styles.bolaLado}>
          <Text style={styles.textoBola}>📁</Text>
        </View>

      </View>

    </View>

    
  );
}


const styles = StyleSheet.create({
    tela: {
      flex: 1,
      backgroundColor: "#CEDDED",
      alignItems: "center",
      paddingHorizontal: 30,
    },

    textTop: {
      color:"#E6F2F5",
      fontSize:15,
      fontFamily:'Pacifico', 
      alignSelf:"center"
    },

    container: {
      width:100,
      backgroundColor:"#CEDDED",
      borderColor: '#E6F2F5' ,
      borderWidth: 1,
      alignSelf:"center",
      borderRadius:50 ,
      margin: 20
    },

    texto: {
      color:"#3278BA",
      fontSize:40,
      fontFamily:'Pacifico', 
      alignSelf:"center"
    },

     textoTimer: {
      color:"#3278BA",
      fontSize:80,
      fontFamily:'Pacifico', 
      alignSelf:"center"
    },

    input: {
      alignSelf: "center",
      height: 30,
      width: 200,
      borderWidth: 2,
      borderColor: 'gray',
      margin: 10,
      borderRadius: 5
    },

    image: {
      width: 200,
      height: 200,
      alignSelf: 'center',
      margin:30
    },

    bolaLado: {
      height:80,
      width:80,
      borderRadius:100,
      backgroundColor:"#E1E9F5",
      alignSelf:"center",
      justifyContent: "center",
      margin: 20
    },

    bolaMeio: {
      height:100,
      width:100,
      borderRadius:100,
      backgroundColor:"#698CC2",
      alignSelf:"center",
      justifyContent: "center",
      margin: 20
    },

    textoBola: {
      color:"#FCFEFF",
      fontSize:40,
      fontFamily:'Pacifico', 
      alignSelf:"center"

    },

    menu: {
      flexDirection: 'row'
    },

    barrinha: {
      height:15,
      width:300,
      borderRadius:100,
      backgroundColor:"#75A6E0",


    },



}) 