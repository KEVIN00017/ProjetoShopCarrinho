import { useContext, useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { AppContext } from '../contexts/context.js'
import { ScrollView } from 'react-native-web';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';



export default function Cart() {
  const [Produt,SetProdut]=useContext(AppContext)
  let quantity=parseInt(0)

  const  Del= async(id)=>{
    const ID=id
    let exclusao=Produt.filter((_,i)=>i==ID&&_.qtd>1?_.qtd-=1:i!==ID )
    await SetProdut(exclusao)
}
const  Add= async(id)=>{
  const ID=id
  let Add=Produt.filter((_,i)=>i==ID?_.qtd+=1:_)
  await SetProdut(Add)
}
useEffect(()=>{
  const Produtos=Produt
  SetProdut(Produtos)

},[Produt])

  for(let i=0;i<Produt.length;i++){
      quantity+=parseInt(Produt[i].price*Produt[i].qtd)
  }

 
  function Limpar(){
    SetProdut([])
  }
  
    return ( 
   <SafeAreaView style={styles.container}>
    <ScrollView style={styles.productContainer}>
      <TouchableOpacity onPress={()=>console.log(Produt,quantity)} ><Text style={styles.welcomeText}>Bem Vindo Ao Carrinho</Text></TouchableOpacity>
      <Text style={styles.totalText}>Total:{quantity} $</Text>
      <FlatList
        data={Produt}
        renderItem={({ item,index }) => (
          
          
            
            <TouchableOpacity style={styles.productTouchable}>
            {item.imagem}
              <Text style={styles.productText}>{item.title} {item.price}$</Text>
              <TouchableOpacity onPress={()=>Del(index)}><Feather name="trash-2" size={24} color="black" /></TouchableOpacity>
              <TouchableOpacity onPress={()=>Add(index)}><AntDesign name="pluscircle" size={24} color="black" /></TouchableOpacity>
              <Text>{item.qtd}</Text>
            </TouchableOpacity>
         
        )}
       
      />
   {Produt.length>0?<TouchableOpacity onPress={()=>Limpar()} style={styles.welcomeText}>Limpar</TouchableOpacity>:<Text style={styles.welcomeText}>Vazio</Text>}
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  totalText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  productContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

