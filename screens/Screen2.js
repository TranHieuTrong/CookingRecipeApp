import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtHeader}>Add Recipes Food</Text>
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({
  container : {
    flex : 1,
    padding : 20,
   justifyContent : "center",
   alignItems :"center"
  },
  txtHeader : {
    fontSize : 25,
    color :"black", 
    fontWeight : '600',
  },
})