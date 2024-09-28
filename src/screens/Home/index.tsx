import { Text, TextInput, View } from 'react-native';
import { styles } from "./styles"

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

        </View>
    );
}