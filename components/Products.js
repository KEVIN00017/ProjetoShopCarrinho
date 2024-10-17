import { useContext, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList, Image, Button, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { AppContext } from '../contexts/context.js';



export default function Products(props) {
  const [category, Setcategory] = useState('');
  const [price, setprice] = useState('');
  const [Produt, SetProdut] = useContext(AppContext);
  const [estadocategory, Setestadocategory] = useState(null);
  const [estadopreco, Setestadopreco] = useState(null);
  const [stateProdut, SetstateProdut] = useState(null);


  const products = [
    {
      id: 1,
      categoria: 'Celulares',
      imagem: <Image style={styles.img} source={require('../assets/iphone.webp')} />,
      title: 'Zpple iPhone 15 Pro Max (512 GB) — Titânio Azul \n',
      price: 999.99,
      qtd: 0
    },
    {
      id: 2,
      categoria: 'Celulares',
      imagem: <Image style={styles.img} source={require('../assets/iphone.webp')} />,
      title: 'Apple iPhone 15 Pro Max (512 GB) — Titânio Azul \n',
      price: 999.99,
      qtd: 0
    },
    {
      id: 3,
      categoria: 'Computadores',
      imagem: <Image style={styles.img} source={require('../assets/computador.webp')} />,
      title: 'Computador\n',
      price: 1880.99,
      qtd: 0
    },
    {
      id: 4,
      categoria: 'Roupas',
      imagem: <Image style={styles.img} source={require('../assets/camisa.webp')} />,
      title: 'Camisa Branca \n',
      price: 29.99,
      qtd: 0
    }
  ]

  const ProdutosSelect = estadocategory && estadopreco ? products.filter((p, i) => p.categoria === category && p.price <= price) : estadopreco ? products.filter((p, i) => p.price <= price) : estadocategory ? products.filter((p, i) => p.categoria === category) : products




  const filtercategory = async (categoria) => {
    Setcategory(categoria)
    Setestadocategory(true)
  }

  if (stateProdut == true) {


    ProdutosSelect.sort((a, b) => {
      if (a.title < b.title) {
        return -1
      } else {
        return true
      }
    })

    console.log(ProdutosSelect)

  }

  function Alfabética() {
    SetstateProdut(true)
  }


  const carr = async (item) => {

    const index = Produt.findIndex(prod => prod.id === item.id);

    if (index !== -1) {

      const updatedProducts = [...Produt];
      updatedProducts[index].qtd += 1;
      SetProdut(updatedProducts);
    } else {

      const newItem = { ...item, qtd: 1 };
      SetProdut([...Produt, newItem]);
    }

    console.log(Produt);
    return Produt;
  };



  const clear = async (clean) => {
    Setcategory(clean)
    Setestadocategory(false)
    Setestadopreco(false)
    setprice(clean)
    setprice("Preço")
    SetstateProdut(clean)
  }


  return (

    <SafeAreaView style={styles.container}>

      <FlatList
        data={props.category}
        renderItem={({ item }) => <TouchableOpacity style={styles.categoryButton} onPress={() => filtercategory(item)}><Text style={styles.categoryText}>{item}</Text></TouchableOpacity>}
        horizontal={true}
      />


      <Picker
        style={styles.picker}
        selectedValue={price}
        onValueChange={(itemValor, index) => {
          setprice(itemValor)
          Setestadopreco(true)
        }}
      >
        <Picker.Item label="Preço" value={110000000000} />
        {props.priceitems.map((item, index) => {
          return (
            <Picker.Item label={item.rotulo} value={item.price} />
          )
        })}



      </Picker>

      <TouchableOpacity style={styles.alfabutton} onPress={() => Alfabética()}>
        <Text style={styles.alfaText}>Ordem Alfabética</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.clearButton} onPress={() => clear(null)}><Text style={styles.clearText}>Limpar</Text></TouchableOpacity>
      <Text>

        <FlatList
          data={ProdutosSelect}
          renderItem={({ item }) =>
            <View style={styles.productContainer}>
              <TouchableOpacity>
                <Text >{item.imagem}</Text>
                <Text style={styles.productTitle} >{item.title}</Text>
                <Text style={styles.productPrice} >{item.price}$</Text>
              </TouchableOpacity>
              <Button
                title='Carrinho' onPress={() => carr(item)} />
            </View>
          }
          horizontal={true} />

      </Text>

    </SafeAreaView>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  categoryButton: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
  },
  categoryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  clearButton: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  clearText: {
    color: '#FF3B30',
    fontWeight: 'bold',
  },
  picker: {
    marginVertical: 20,
    height: 50,
    width: 100
  },
  productContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginLeft: 150,
    marginRight: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    width: 150
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  alfabutton: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  alfaText: {
    color: '#00A8FF',
    fontWeight: 'bold',
  },
});
export { AppContext }