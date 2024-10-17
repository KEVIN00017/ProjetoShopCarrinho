import { Text, SafeAreaView, StyleSheet, FlatList, TouchableOpacity,View} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';


export default function Header(props) {
  const navigation=useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>

        <FlatList
          data={props.links}
          renderItem={({ item }) => <TouchableOpacity  style={styles.linkButton}><Text style={styles.linkText} >{item}</Text></TouchableOpacity>}
          horizontal={true}

        />
        </Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>  <Entypo name="shopping-cart" size={24} color="black" style={styles.icon} /></TouchableOpacity>
        <TouchableOpacity>   <Entypo name="magnifying-glass" size={24} color="black" style={styles.icon} /></TouchableOpacity>
        <TouchableOpacity >    <FontAwesome name="user-circle" size={24} color="black" style={styles.icon} /></TouchableOpacity>
        </View>
      
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#f9f9f9',
    elevation: 2,
  },
  linkButton: {
    marginRight: 15,
  },
  linkText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 20,
  },
});