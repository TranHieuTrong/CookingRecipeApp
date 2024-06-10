import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: 1,
    name: 'Traditional spare ribs baked',
    img: 'https://i.ibb.co/2PNRhJ6/image.png',
    by: 'Chef John',
    place: 'Lagos, Nigeria',
    rate: '4.5',
    time: '20',
    view: '13k',
    ingredients: [
      {
        name: 'Pork ribs',
        quantity: '500g',
        imgIngredients: 'https://i.ibb.co/NmXM0Qv/s-n-non.png',
      },
      {
        name: 'Salt',
        quantity: '10g',
        imgIngredients: 'https://i.ibb.co/Ksf8JvC/mu-i.png',
      },
      {
        name: 'Black pepper',
        quantity: '5g',
        imgIngredients: 'https://i.ibb.co/tLz5zsn/ti-u-en.png',
      },
      {
        name: 'Olive oil',
        quantity: '20ml',
        imgIngredients: 'https://i.ibb.co/c288kdr/d-u.png',
      },
      {
        name: 'BBQ sauce',
        quantity: '100ml',
        imgIngredients: 'https://i.ibb.co/q7v96H6/bbq.png',
      },
    ],
    cookingSteps: {
      Step1:
        'Prepare the seasoning mixture for the ribs by mixing salt, black pepper, and olive oil.',
      Step2: 'Marinate the ribs with the prepared seasoning mixture.',
      Step3: 'Bake the ribs in the oven at 180°C for about 15 minutes.',
      Step4:
        'After the ribs are cooked, brush BBQ sauce on the ribs and bake again for about 5 minutes.',
    },
  },
  {
    id: 2,
    name: 'Spice roasted chicken with flavored rice',
    img: 'https://i.ibb.co/SVxhyrT/image2.png',
    by: 'Mark Kelvin',
    place: 'Hong Kong, China',
    rate: '4',
    time: '15',
    view: '11k',
    ingredients: [
      {
        name: 'Chicken',
        quantity: '1 whole',
        imgIngredients: 'https://i.ibb.co/8jJHtKv/th-t-g.png',
      },
      {
        name: 'Seasoning powder',
        quantity: '15g',
        imgIngredients: 'https://i.ibb.co/tchM6t5/b-t-gia-v.png',
      },
      {
        name: 'Glutinous rice',
        quantity: '300g',
        imgIngredients: 'https://i.ibb.co/6mNfbvb/c-m.png',
      },
      {
        name: 'Cooking oil',
        quantity: '30ml',
        imgIngredients: 'https://i.ibb.co/tbgjzxf/d-u-n.png',
      },
      {
        name: 'Vegetables',
        quantity: '50g',
        imgIngredients: 'https://i.ibb.co/hKKMSd1/rau.png',
      },
    ],
    cookingSteps: {
      Step1:
        'Prepare the seasoning for the chicken by mixing seasoning powder with cooking oil.',
      Step2: 'Marinate the chicken with the prepared seasoning.',
      Step3:
        'Roast the chicken in the oven at 200°C for about 40 minutes or until cooked through.',
      Step4:
        'Cook the glutinous rice according to the instructions on the packaging and add vegetables for garnish.',
    },
  },
  {
    id: 3,
    name: 'Spicy fried rice mix chicken bali',
    img: 'https://i.ibb.co/fCjB8Ks/image1.png',
    by: 'Spicy Nelly',
    place: 'London, England',
    rate: '4',
    time: '25',
    view: '15k',
    ingredients: [
      {
        name: 'Chicken',
        quantity: '200g',
        imgIngredients: 'https://link_to_image_ga_3',
      },
      {
        name: 'Fried rice',
        quantity: '400g',
        imgIngredients: 'https://link_to_image_com_chien',
      },
      {
        name: 'Curry powder',
        quantity: '10g',
        imgIngredients: 'https://link_to_image_bot_ca_ri',
      },
      {
        name: 'Vegetables',
        quantity: '100g',
        imgIngredients: 'https://link_to_image_rau_cai',
      },
      {
        name: 'Tofu',
        quantity: '200g',
        imgIngredients: 'https://link_to_image_dau_hu',
      },
    ],
    cookingSteps: {
      Step1: 'Fry the chicken with seasoning.',
      Step2: 'Fry the rice with seasoning and add the fried chicken.',
      Step3: 'Mix well and serve hot.',
    },
  },
  {
    id: 4,
    name: 'Lamb chops with fruity couscous and mint',
    img: 'https://i.ibb.co/FgkFPSL/image3.png',
    by: 'Spicy Nelly',
    place: 'Indonesia',
    rate: '3',
    time: '15',
    view: '20k',
    ingredients: [
      {
        name: 'Lamb chops',
        quantity: '500g',
        imgIngredients: 'https://link_to_image_ca_thoi_cuu',
      },
      {
        name: 'Italian pasta',
        quantity: '200g',
        imgIngredients: 'https://link_to_image_mi_y',
      },
      {
        name: 'Fruits',
        quantity: '300g',
        imgIngredients: 'https://link_to_image_trai_cay',
      },
      {
        name: 'Coriander',
        quantity: '50g',
        imgIngredients: 'https://link_to_image_rau_mui',
      },
      {
        name: 'Onions',
        quantity: '100g',
        imgIngredients: 'https://link_to_image_hanh_tay',
      },
    ],
    cookingSteps: {
      Step1: 'Grill the lamb chops with seasoning.',
      Step2:
        'Cook the Italian pasta and mix with various fruits and coriander.',
    },
  },
  {
    id: 5,
    name: 'Spicy chicken burger with French fries',
    img: 'https://i.ibb.co/fCjB8Ks/image1.png',
    by: 'Laura Wilson',
    place: 'Ho Chi Minh City, Vietnam',
    rate: '4.5',
    time: '25',
    view: '16k',
    ingredients: [
      {
        name: 'Chicken meat',
        quantity: '300g',
        imgIngredients: 'https://link_to_image_thit_ga',
      },
      {
        name: 'Burger buns',
        quantity: '4 pieces',
        imgIngredients: 'https://link_to_image_banh_mi_burger',
      },
      {
        name: 'Raw vegetables',
        quantity: '100g',
        imgIngredients: 'https://link_to_image_rau_song_5',
      },
      {
        name: 'Potatoes',
        quantity: '500g',
        imgIngredients: 'https://link_to_image_khoai_tay',
      },
      {
        name: 'Salt',
        quantity: '10g',
        imgIngredients: 'https://link_to_image_muoi_5',
      },
    ],
    cookingSteps: {
      Step1: 'Prepare chicken meat into patties.',
      Step2: 'Grill the patties and fry the French fries.',
      Step3:
        'Assemble the burgers with raw vegetables, and add sauce to taste.',
    },
  },
];

