import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {wait} from '../../utils';
import Image from '../../common/components/Image';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

export default function ListHandler({list, onRefreshCallback}) {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => {
      onRefreshCallback();
      setRefreshing(false);
    });
  }, [onRefreshCallback]);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {list.map(result => (
          <TouchableOpacity
            onPress={() => navigation.navigate('MovieDetailsScreen', result)}
            key={`${result.id}-${result.name}`}
            style={style.listItem}>
            <Image uri={result.image_url} style={style.itemImage} />
            <View style={style.itemDetailsContainer}>
              <View style={style.itemContainer}>
                <Text style={[{...style.itemText, ...style.itemName}]}>
                  {result.name}
                </Text>
              </View>

              <View>
                <View style={style.itemContainer}>
                  <AntDesign name="staro" size={16} color="#FF8700" />
                  <Text style={[{...style.itemText, ...style.itemRateText}]}>
                    {result.rate}
                  </Text>
                </View>
                <View style={style.itemContainer}>
                  <MaterialCommunityIcons
                    name="ticket-confirmation-outline"
                    size={16}
                    color="#92929D"
                  />
                  <Text style={style.itemText}>{result.genre}</Text>
                </View>
                <View style={style.itemContainer}>
                  <Feather name="calendar" size={16} color="#92929D" />
                  <Text style={style.itemText}>{result.year}</Text>
                </View>
                <View style={style.itemContainer}>
                  <Feather name="clock" size={16} color="#92929D" />
                  <Text style={style.itemText}>{result.time}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
}
