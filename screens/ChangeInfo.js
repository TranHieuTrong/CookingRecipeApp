import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const ChangeInfo = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const [phone, setPhone] = useState('');
  const [userId, setUserId] = useState('');
  const [savedName, setSavedName] = useState('');
  const [savedPassword, setSavedPassword] = useState('');
  const [savedImage, setSavedImage] = useState('');
  const [savedPhone, setSavedPhone] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = await AsyncStorage.getItem('userId');
        if (id) {
          setUserId(id);
        }

        const savedName = await AsyncStorage.getItem('userName');
        const savedPassword = await AsyncStorage.getItem('userPassword');
        const savedImage = await AsyncStorage.getItem('userImage');
        const savedPhone = await AsyncStorage.getItem('userPhone');

        if (savedName) setSavedName(savedName);
        if (savedPassword) setSavedPassword(savedPassword);
        if (savedImage) setSavedImage(savedImage);
        if (savedPhone) setSavedPhone(savedPhone);
      } catch (error) {
        console.error('Error retrieving data:', error);
      }
    };

    fetchData();
  }, []);
  const validatePassword = password => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isValidLength = password.length >= 6;

    return hasUpperCase && hasSpecialChar && isValidLength;
  };
  const handleSave = async () => {
    try {
      const data = {};
      if (name !== '') data.name = name;

      if (password !== '') {
        if (validatePassword(password)) {
          data.password = password;
        } else {
          Alert.alert(
            'Mật khẩu phải có ít nhất 1 chữ cái viết hoa, ít nhất 6 kí tự, và ít nhất 1 kí tự đặc biệt.',
          );
          return;
        }
      }

      if (image !== '') data.image = image;
      if (phone !== '') data.phone = phone;

      const response = await axios.put(
        `http://192.168.56.1:9999/user/updateUser/${userId}`,
        data,
      );

      if (
        response.status === 200 &&
        response.data.message === 'Cập nhật thông tin thành công'
      ) {
        Alert.alert('Thông tin đã được cập nhật.');
      } else {
        Alert.alert('Cập nhật thông tin thành công.');
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        console.error('Error message:', error.response.data.message);
      }
      Alert.alert('Đã có lỗi xảy ra. Vui lòng thử lại sau.');
    }
  };

  return (
    <View style={{padding: 20}}>
      <Text style={{fontSize: 20, marginBottom: 10}}>Change Info</Text>
      <Text>Name: {savedName}</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
        }}
        value={name}
        onChangeText={text => setName(text)}
        placeholder="New name"
      />
      <Text>Password: {savedPassword}</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
        }}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        placeholder="New password"
      />
      <Text>Image: {savedImage}</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
        }}
        value={image}
        onChangeText={text => setImage(text)}
        placeholder="New image URL (Optional)"
      />
      <Text>Phone: {savedPhone !== '' ? savedPhone : 'No phone number'}</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
        }}
        value={phone}
        onChangeText={text => setPhone(text)}
        placeholder="New phone number"
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default ChangeInfo;
