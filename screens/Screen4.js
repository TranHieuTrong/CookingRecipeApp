import React, {useState, useEffect} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  BackHandler,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ChangeInfo from './ChangeInfo'; // Import ChangeInfo component

const Screen4 = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState('Recipe');
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const backAction = () => {
      if (isMenuVisible) {
        setIsMenuVisible(false);
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [isMenuVisible]);

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('userName');
      if (value !== null) {
        setUserName(value);
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  const btnLogout = () => {
    navigation.navigate('Login');
  };

  const handleLogout = () => {
    Alert.alert(
      'Are you sure you want to log out?',
      '',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Yes', onPress: btnLogout},
      ],
      {cancelable: false},
    );
  };

  const handleUpdate = () => {
    navigation.navigate('ChangeInfo');
  };
  const data = [
    {
      id: 1,
      name: 'Traditional spare ribs baked',
      img: 'https://i.ibb.co/2PNRhJ6/image.png',
      by: 'Chef John',
      rate: '4.5',
      time: '20',
    },
    {
      id: 2,
      name: 'Spice roasted chicken with flavored rice',
      img: 'https://i.ibb.co/SVxhyrT/image2.png',
      by: 'Mark Kelvin',
      rate: '4',
      time: '15',
    },
    {
      id: 3,
      name: 'Spicy fried rice mix chicken bali',
      img: 'https://i.ibb.co/fCjB8Ks/image1.png',
      by: 'Spicy Nelly',
      rate: '4',
      time: '25',
    },
    {
      id: 4,
      name: 'Lamb chops with fruity couscous and mint',
      img: 'https://i.ibb.co/FgkFPSL/image3.png',
      by: 'Spicy Nelly',
      rate: '3',
      time: '15',
    },
    {
      id: 5,
      name: 'Spicy chicken burger with French fries',
      img: 'https://i.ibb.co/fCjB8Ks/image1.png',
      by: 'Laura wilson',
      rate: '4.5',
      time: '25',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.img}} style={styles.itemImage} />
      <View style={styles.touchRate}>
        <Image
          source={require('../assets/img/stat.png')}
          style={{width: 20, height: 20}}
        />
        <Text style={styles.rate}> {item.rate}</Text>
      </View>

      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemBy}>{item.by}</Text>
      </View>
      <View style={styles.rowTime}>
        <Text style={styles.txtTime}> {item.time} mins</Text>
        <TouchableOpacity style={styles.touchBookMark}>
          <Image
            source={require('../assets/img/bookmarkActive.png')}
            style={styles.icBookMark}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  const Menu = () => {
    return (
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
          <Image
            source={require('../assets/img/share.png')}
            style={styles.menuIcon}
          />
          <Text style={styles.menuText}>Share</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={handleUpdate}>
          <Image
            source={require('../assets/img/changepassword.png')}
            style={styles.menuIcon}
          />
          <Text style={styles.menuText}>Update Info</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.menuItem} onPress={handleUpdate}>
          <Image
            source={require('../assets/img/changepassword.png')}
            style={styles.menuIcon}
          />
          <Text style={styles.menuText}>Update Info</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.menuItem} onPress={handleUpdate}>
          <Image
            source={require('../assets/img/faq.png')}
            style={styles.menuIcon}
          />
          <Text style={styles.menuText}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
          <Image
            source={require('../assets/img/logout.png')}
            style={styles.menuIcon}
          />
          <Text style={styles.menuText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text></Text>
        <Text style={styles.txtHeader}>Profile</Text>
        <TouchableOpacity onPress={() => setIsMenuVisible(true)}>
          <Image
            source={require('../assets/img/menu.png')}
            style={styles.imgHeader}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.info}>
        <Image
          source={require('../assets/img/chef.png')}
          style={styles.avatarChef}
        />

        <View style={styles.columnInfo}>
          <Text style={styles.title}>Recipe</Text>
          <Text style={styles.count}>4</Text>
        </View>
        <View style={styles.columnInfo}>
          <Text style={styles.title}>Follower</Text>
          <Text style={styles.count}>2.5M</Text>
        </View>
        <View style={styles.columnInfo}>
          <Text style={styles.title}>Following</Text>
          <Text style={styles.count}>999</Text>
        </View>
      </View>

      <Text style={styles.name}>{userName}</Text>
      <Text>Chef</Text>
      <Text style={styles.bio}>
        Private Chef Passionate about food and life 🥘🍲🍝🍱
      </Text>
      <Text style={styles.more}>More...</Text>

      <View style={styles.list}>
        <TouchableOpacity
          style={[styles.btnTouch, selected === 'Recipe' && styles.btnSelected]}
          onPress={() => handlePress('Recipe')}>
          <Text
            style={[
              styles.txtTouch,
              selected === 'Recipe' && styles.txtSelected,
            ]}>
            Recipe
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnTouch, selected === 'Videos' && styles.btnSelected]}
          onPress={() => handlePress('Videos')}>
          <Text
            style={[
              styles.txtTouch,
              selected === 'Videos' && styles.txtSelected,
            ]}>
            Videos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnTouch, selected === 'Tag' && styles.btnSelected]}
          onPress={() => handlePress('Tag')}>
          <Text
            style={[styles.txtTouch, selected === 'Tag' && styles.txtSelected]}>
            Tag
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
      />

      <Modal visible={isMenuVisible} animationType="slide" transparent>
        <TouchableOpacity
          style={styles.modalClose}
          onPress={() => setIsMenuVisible(false)}>
          <Image
            source={require('../assets/img/close.png')}
            style={styles.closeIcon}
          />
        </TouchableOpacity>
        <Menu />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtHeader: {
    fontSize: 25,
    color: 'black',
    fontWeight: '700',
    lineHeight: 30,
  },
  imgHeader: {
    width: 40,
    height: 40,
  },
  modalClose: {
    position: 'absolute',
    top: 30,
    right: 20,
  },
  closeIcon: {
    width: 30,
    height: 30,
  },
  menuContainer: {
    position: 'absolute',
    top: 60,
    right: 10,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
  },
  menuIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },

  menuText: {
    fontSize: 23,
    color: 'black',
  },
  itemContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  itemImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
  itemDetails: {
    marginLeft: 10,
    bottom: 30,
    position: 'absolute',
  },
  itemName: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    width: '80%',
  },
  itemBy: {
    fontSize: 14,
    color: 'white',
    marginVertical: 5,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  btnTouch: {
    width: 100,
    height: 35,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSelected: {
    backgroundColor: '#71B1A1',
  },
  txtTouch: {
    color: '#71B1A1',
    fontWeight: '500',
    fontSize: 15,
  },
  txtSelected: {
    color: 'white',
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 20,
  },
  more: {
    fontSize: 14,
    color: '#71B1A1',
    fontWeight: '600',
  },
  bio: {
    marginVertical: 5,
    color: 'black',
    width: '80%',
    height: 'auto',
    fontSize: 14,
    fontWeight: '400',
  },
  name: {
    fontSize: 23,
    fontWeight: '500',
    color: 'black',
  },
  count: {
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
  },
  title: {
    fontSize: 15,
    color: 'gray',
    fontWeight: '500',
  },
  columnInfo: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  avatarChef: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
});

export default Screen4;
