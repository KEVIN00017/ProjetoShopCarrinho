import { Text, SafeAreaView, StyleSheet, FlatList,Image} from 'react-native';
 
export default function Products(props) {
    const products=[
        {
            id:1,
            categoria:"Celular",
            imagem:<Image style={styles.img} source={require('../assets/iphone.webp')}/>,
            title:'Apple iPhone 15 Pro Max (512 GB) — Titânio Azul \n',
            price:"999,99$",
        },
        {
            id:2,
            categoria:"Celular",
            imagem:<Image style={styles.img} source={require('../assets/iphone.webp')}/>,
            title:'Apple iPhone 15 Pro Max (512 GB) — Titânio Azul \n',
            price:"999,99$",
        },
        {
            id:3,
            categoria:"Celular",
            imagem:<Image style={styles.img} source={require('../assets/iphone.webp')}/>,
            title:'Apple iPhone 15 Pro Max (512 GB) — Titânio Azul \n',
            price:"999,99$",
        },
        {
            id:4,
            categoria:"Celular",
            imagem:<Image style={styles.img} source={require('../assets/iphone.webp')}/>,
            title:'Apple iPhone 15 Pro Max (512 GB) — Titânio Azul \n',
            price:"999,99$",
        }
    ]

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>

        <FlatList
          data={products}
          renderItem={({ item }) => <SafeAreaView  style={styles.Produtos}><Text>{[item.imagem,]}</Text><Text style={styles.text}>{[item.title,item.price]}</Text></SafeAreaView>}
          horizontal={true}
        />
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'Wrap',
  },
  paragraph: {
    color: 'Black',
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'Wrap',
    marginRight: 10,
    marginTop:30,
    marginLeft:150,
    justifyContent: 'space-around',
    cursor:'pointer',
    position:'static'
  },
  img:{
    width:150,
    height:150,
    marginLeft:150,
    borderRadius:50
  },
  Produtos:{
    marginBottom:300,
  },
  text:{
    marginLeft:150,
    width:200
  }
});