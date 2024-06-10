import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ReviewItem = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.userInfo}>
        <Image source={require('../images/avatar.png')} />

        <View>
          <Text style={styles.name}>Bella Throne</Text>
          <Text style={styles.dateCreated}>June 12, 2020 - 19:35</Text>
        </View>
      </View>

      <Text style={styles.content}>
        Lorem Ipsum tempor incididunt ut labore et dolore,inise voluptate velit
        esse cillum
      </Text>

      <View style={styles.listReaction}>
        <TouchableOpacity style={[styles.reactionItem, styles.reactionActive]}>
          <Image source={require('../images/icon-like.png')} />

          <Text style={styles.reactionNum}>10</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.reactionItem}>
          <Image source={require('../images/icon-dislike.png')} />

          <Text style={styles.reactionNum}>10</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    columnGap: 8,
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 100,
    objectFit: 'cover',
  },
  name: {
    fontSize: 12,
    fontWeight: '600',
    color: '#121212',
    lineHeight: 17,
  },
  dateCreated: {
    color: '#A9A9A9',
  },
  content: {
    fontSize: 12,
    color: '#484848',
    marginTop: 10,
    marginBottom: 6,
    lineHeight: 17,
  },
  listReaction: {
    flexDirection: 'row',
    columnGap: 6,
  },
  reactionItem: {
    backgroundColor: '#DBEBE7',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 10,
    flexDirection: 'row',
    columnGap: 6,
    alignItems: 'center',
  },
  reactionNum: {
    color: '#484848',
    fontSize: 10,
  },
  reactionActive: {
    backgroundColor: '#71B1A1',
  },
});
export default ReviewItem;
