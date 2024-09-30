import { Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
 
export default function MiniHeader(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        <FlatList
          data={props.links}
          renderItem={({ item }) => <Text style={styles.paragraph}>{item}</Text>}
          horizontal={true}
        />
       
      </Text>
    </SafeAreaView>
  );
}
 
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
    marginTop:60,
    marginLeft:250,
    justifyContent: 'space-around',
    cursor:'pointer'
  },
});