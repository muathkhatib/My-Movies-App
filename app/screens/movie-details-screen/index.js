import React, {useMemo} from 'react';
import {View, Text, Dimensions} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TapBarSection from './components/TapBarSection';
import Image from '../../common/components/Image';

import {styles} from '../../styles/theme';
import {ScrollView} from 'react-native-gesture-handler';
import style from './style';

export default function MovieDetailsScreen({route, navigation}) {
  const height = useMemo(() => Dimensions.get('screen').height, []);
  const width = useMemo(() => Dimensions.get('screen').width, []);
  const movieDetails = useMemo(() => route.params, [route.params]);
  return (
    <>
      <View style={style.coverSectionContainer}>
        <View style={style.coverImageContainer}>
          <Image uri={movieDetails.image_url} style={style.coverImage} />
        </View>
        <View style={style.rateCoverContainer}>
          <Feather name="star" size={20} color="#FF8700" />
          <Text style={style.rateText}>9.5</Text>
        </View>
        <View style={style.detailsContainer}>
          <View style={style.nameContainer}>
            <Image uri={movieDetails.image_url} style={style.movieImage} />
            <Text style={style.movieNameText}>{movieDetails.name}</Text>
          </View>
          <View style={style.detailsSubContainer}>
            <View
              style={[
                {...style.subContainerItem, ...styles.BORDER_ELEMENT_RIGHT},
              ]}>
              <Feather name="calendar" size={24} color="#92929D" />
              <Text style={style.subContainerText}>{movieDetails.year}</Text>
            </View>
            <View
              style={[
                {...style.subContainerItem, ...styles.BORDER_ELEMENT_RIGHT},
              ]}>
              <Feather name="clock" size={24} color="#92929D" />
              <Text style={style.subContainerText}>
                {movieDetails.time} Minutes
              </Text>
            </View>
            <View style={style.subContainerItem}>
              <MaterialCommunityIcons
                name="ticket-confirmation-outline"
                size={24}
                color="#92929D"
              />
              <Text style={style.subContainerText}>{movieDetails.genre}</Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView style={styles.PADDING_CONTAINER}>
        <TapBarSection
          list={['About Movie', 'Reviews', 'Cast Team']}
          defaultTab="About Movie"
          details={movieDetails.details}
        />
      </ScrollView>
    </>
  );
}
