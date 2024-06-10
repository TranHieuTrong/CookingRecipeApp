import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import NotificationItem from '../components/NotificationItem';

const NotificationScreen = () => {
  const [activeTab, setActiveTab] = useState('ALL');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity
          onPress={() => setActiveTab('ALL')}
          style={[styles.tabBtn, activeTab === 'ALL' && styles.activeTab]}>
          <Text
            style={[
              styles.tabTitle,
              activeTab === 'ALL' && styles.tabTitleActive,
            ]}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab('READ')}
          style={[styles.tabBtn, activeTab === 'READ' && styles.activeTab]}>
          <Text
            style={[
              styles.tabTitle,
              activeTab === 'READ' && styles.tabTitleActive,
            ]}>
            Read
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab('UNREAD')}
          style={[styles.tabBtn, activeTab === 'UNREAD' && styles.activeTab]}>
          <Text
            style={[
              styles.tabTitle,
              activeTab === 'UNREAD' && styles.tabTitleActive,
            ]}>
            Unread
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.tabContent}>
        <Text style={styles.notificationDateGroup}>Today</Text>

        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />

        <Text style={styles.notificationDateGroup}>Yesterday</Text>

        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
      </ScrollView>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  headerTitle: {
    fontWeight: '600',
    fontSize: 18,
    color: '#121212',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 8,
    paddingHorizontal: 20,
  },
  tabBtn: {
    borderRadius: 10,
    paddingVertical: 8,
    flex: 1,
  },
  tabTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#71B1A1',
    textAlign: 'center',
  },
  tabTitleActive: {
    color: '#fff',
  },
  activeTab: {
    backgroundColor: '#129575',
  },
  tabContent: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  notificationDateGroup: {
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
});
