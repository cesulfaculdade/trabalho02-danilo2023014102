import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#808080",
      width: "100%"
    },
    back:{
      height: 200,
      backgroundColor: "#000",
    },
    title: {
      color: "#fff",
      fontSize: 20,
      alignItems: "center",
      margin: "auto",
    },
    form: {
      padding: 20
    },
    input: {
      flexDirection: "row",
      top: -40,
      alignItems: "center"
    },
    text: {
      backgroundColor: "#808080",
      flex: 1,
      height: 54,
      borderRadius: 7,
      paddingHorizontal: 16,
      borderColor: "#000",
      borderWidth: 0.5,
    }
  });