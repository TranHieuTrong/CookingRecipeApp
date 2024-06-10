import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const FilterProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedFilter, setSelectedilter] = useState(1);
  const [selectedRate, setSelectedRate] = useState(1);
  const [numColumns, setNumColumns] = useState(4);

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
  const renderFilterItem = ({item}) => (
    <TouchableOpacity
      style={[
        myStyles.categoryItem,
        selectedFilter === item.id && myStyles.selectedCategoryItem,
      ]}
      onPress={() => setSelectedilter(item.id)}>
      <Text
        style={[
          myStyles.categoryName,
          selectedFilter === item.id && myStyles.selectedCategoryName,
        ]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
  const renderRateItem = ({item}) => (
    <TouchableOpacity
      style={[
        myStyles.categoryItem,
        selectedRate === item.id && myStyles.selectedCategoryItem,
      ]}
      onPress={() => setSelectedRate(item.id)}>
      <Text
        style={[
          myStyles.categoryName,
          selectedRate === item.id && myStyles.selectedCategoryName,
        ]}>
        {item.rate} ⭐
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={myStyles.container}>
      <Text style={myStyles.txtFilterSearch}>Filter Search</Text>
      <Text>Time</Text>
      <View>
        <FlatList
          data={FILTER}
          renderItem={renderFilterItem}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsVerticalScrollIndicator={false} // Ẩn thanh cuộn dọc
          showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang (nếu có)
        />
      </View>
      <Text>Rate</Text>
      <View>
        <FlatList
          data={RATE}
          renderItem={renderRateItem}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsVerticalScrollIndicator={false} // Ẩn thanh cuộn dọc
          showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang (nếu có)
        />
      </View>
      <Text>Category</Text>
      <FlatList
        data={CATEGORY}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={myStyles.flatListContainer}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        numColumns={4} // Hiển thị 2 cột
      />
      <View style={myStyles.viewButton}>
        <TouchableOpacity style={myStyles.btnFilter}>
          <Text style={myStyles.btnFilterText}>Filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FilterProduct;
const myStyles = StyleSheet.create({
  viewButton: {
    alignItems: 'center',
  },
  btnFilter: {
    backgroundColor: '#129575',
    width: 174,
    height: 37,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnFilterText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },

  categoryItem: {
    borderWidth: 1,
    borderColor: '#71b1a1',
    marginRight: 10,
    marginTop: 20,
    borderRadius: 15,
    paddingVertical: 6,
    paddingHorizontal: 13,
    marginBottom: 10,
  },
  selectedCategoryName: {
    color: '#FFFFFF',
  },
  selectedCategoryItem: {
    backgroundColor: '#129575',
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#71b1a1',
  },
  txtFilterSearch: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    marginTop: 20,
    textAlign: 'center',
  },
  container: {
    padding: 30,
    backgroundColor: '#FFFFFF',
  },
});

const FILTER = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'Newest',
  },
  {
    id: 3,
    name: 'Oldest',
  },
  {
    id: 4,
    name: 'Popularity',
  },
];
const RATE = [
  {
    id: 1,
    rate: '5',
  },
  {
    id: 2,
    rate: '4',
  },
  {
    id: 3,
    rate: '3',
  },
  {
    id: 4,
    rate: '2',
  },
  {
    id: 5,
    rate: '1',
  },
];
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
    name: 'Spanish',
  },
  {
    id: 7,
    name: 'Fruit',
  },
  {
    id: 8,
    name: 'Lunch',
  },
  {
    id: 9,
    name: 'Local Dish',
  },
  {
    id: 10,
    name: 'ThaiLand',
  },
  {
    id: 11,
    name: 'BreakFast',
  },
];
