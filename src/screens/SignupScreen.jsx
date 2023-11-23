import {View, Text, ScrollView} from 'react-native';
import {Input, Button} from '../components';
import {API_URL} from '@env';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignupPress = async () => {
    if (!username || !email || !password) {
      console.warn('Please fill all the fields');
      return;
    }
    try {
      const signupURL = `${API_URL}/api/user/signup`;
      const body = {
        userName: username,
        email: email,
        password: password,
      };
      const response = await axios.post(signupURL, body);
      console.log(response);
      //   navigation.navigate('Login');
      //   demo@23.com   123456
      console.warn('Signup sucessful');
      await AsyncStorage.setItem('userData', JSON.stringify(response.data));
    } catch (error) {
      console.log(error.response.data);
      console.warn(error);
    }
  };

  const navigation = useNavigation();

  return (
    <ScrollView>
      <View className="items-center p-5">
        <Text className="mt-24 text-7xl text-csenter font-bold text-slate-900">
          QuillQuest
        </Text>
        <View className="mt-24 bg-slate-900 px-10 py-7 rounded-md shadow-md flex items-center">
          <Text className="text-3xl font-bold">Sign Up</Text>
          <Input
            placeholder={'Username'}
            value={username}
            setValue={setUsername}
          />
          <Input placeholder={'Email'} value={email} setValue={setEmail} />
          <Input
            placeholder={'Password'}
            value={password}
            setValue={setPassword}
            secureTextEntry
          />
          <Button onPress={onSignupPress} text="Sign Up" />
          <Text className="mt-5">Already have an account ?</Text>
          <Button
            onPress={() => navigation.navigate('Login')}
            text="Login"
            type="secondary"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;
