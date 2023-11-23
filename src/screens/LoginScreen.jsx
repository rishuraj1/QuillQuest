import {View, Text, ScrollView} from 'react-native';
import {Input, Button} from '../components';
import React, {useState} from 'react';
import {API_URL} from '@env';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const onLoginPress = async () => {
    if (!email || !password) {
      console.warn('Please fill all the fields');
      return;
    }
    try {
      const loginURL = `${API_URL}/api/user/login`;
      const body = {
        email: email,
        password: password,
      };
      const response = await axios.post(loginURL, body);
      console.log(response);
      console.warn('Login sucessful');
      await AsyncStorage.setItem('userData', JSON.stringify(response.data));
    } catch (error) {
      console.log(error.response.data);
      console.warn(error);
    }
  };

  const onForogotPasswordPress = async () => {
    console.warn('Forgot Password Pressed');
  };

  return (
    <ScrollView>
      <View className="items-center p-5">
        <Text className="mt-24 text-7xl text-slate-900 text-csenter font-bold">
          QuillQuest
        </Text>
        <View className="mt-24 bg-slate-900 px-10 py-7 rounded-md shadow-md flex items-center">
          <Text className="text-3xl font-bold">Login</Text>
          <Input placeholder={'Email'} value={email} setValue={setEmail} />
          <Input
            placeholder={'Password'}
            value={password}
            setValue={setPassword}
            secureTextEntry
          />
          <Button onPress={onLoginPress} text="Login" />
          <Button
            onPress={onForogotPasswordPress}
            text="Forgot Password"
            type="tertiary"
          />
          <Text className="mt-5">Do not have an account yet ?</Text>
          <Button
            onPress={() => navigation.navigate('Signup')}
            text="Sign Up"
            type="secondary"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
