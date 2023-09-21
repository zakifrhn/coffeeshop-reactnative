import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
const img = require('../asset/img2.png')

const Homescreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Welcome!</Text>
      <Text style={styles.h2}>Get a cup of coffee for free only{'\n'}for new user</Text>
      <Image source={img} />
      <View>
        <TouchableOpacity style={styles.buttonsignup}>
          <Text style={styles.signup}>Create New Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonsignin}>
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
      </View>
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
  },
  h2: {
    fontSize: 17,
    fontWeight: '400',
    textAlign: 'center'
  },
  signup: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '700'
  },
  login: {
    color: '#000',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '700',
  },
  buttonsignup: {
    width: 352,
    height: 70,
    backgroundColor: '#6A4029',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 14
  },
  buttonsignin: {
    width: 352,
    height: 70,
    backgroundColor: '#FFBA33',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Homescreen