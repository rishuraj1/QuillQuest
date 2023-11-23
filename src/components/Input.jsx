import {View, Text, TextInput} from 'react-native';
import React from 'react';

const Input = ({
  placeholder,
  className = '',
  value,
  setValue,
  secureTextEntry = false,
}) => {
  return (
    <View className={`${className} w-[300px] px-4 my-5`}>
      <TextInput
        value={value}
        onChangeText={setValue}
        className="bg-slate-800 border-2 text-lg font-semibold text-gray-400 px-4 border-black rounded-sm p-2"
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;
