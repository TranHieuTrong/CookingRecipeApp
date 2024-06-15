import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Register = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [check, setCheck] = useState(false);

  const next = async () => {
    if (!email || !password || !name || !confirm) {
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

    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,50}$/;
    if (!strongPasswordRegex.test(password)) {
      Alert.alert(
        'Pass gồm ít nhất 1 kí tự đặc biệt, chữ cái viết hoa, và ít nhất 6 chữ cái',
      );
      return;
    }

    if (password !== confirm) {
      Alert.alert('Mật khẩu xác nhận không khớp.');
      return;
    }

    try {
      console.log('Sending request to API');
      const response = await fetch('http://192.168.56.1:9999/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log('Response from API:', data);

      if (data.message === 'Đăng ký thành công') {
        Alert.alert('Đăng ký thành công!');
        navigation.navigate('Login');
      } else {
        Alert.alert('Đăng ký thất bại. Vui lòng thử lại.');
      }
    } catch (error) {
      console.error('Error occurred:', error);
      Alert.alert('Đã có lỗi xảy ra. Vui lòng thử lại sau.');
    }
  };

  // Hàm kiểm tra định dạng email
  const isValidEmail = email => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = e => {
    setCheck(e.target.checked);
  };

  const btnSignIn = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.txtHeader}>Create an account</Text>
      <Text style={styles.txtHeader2}>
        Let’s help you set up your account, it won’t take long.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        placeholderTextColor="gray"
        value={name}
        onChangeText={text => setName(text)}></TextInput>

      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        placeholderTextColor="gray"
        value={email}
        onChangeText={text => setEmail(text)}></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        placeholderTextColor="gray"
        value={password}
        onChangeText={text => setPassword(text)}></TextInput>

      <TextInput
        style={styles.input}
        placeholder="Retype Password"
        placeholderTextColor="gray"
        value={confirm}
        onChangeText={text => setConfirm(text)}></TextInput>

      <TouchableOpacity style={styles.touch} onPress={next}>
        <Text style={styles.txtTouch}>Sign Up</Text>
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
        <Text style={styles.noAccount}>Already a member? </Text>
        <TouchableOpacity onPress={btnSignIn}>
          <Text style={styles.taoAccount}> Sign In</Text>
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
    fontSize: 13,
    width: 210,
  },
  txtHeader: {
    width: '100%',
    height: 45,
    marginTop: 10,
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

export default Register;
