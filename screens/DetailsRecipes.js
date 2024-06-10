import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const DetailsRecipes = ({navigation, route}) => {
  const {recipe} = route.params;
  const [selectedTab, setSelectedTab] = useState('nguyenlieu');

  // Hàm để quay lại màn hình SavedRecipes
  const navigateToSavedRecipes = () => {
    navigation.navigate('SavedRecipes');
  };

  const handleTabChange = tab => {
    setSelectedTab(tab);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateToSavedRecipes}>
          <Image
            source={require('../assets/img/left.png')}
            style={styles.imgHeader}
          />
        </TouchableOpacity>
        <Image
          source={require('../assets/img/menu.png')}
          style={styles.imgHeader}
        />
      </View>
      {/* Hiển thị thông tin của recipe */}
      <View style={styles.imageContainer}>
        <Image source={{uri: recipe.img}} style={styles.image} />
      </View>
      <View style={styles.rowInfo}>
        <Text style={styles.txtName}>{recipe.name}</Text>
        <Text style={styles.txtView}>({recipe.view} Views)</Text>
      </View>
      <View style={styles.infoContainer}>
        <Image
          source={require('../assets/img/avatar.jpg')}
          style={styles.imgAvatar}
        />
        <View style={styles.info}>
          <Text style={styles.txtBy}>{recipe.by}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../assets/img/address.png')}
              style={styles.icAddress}
            />
            <Text style={styles.txtPlace}>{recipe.place}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btnFollow}>
          <Text style={styles.txtFollow}>Follow</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.IngredientContainer}>
        <TouchableOpacity
          style={[
            styles.touch,
            selectedTab === 'nguyenlieu'
              ? {backgroundColor: '#129575'}
              : {backgroundColor: 'white'},
          ]}
          onPress={() => handleTabChange('nguyenlieu')}>
          <Text
            style={[
              styles.txtTouch,
              selectedTab === 'nguyenlieu'
                ? {color: 'white'}
                : {color: '#129575'},
            ]}>
            Ingredient
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.touch,
            selectedTab === 'huongdan'
              ? {backgroundColor: '#129575'}
              : {backgroundColor: 'white'},
          ]}
          onPress={() => handleTabChange('huongdan')}>
          <Text
            style={[
              styles.txtTouch,
              selectedTab === 'huongdan'
                ? {color: 'white'}
                : {color: '#129575'},
            ]}>
            Instruct
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.titleBody}>
        <View style={styles.body1}>
          <Image
            source={require('../assets/img/service.png')}
            style={styles.icService}
          />
          <Text> 1 serve</Text>
        </View>
        <Text>10 items</Text>
      </View>

      {/* Hiển thị danh sách nguyên liệu hoặc hướng dẫn */}
      {selectedTab === 'nguyenlieu' ? (
        <FlatList
          data={recipe.ingredients}
          renderItem={({item}) => (
            <View style={styles.ingredientItem}>
              <Image
                source={{uri: item.imgIngredients}}
                style={styles.ingredientImage}
              />
              <View style={styles.ingredientTextContainer}>
                <Text style={styles.ingredientName}>{item.name}</Text>
                <Text style={styles.ingredientQuantity}>{item.quantity}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          style={styles.ingredientsContainer}
        />
      ) : (
        <FlatList
        data={Object.keys(recipe.cookingSteps)}
        renderItem={({item, index}) => (
          <View style={styles.stepItem}>
            <Text style={styles.txtStep}>{`Step ${index + 1}`}</Text>
            <Text style={styles.stepText}>
              {recipe.cookingSteps[item]}
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        style={styles.ingredientsContainer}
      />
      
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    txtStep : {
        color :"black",
        fontWeight:'700',
        fontSize : 20
    },
  stepsContainer: {
    flex: 1,
    marginTop: 10,
    
  },
  stepItem: {
    flexDirection: 'column',
    marginBottom: 10,
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 10,
    paddingVertical :15,
    borderRadius: 20,
    
  },
  stepText: {
    fontSize: 17,
    color: 'black',
    marginLeft: 10,
  },
  ingredientsContainer: {
    flex: 1,
  },
  ingredientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  ingredientTextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    padding: 10,
    borderRadius: 5,
  },
  ingredientName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
  },
  ingredientQuantity: {
    fontSize: 17,
    color: '#666',
    fontWeight: '400',
  },
  ingredientImage: {
    width: 70,
    height: 70,
  },
  icService: {
    width: 20,
    height: 20,
  },
  body1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  txtTouch: {
    fontSize: 17,
    fontWeight: '500',
  },
  touch: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 10,
  },
  IngredientContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  txtBy: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  txtPlace: {
    fontSize: 15,
    fontWeight: '500',
  },
  btnFollow: {
    width: 90,
    height: 40,
    backgroundColor: '#129575',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  txtFollow: {
    fontSize: 15,
    color: 'white',
    fontWeight: '500',
  },
  icAddress: {
    width: 20,
    height: 20,
  },
  info: {
    flexDirection: 'column',
    alignItems: 'center',
    right: 20,
  },
  imgAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtView: {
    marginHorizontal: 20,
    marginVertical: 10,
    fontSize: 17,
  },
  rowInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  txtName: {
    width: 210,
    height: 60,
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  imageContainer: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imgHeader: {
    width: 35,
    height: 35,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: 'white',
  },
});

export default DetailsRecipes;
