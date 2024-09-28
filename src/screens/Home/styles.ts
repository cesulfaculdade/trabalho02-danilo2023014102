import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#363636",
      width: "100%"
    },
    back:{
      height: 200,
      backgroundColor: "#000",
    },
    title: {
      color: "#fff",
      fontSize: 24,
      alignItems: "center",
      textAlign: "center",
      margin: "auto",
    },
    form: {
      padding: 20
    },
    input: {
      flexDirection: "row",
      top: -50,
      alignItems: "center",
      justifyContent: "center",
      marginEnd: 50,
    },
    text: {
      backgroundColor: "#1C1C1C",
      flex: 1,
      height: 54,
      borderRadius: 7,
      paddingHorizontal: 16,
      borderColor: "#000",
      borderWidth: 0.7,
    },
    button: {
      width: 54,
      borderWidth: 0.7,
      marginLeft: 387,
      marginTop: -124,
      height: 54,
      borderRadius: 5,
      backgroundColor: "#1C1C1C",
      justifyContent: "center",
      alignItems: "center"
    }
  });