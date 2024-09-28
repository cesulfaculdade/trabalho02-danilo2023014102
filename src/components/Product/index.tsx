import { View, Text } from "react-native";
import { styles } from "./styles";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type Props = {
    nome: string;
    onRemove: ()=> void;
}

export function Product ({nome , onRemove}: Props ){
    return(
        <View style={styles.container} >
            <Entypo name= "circle" size={24} color= "#fff" />
                <Text style={styles.text}>
                    {nome}
                </Text>
                <MaterialCommunityIcons name="trash-can-outline" size={24} color="white" onPress={onRemove} />                
        </View>
    )
}
