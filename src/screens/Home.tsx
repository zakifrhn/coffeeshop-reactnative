import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
const img = require('../asset/img.png')

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Coffee for Everyone</Text>
      <Image source={img} style={styles.image} />
      <StatusBar style="auto" />
      <TouchableOpacity onPress={() => navigation.navigate('Homescreen')} style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    h1: {
      fontSize: 65,
      fontWeight: '700',
      textAlign: 'center',
      lineHeight: 65,
      letterSpacing: -1,
    },
    button: {
      width: 352,
      height: 70,
      backgroundColor: '#6A4029',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 17,
      fontWeight: '700'
    },
    image: {
      width: 433,
      height: 481
    }
  });

export default Home