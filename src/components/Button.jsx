import {View, Text, Pressable} from 'react-native';
import React from 'react';

const Button = ({text, onPress, type = 'primary'}) => {
  return (
    <Pressable
      onPress={onPress}
      className={`mt-5 p-2 rounded-sm w-[265px] justify-center items-center ${
        type === 'primary' && 'bg-indigo-500'
      }
      ${type === 'secondary' && 'bg-gray-500'}
        ${type === 'tertiary' && 'bg-transparent border-2 border-indigo-500'}
      }`}>
      <Text className="font-semibold text-white text-xl">{text}</Text>
    </Pressable>
  );
};

export default Button;
