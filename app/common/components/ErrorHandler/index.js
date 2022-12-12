import {View, Text, Image} from 'react-native';
import React from 'react';
import style from './style';

export default function ErrorHandler({imageSrc, title, subTitle}) {
  return (
    <View style={style.container}>
      {imageSrc && <Image source={imageSrc} style={style.errorImage} />}
      <View>
        {title && <Text style={style.errorTitle}>{title}</Text>}
        {subTitle && <Text style={style.errorSubTitle}>{subTitle}</Text>}
      </View>
    </View>
  );
}
