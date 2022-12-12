import {View, TextInput, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {searchIcon} from '../../../assets/images';
import style from './style';

export default function SearchBox({value}) {
  const [searchValue, setSearchValue] = useState(value);
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <TextInput
        onChangeText={setSearchValue}
        style={style.textInput}
        placeholder="Search"
        placeholderTextColor="#67686D">
        {value && value}
      </TextInput>
      <Pressable
        onPress={() =>
          searchValue &&
          navigation.navigate('SearchScreen', {
            value: searchValue,
          })
        }>
        <Image source={searchIcon} />
      </Pressable>
    </View>
  );
}
