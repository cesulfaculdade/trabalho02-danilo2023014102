import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from "./styles"
import { MaterialIcons } from '@expo/vector-icons';

export function Home (){
    return(
        <View style={styles.container}>

        
          <View style={styles.back}>
             <Text style={styles.title}>Lista de Compras</Text>
          </View>

            <View style={styles.form}>
              <View style ={styles.input}>
                <TextInput style = {styles.text}
                  placeholder = "Adicione um produto"
                  placeholderTextColor ="#fff"
                  keyboardType='default'

                />
                </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <MaterialIcons  name="add-circle-outline" size={16} color="white"/>
            </TouchableOpacity>
        </View>
    );
}