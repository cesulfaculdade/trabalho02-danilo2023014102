import { Text, TextInput, TouchableOpacity, View, Alert, FlatList } from 'react-native';
import { styles } from "./styles"
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Product } from "../../components/Product";

export function Home (){

    const [products, setProducts] = useState<string[]>([]);
    const [productName, setProductName] = useState("");

    function adicionaProduto () {
      if(products.includes(productName)) {
        return Alert.alert("Produto já esta cadastrado na lista");
      }
      setProducts((prevState) => [...prevState, productName]);
      setProductName('');
    }

    function removeProduto(name: string) {
      Alert.alert("Remover", `Deseja remover o produto ${name}?`,[
        {
          text: "Sim",
          onPress: () => setProducts(prevState => prevState.filter(product => product != name))
        },
        {
          text: "Não",
          style: "cancel"
        }
      ]);
    }

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
                  onChangeText={setProductName}
                  value={productName}
                />


            <TouchableOpacity style={styles.button} onPress={adicionaProduto}>
              <MaterialIcons  name="add-circle-outline" size={16} color="white"/>
                </TouchableOpacity>
            </View>

            <FlatList
              data={products}
              keyExtractor={item => item}
                renderItem={({ item }) => (
                <Product nome={item} onRemove={() => removeProduto(item)}>
                </Product>
            )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={products.length <= 0 && styles.list}
              ListEmptyComponent={() => (
                <View style={styles.listContainer} >
                    <Text style={styles.textSec}>
                        Você ainda não tem produtos na lista de compra
                    </Text>
                      <Text style={styles.textTer}>
                        Adicione produtos e organize sua lista de compras
                    </Text>
              </View>
          )}   
      />
      </View>
  </View>
)
}
