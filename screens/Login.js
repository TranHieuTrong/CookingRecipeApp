import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  onPress,
  Alert,
} from 'react-native';
import Screen1 from './Screen1';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('hchong@gmail.com');
  const [password, setPassword] = useState('Trong1507@');
  const [userId, setUserId] = useState('');
  const next = async () => {
    if (!email || !password) {
      Alert.alert('Vui lòng điền đầy đủ thông tin.');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Email không hợp lệ.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Mật khẩu quá ngắn. Hãy sử dụng ít nhất 6 ký tự.');
      return;
    }

    try {
      const response = await axios.post('http://192.168.56.1:9999/user/login', {
        email,
        password,
      });

      if (response.status === 200) {
        console.log('Đăng nhập thành công:', response.data);

        await AsyncStorage.setItem('userId', response.data.user._id);
        await AsyncStorage.setItem('userName', response.data.user.name);

        if (response.data.user.phone) {
          await AsyncStorage.setItem('userPhone', response.data.user.phone);
        }
        if (response.data.user.image) {
          await AsyncStorage.setItem('userImage', response.data.user.image);
        }
        navigation.navigate('Navigation');
      }
    } catch (error) {
      console.log('Sai mật khẩu');
      Alert.alert('Sai mật khẩu');
    }
  };

  const isValidEmail = email => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const btnSignUp = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txtHeader}>Hello,</Text>
      <Text style={styles.txtHeader2}>Welcome Back!</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        placeholderTextColor="gray"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        placeholderTextColor="gray"
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <View style={{alignItems: 'left', marginTop: 20}}>
        <View style={styles.txtBody1}>
          <Text style={{color: '#FF9C00', fontSize: 16}}>Forgot Password</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.touch} onPress={next}>
        <Text style={styles.txtTouch}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.Or}>
        <View style={styles.hr}></View>
        <Text style={styles.textOr}>Or Sign in With</Text>
        <View style={styles.hr}></View>
      </View>

      <View style={styles.btnOrLogin}>
        <TouchableOpacity style={styles.ggFB}>
          <Image
            source={require('../assets/img/ic_google.png')}
            style={{width: 60, height: 60}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ggFB}>
          <Image
            source={require('../assets/img/ic_facebook.png')}
            style={{width: 60, height: 60}}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.btnOrLogin}>
        <Text style={styles.noAccount}>Don’t have an account?</Text>
        <TouchableOpacity onPress={btnSignUp}>
          <Text style={styles.taoAccount}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taoAccount: {
    color: '#FF9C00',
  },
  noAccount: {
    color: 'black',
    marginRight: 5,
  },
  ggFB: {
    marginHorizontal: 5,
  },
  btnOrLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textOr: {
    color: '#D9D9D9',
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginTop: 10,
  },
  hr: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    width: 70,
    marginTop: 10,
  },
  Or: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  txtTouch: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  touch: {
    width: '100%',
    height: 60,
    marginTop: 20,
    backgroundColor: '#129575',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  txtBody1: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 2,
  },
  txtHeader2: {
    color: 'black',
    fontSize: 20,
  },
  txtHeader: {
    width: 120,
    height: 45,
    marginTop: 94,
    color: 'black',
    fontSize: 30,
    fontWeight: '600',
  },
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: 'white',
  },
});

export default Login;
