import { ImageBackground, StatusBar, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor='rgba(0, 0, 0, 0)'/>
      <ImageBackground style={styles.imageBackground} source={require('../assets/img/nen.jpeg')}>
        <Image source={require('../assets/img/logo.png')} style={styles.img}></Image>
        <Text style={styles.text}>100K+ Premium Recipe</Text>
        <View style={styles.contaierText}>
          <Text style={styles.text1}>COOKING</Text>
          <Text style={styles.text1}>Recipe</Text>
          <Text style={styles.text2}>Simple way to find Tasty Recipe</Text>
          <TouchableOpacity style={styles.bookButton} onPress={handleGetStarted}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  bookButton: {
    backgroundColor: '#129575',
    padding: 10,
    borderRadius: 10,
    width: 243,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 50,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
  },
  text2: {
    fontSize: 16,
    marginTop: 5,
    color: 'white',
    textAlign: 'center',
  },
  text1: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contaierText: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  img: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 100,
    marginBottom: 20,
  },
  imageBackground: {
    resizeMode: 'cover',
    flex: 1,
  },
  container: {
    flex: 1,
  }
});
