import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Screen1 = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const navigation = useNavigation();

  const renderCategoryItem = ({item}) => (
    <TouchableOpacity
      style={[
        myStyles.categoryItem,
        selectedCategory === item.id && myStyles.selectedCategoryItem,
      ]}
      onPress={() => setSelectedCategory(item.id)}>
      <Text
        style={[
          myStyles.categoryName,
          selectedCategory === item.id && myStyles.selectedCategoryName,
        ]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const renderItemProduct = ({item}) => (
    <View style={myStyles.itemContainer}>
      <View style={myStyles.viewProduct}>
        <Image source={item.image} style={myStyles.image} />
        <View style={myStyles.viewTxtProduct}>
          <Text style={myStyles.name}>{item.name}</Text>
        </View>
        <Text style={myStyles.time}>Time</Text>
        <View style={myStyles.viewTimeSave}>
          <Text style={myStyles.timeMins}>{item.time} Mins</Text>
          <TouchableOpacity>
            <Image
              source={require('../assets/img/save.png')}
              style={myStyles.icSave}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderItemProductNew = ({item}) => (
    <View style={myStyles.itemContainer1}>
      <View style={myStyles.viewProduct1}>
        <Image source={item.image} style={myStyles.image1} />
        <View style={myStyles.viewTxtProduct1}>
          <Text style={myStyles.name1}>{item.name}</Text>
        </View>
        <View style={myStyles.imgStar}>
          <Image
            source={require('../assets/img/stat.png')}
            style={myStyles.star}
          />
          <Image
            source={require('../assets/img/stat.png')}
            style={myStyles.star}
          />
          <Image
            source={require('../assets/img/stat.png')}
            style={myStyles.star}
          />
          <Image
            source={require('../assets/img/stat.png')}
            style={myStyles.star}
          />
          <Image
            source={require('../assets/img/stat.png')}
            style={myStyles.star}
          />
        </View>
        <View style={myStyles.viewTimeSave1}>
          <View style={myStyles.viewTimeSave}>
            <Image
              style={myStyles.icAvtUser}
              source={require('../assets/img/avtuser.png')}
            />
            <Text style={myStyles.timeMins1}>{item.by}</Text>
          </View>
          <View style={myStyles.viewTimeSave}>
            <Image
              style={myStyles.icTimer}
              source={require('../assets/img/timer.png')}
            />
            <Text style={myStyles.timeMinsNew}>{item.time} mins</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={myStyles.container}>
      <View style={myStyles.viewHeader}>
        <View>
          <Text style={myStyles.txtHello}>Hello Jega</Text>
          <Text style={myStyles.txtContent}>What are you cooking today?</Text>
        </View>
        <TouchableOpacity>
          <Image
            style={myStyles.avatarHeader}
            source={require('../assets/img/avatar.jpg')}
          />
        </TouchableOpacity>
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
        <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
          <Image
            style={myStyles.icFilter}
            source={require('../assets/img/filter.png')}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={CATEGORY}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsVerticalScrollIndicator={false} // Ẩn thanh cuộn dọc
        showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang (nếu có)
      />
      <FlatList
        data={PRODUCT}
        renderItem={renderItemProduct}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={myStyles.flatListContainer}
        horizontal={true}
        showsVerticalScrollIndicator={false} // Ẩn thanh cuộn dọc
        showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang (nếu có)
      />
      <View>
        <Text style={myStyles.txtNewRecipes}>New Recipes</Text>
        <FlatList
          data={PRODUCT}
          renderItem={renderItemProductNew}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={myStyles.flatListContainer}
          horizontal={true}
          showsVerticalScrollIndicator={false} // Ẩn thanh cuộn dọc
          showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang (nếu có)
        />
      </View>
    </View>
  );
};

export default Screen1;

const myStyles = StyleSheet.create({
  star: {
    width: 20,
    height: 20,
  },
  avatarHeader: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  icTimer: {
    right: 10,
  },
  icAvtUser: {
    marginLeft: 10,
    width: 50,
    height: 50,
  },
  imgStar: {
    marginTop: 10,
    flexDirection: 'row',
    marginLeft: 10,
  },
  viewTimeSave1: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewTxtProduct1: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  viewProduct1: {
    marginTop: 40,
    backgroundColor: '#e3e3e3',
    width: 251,
    height: 127,
    borderRadius: 10,
  },
  itemContainer1: {
    marginBottom: 20,
    marginRight: 15,
  },
  image1: {
    right: 10,
    top: -40,
    position: 'absolute',
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 1000,
  },
  name1: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  icSave1: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    right: 12,
  },
  timeMinsNew: {
    right: 10,
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  timeMins1: {
    marginLeft: 5,
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  time1: {
    marginLeft: 10,
    marginTop: 45,
    fontSize: 14,
    color: '#a9a9a9',
    fontWeight: '600',
  },
  txtNewRecipes: {
    fontSize: 23,
    fontWeight: '600',
    marginTop: 5,
    color: '#000000',
  },
  viewTimeSave: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewTxtProduct: {
    marginTop: -50,
    alignItems: 'center',
  },
  viewProduct: {
    marginTop: 50,
    backgroundColor: '#d9d9d9',
    width: 150,
    height: 190,
    borderRadius: 10,
  },
  itemContainer: {
    marginBottom: 20,
    marginRight: 15,
  },
  image: {
    marginLeft: 22,
    top: -50,
    position: 'relative',
    width: 109,
    height: 110,
    resizeMode: 'cover',
    borderRadius: 1000,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  icSave: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    right: 12,
  },
  timeMins: {
    marginLeft: 10,
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  time: {
    marginLeft: 10,
    marginTop: 45,
    fontSize: 14,
    color: '#a9a9a9',
    fontWeight: '600',
  },
  categoryItem: {
    marginTop: 25,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  selectedCategoryName: {
    color: '#FFFFFF',
  },
  selectedCategoryItem: {
    backgroundColor: '#129575',
  },
  categoryName: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  viewInputFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 40,
    marginTop: 7,
  },
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
  icSearch: {
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 0,
    paddingBottom: 0,
  },
  icFilter: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  txtContent: {
    fontSize: 17,
    fontWeight: 'normal',
    color: 'gray',
  },
  txtHello: {
    fontSize: 25,
    fontWeight: '600',
    color: '#000',
  },
  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    width: '100%',
  },
  container: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
});

const CATEGORY = [
  {
    id: 1,
    name: 'ALL',
  },
  {
    id: 2,
    name: 'Indian',
  },
  {
    id: 3,
    name: 'Italian',
  },
  {
    id: 4,
    name: 'Asian',
  },
  {
    id: 5,
    name: 'Chinese',
  },
  {
    id: 6,
    name: 'Japanese',
  },
  {
    id: 7,
    name: 'Mexican',
  },
  {
    id: 8,
    name: 'French',
  },
  {
    id: 9,
    name: 'Mediterranean',
  },
  {
    id: 10,
    name: 'ThaiLand',
  },
];

const PRODUCT = [
  {
    id: 1,
    image: {uri: 'https://i.upanh.org/2024/05/10/food16f8adab74bc4ff29.jpeg'},
    name: 'Classic Greek',
    time: 15,
    by: 'James Milner',
  },
  {
    id: 2,
    image: {uri: 'https://i.upanh.org/2024/05/10/food2969ac281103e0b56.jpeg'},
    name: 'Spaghetti',
    time: 30,
    by: 'Alex Harrington',
  },
  {
    id: 3,
    image: {uri: 'https://i.upanh.org/2024/05/10/food30a63747d2f882543.jpeg'},
    name: 'Vegetarian Pizza',
    time: 25,
    by: 'Chloe Everett',
  },
  {
    id: 4,
    image: {uri: 'https://i.upanh.org/2024/05/10/food41d8e61e6647f6584.jpeg'},
    name: 'Chicken Curry',
    time: 40,
    by: 'Nathanial Greene',
  },
  {
    id: 5,
    image: {uri: 'https://i.upanh.org/2024/05/10/food5a6917846e4557f87.jpeg'},
    name: 'Sushi Roll',
    time: 20,
    by: 'Olivia Simmons',
  },
  {
    id: 6,
    image: {uri: 'https://i.upanh.org/2024/05/10/food60e91eb5a91a67a2d.jpeg'},
    name: 'BBQ Ribs',
    time: 60,
    by: 'Samuel Bennett',
  },
  {
    id: 7,
    image: {uri: 'https://i.upanh.org/2024/05/10/food7e2f857392fb1e374.jpeg'},
    name: 'Salmon Teriyaki',
    time: 25,
    by: 'Ava Richardson',
  },
  {
    id: 8,
    image: {uri: 'https://i.upanh.org/2024/05/10/food8f423de3a4a920fa1.jpeg'},
    name: 'Bacon Cheeseburger',
    time: 35,
    by: 'William Drake',
  },
  {
    id: 9,
    image: {uri: 'https://i.upanh.org/2024/05/10/food9de0ccf4b92f91569.jpeg'},
    name: 'Beef Stroganoff',
    time: 45,
    by: 'Isabella Monroe',
  },
  {
    id: 10,
    image: {uri: 'https://i.upanh.org/2024/05/10/food10e3c33b12d4a6f9e1.jpeg'},
    name: 'Apple Pie',
    time: 50,
    by: 'Benjamin Harris',
  },
];
