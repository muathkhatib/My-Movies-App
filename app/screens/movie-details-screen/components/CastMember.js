import {View, Text, Image} from 'react-native';
import React from 'react';
import style from './style';

export default function CastMember({name, image}) {
  return (
    <View style={style.castMember.container}>
      <Image style={style.castMember.memberImage} source={{uri: image}} />
      <Text style={style.castMember.nameText}>{name}</Text>
    </View>
  );
}
