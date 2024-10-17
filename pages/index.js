import { Text, SafeAreaView, StyleSheet, View, Image } from 'react-native';
import { StatusBar } from 'react-native';
import Header from '../components/Header.js';
import Products from '../components/Products.js';




export default function Index() {

  return (
    
    <SafeAreaView>

      
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Header
            style={styles.abs}
            links={['Home', 'Itens', 'Profile']}
          />
        </View>
        <StatusBar />
      </SafeAreaView>
      
      <View style={styles.productsContainer}>
       
      <Products
          category={['Celulares', 'Computadores', 'Roupas']}
          priceitems={[
            { rotulo: 'Até 100$', price: 100 },
            { rotulo: 'Até 1000$', price: 1000 },
            { rotulo: 'Até 5000$', price: 5000 },
            { rotulo: 'Até 10000$', price: 10000 }
          ]}
        />
      </View>
      


    </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    marginBottom: 20,
  },
  productsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
});
