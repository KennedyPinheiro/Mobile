import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Card from "./Card";
import Xshape from "./Xshape";

const { width, height } = Dimensions.get("window");

const Retangulo = () => {
   return (
      <View style={styles.container}>
         <View style={styles.row }>
            <Card style={styles.smallCard} tittle="Pequeno 1">
            <Xshape size={40} color="red" >
               <Text >
                  Jogador 01
               </Text>
               </Xshape>
               </Card>
         </View>
         <Card style={styles.timer}>
            <Text style={styles.text}>
               0:05
            </Text>
         </Card>
         <Card style={styles.largeCard} tittle="Grande">
            <View>
               <View style={styles.grid}>
                  <Card style={styles.gridCard} text="Grid 1" />
                  <Card style={styles.gridCard} text="Grid 2" />
                  <Card style={styles.gridCard} text="Grid 3" />
                  <Card style={styles.gridCard} text="Grid 4" />
                  <Card style={styles.gridCard} text="Grid 5" />
                  <Card style={styles.gridCard} text="Grid 6" />
                  <Card style={styles.gridCard} text="Grid 7" />
                  <Card style={styles.gridCard} text="Grid 8" />
                  <Card style={styles.gridCard} text="Grid 9" />
               </View>
            </View>
         </Card>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#e98c22",
      height: "100%",
      width:"100%", // Ajustado para cobrir toda a tela
      maxWidth: 400,
      maxHeight: 1200,
      alignSelf: "center",
      justifyContent: "space-around",
      alignItems: "center",
      borderRadius: 10,
      padding: 10,
      },
      timer: {
      padding: 20,
      minWidth: 150,
      borderRadius: 50,
      },
      row: {
      flexDirection: "row", // Corrigido para "row" para alinhar corretamente
      justifyContent: "center",
      width: "100%",
      minWidth: 700,
      height: "auto", 
      alignItems: "center",
      },
      text: {
      color: "#FFF",
      fontSize: 30,
      textAlign: "center",
      },
      smallCard: {
      width: "45%",
      height: height * 0.1,
      },
      largeCard: {
      width: "90%",
      height: height * 0.4,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      },
      grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      },
      gridCard: {
      width: "30%", // Mantém 3 colunas
      aspectRatio: 1,
      margin: 5,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#d3d3d3",
      borderRadius: 5,
   },
});

export default Retangulo;
