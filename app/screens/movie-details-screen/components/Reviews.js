import {View, Text, Image} from 'react-native';
import React from 'react';
import {reviewerImage} from '../../../../assets/images';
import style from './style';

export default function Reviews({name, content, rate, image}) {
  return (
    <View style={style.reviews.container}>
      <View style={style.reviews.rateContainer}>
        <Image style={style.reviews.reviewerImage} source={reviewerImage} />
        <Text style={style.reviews.reviewRateText}>{rate}</Text>
      </View>
      <View style={style.reviews.reviewNameContainer}>
        <Text style={style.reviews.reviewNameText}>{name}</Text>
        <Text style={style.reviews.reviewContentText}>{content}</Text>
      </View>
    </View>
  );
}
