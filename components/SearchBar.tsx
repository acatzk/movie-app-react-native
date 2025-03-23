import React from 'react'
import { View, Image, TextInput } from 'react-native'

import { icons } from '~/constants/icons'

type SearchBar = {
  onPress?: () => void
  placeholder: string
  value: string
  onChangeText: (text: string) => void
}

const SearchBar = ({ onPress, placeholder, value, onChangeText }: SearchBar): React.JSX.Element => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-1.5">
      <Image source={icons.search} className="w-5 h-5" resizeMode="contain" tintColor="#AB8BFF" />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#A8B5DB"
        className="flex-1 ml-2 text-white"
      />
    </View>
  )
}

export default SearchBar
