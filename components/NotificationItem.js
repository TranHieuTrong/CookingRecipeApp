import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const NotificationItem = () => {
  const navigation = useNavigation();

  const onNavigateToReviewScreen = () => {
    navigation.navigate('Reviews');
  };

  return (
    <TouchableOpacity onPress={onNavigateToReviewScreen}>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Text style={styles.title}>New Recipe Alert!</Text>
          <Text style={styles.description}>
            Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit
            esse cillum
          </Text>

          <Text style={styles.time}>10 mins ago</Text>
        </View>

        <View>
          <Image
            source={require('../assets/img/icon-notification-2.png')}
            style={styles.iconNotification}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    columnGap: 24,
    marginBottom: 10,
  },
  title: {
    fontWeight: '600',
    color: '#121212',
  },
  description: {
    color: '#A9A9A9',
    lineHeight: 20,
    marginTop: 6,
  },
  time: {
    color: '#A9A9A9',
    fontSize: 8,
    marginTop: 6,
  },
  iconNotification: {
    width: 28,
    height: 28,
    objectFit: 'contain',
  },
});

export default NotificationItem;