const SavedRecipes = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const navigation = useNavigation();

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('DetailsRecipes', {recipe: item})}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.img}} style={styles.image} />
        <View style={styles.rateContainer}>
          <Image
            style={styles.imgStar}
            source={require('../assets/img/stat.png')}></Image>
          <Text style={styles.rate}>{item.rate}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.by}>By {item.by}</Text>
        </View>
        <View style={styles.timeContainer}>
          <View style={styles.ViewTime}>
            <Image
              style={styles.icTime}
              source={require('../assets/img/time.png')}
            />
            <Text style={styles.time}>{item.time} mins</Text>
          </View>
          <TouchableOpacity
            style={styles.touchBookmark}
            onPress={toggleBookmark}>
            <Image
              style={styles.icBookmark}
              source={
                isBookmarked
                  ? require('../assets/img/bookmark.png')
                  : require('../assets/img/bookmarkActive.png')
              }></Image>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtTitle}>Saved Recipes</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default SavedRecipes;

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 170,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    height: 50,
    width: 200,
  },
  by: {
    fontSize: 16,
    color: '#FFFFFF',
  },

  time: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  touchBookmark: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  icTime: {
    width: 25,
    height: 25,
  },
  timeContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  ViewTime: {
    flexDirection: 'row',
    marginRight: 20,
    alignItems: 'center',
  },
  icBookmark: {
    width: 20,
    height: 20,
  },
  rate: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
  },
  imgStar: {
    width: 20,
    height: 20,
  },
  rateContainer: {
    width: 60,
    height: 25,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
    top: 15,
    backgroundColor: '#FFE1B3',
    borderRadius: 30,
  },
  item: {
    marginBottom: 23,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  txtTitle: {
    fontSize: 23,
    fontWeight: '700',
    color: 'black',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});
