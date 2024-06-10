import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    TouchableOpacity,
    FlatList,
  } from 'react-native';
  
  import React, {useState} from 'react';
  import {useNavigation} from '@react-navigation/native';
  
  const Filter = () => {
    const [numColumns, setNumColumns] = useState(2);
    const navigation = useNavigation();
  
    const renderItemProduct = ({item}) => (
      <View style={myStyles.productContainer}>
        <Image source={{uri: item.image}} style={myStyles.productImage} />
        <View style={myStyles.txtContainer}>
          <Text style={myStyles.productName}>{item.name}</Text>
          <Text style={myStyles.productCredit}>{item.credit}</Text>
        </View>
        <View style={myStyles.txtRateContainer}>
          <Text style={myStyles.productRate}>⭐{item.rate}</Text>
        </View>
      </View>
    );
  
    return (
      <View style={myStyles.container}>
        <View style={myStyles.viewHeader}>
          <TouchableOpacity onPress={() => navigation.navigate('Screen1')}>
            <Image
              style={myStyles.icFilter}
              source={require('../assets/img/left.png')}
            />
          </TouchableOpacity>
          <Text style={myStyles.title}>Search recipes</Text>
        </View>
  
        <View style={myStyles.viewInputFilter}>
          <View style={myStyles.inputWrapper}>
            <Image
              style={myStyles.icSearch}
              source={require('../assets/img/search.png')}
            />
            <TextInput
              style={myStyles.input}
              placeholder="Search recipe"
              placeholderTextColor={'gray'}
            />
          </View>
          <TouchableOpacity>
            <Image
              style={myStyles}
              source={require('../assets/img/filter.png')}
            />
          </TouchableOpacity>
        </View>
        <Text style={myStyles.txtNewRecipes}>New Recipes</Text>
        <FlatList
          data={PRODUCT}
          renderItem={renderItemProduct}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={myStyles.flatListContainer}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    );
  };
  
  export default Filter;
  
  const myStyles = StyleSheet.create({
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#d9d9d9',
      borderRadius: 10,
      width: 275,
      height: 40,
      paddingHorizontal: 10,
    },
    flatListContainer: {
    
      width : '100%'
    },
    productCredit: {
      marginHorizontal: 10,
      fontSize: 12,
      fontWeight: '600',
      color: '#ffffff',
    },
    productName: {
      marginHorizontal: 10,
      fontSize: 16,
      fontWeight: '600',
      color: '#ffffff',
    },
    txtRateContainer: {
      alignItems: 'center',
      marginTop: 10,
      backgroundColor: '#ffe1b3',
      width: 45,
      height: 20,
      borderRadius: 20,
      position: 'absolute',
      right: 10,
    },
    txtContainer: {
      width: '100%',
      height :50,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      position: 'absolute',
      bottom: 0,
     
      justifyContent :"center"
    },
    productContainer: {
      flex: 1,
      margin: 10,
      backgroundColor: '#ffffff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    productImage: {
      width: '100%',
      height: 150,
      resizeMode: 'cover',
      borderRadius: 10,
    },
    txtNewRecipes: {
      fontSize: 16,
      fontWeight: '600',
      marginTop: 25,
      color: '#000000',
    },
    viewHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    icFilter: {
      width: 24,
      height: 24,
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      color: '#000000',
      textAlign: 'center',
      flex: 1,
    },
    viewInputFilter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: 40,
      marginTop: 17,
    },
    txtSeacrh: {
      fontSize: 12,
      fontWeight: 'normal',
      color: '#d9d9d9',
    },
    icSearch: {
      width: 20,
      height: 20,
    },
    container: {
      padding: 20,
      backgroundColor: '#FFFFFF',
    },
  });
  
  const PRODUCT = [
    {
      id: 1,
      image: 'https://i.ibb.co/fCjB8Ks/image1.png',
      rate: '4.0',
      name: 'Classic Greek',
      credit: 'By Chef John',
    },
    {
      id: 2,
      image: 'https://i.upanh.org/2024/05/10/food2969ac281103e0b56.jpeg',
      rate: '4.0',
      name: 'Spaghetti',
      credit: 'By Spicy Nelly',
    },
    {
      id: 3,
      image: 'https://i.upanh.org/2024/05/10/food30a63747d2f882543.jpeg',
      rate: '4.0',
      name: 'Vegetarian Pizza',
      credit: 'By Mark Kelvin',
    },
    {
      id: 4,
      image: 'https://i.upanh.org/2024/05/10/food41d8e61e6647f6584.jpeg',
      rate: '4.0',
      name: 'Chicken Curry',
      credit: 'By Chef John',
    },
    {
      id: 5,
      image: 'https://i.upanh.org/2024/05/10/food5a6917846e4557f87.jpeg',
      rate: '4.0',
      name: 'Sushi Roll',
      credit: 'By Mark Kelvin',
    },
    // Dữ liệu mới
    {
      id: 6,
      image: 'https://i.upanh.org/2024/05/10/food5a6917846e4557f87.jpeg',
      rate: '4.0',
      name: 'Pho',
      credit: 'By Chef Phuong',
    },
    {
      id: 7,
      image: 'https://i.upanh.org/2024/05/10/food5a6917846e4557f87.jpeg',
      rate: '3.8',
      name: 'Banh Mi',
      credit: 'By Auntie Mai',
    },
    {
      id: 8,
      image: 'https://i.upanh.org/2024/05/10/food5a6917846e4557f87.jpeg',
      rate: '4.2',
      name: 'Pad Thai',
      credit: 'By Chef Somchai',
    },
    {
      id: 9,
      image: 'https://i.upanh.org/2024/05/10/food5a6917846e4557f87.jpeg',
      rate: '4.3',
      name: 'Kimchi',
      credit: 'By Kim Sun',
    },
    {
      id: 10,
      image: 'https://i.upanh.org/2024/05/10/food5a6917846e4557f87.jpeg',
      rate: '4.7',
      name: 'Tacos',
      credit: 'By Chef Miguel',
    },
    
  ];
  