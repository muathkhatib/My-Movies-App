import {ScrollView, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useAsyncStorage} from '../../../../store';

import style from './style';
import Image from '../../../../common/components/Image';

export default function TopFiveSection() {
  const navigation = useNavigation();
  const data = useAsyncStorage('Movies');

  const [topFiveList, setTopFiveList] = useState([]);

  useEffect(() => {
    const topFiveMovies = data.sort((a, b) => a.rate - b.rate).slice(-5);
    setTopFiveList(topFiveMovies);
  }, [data]);
  return (
    <>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={style.container}>
        {topFiveList.map((item, index) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('MovieDetailsScreen', item)}
            key={`${item.id}, ${item.name}`}
            style={style.listItemContainer}>
            <Image uri={item.image_url} style={style.itemImage} />

            <Text style={style.itemNumber}>{index + 1}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
}
