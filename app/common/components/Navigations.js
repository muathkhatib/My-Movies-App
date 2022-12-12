import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {deleteStorageItem, updateStorage, useAsyncStorage} from '../../store';

export function GoBackArrowLeft({color = '#fff'}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <MaterialIcons
        name="chevron-left"
        size={35}
        color={color}
        style={style.headerLeftMargin}
      />
    </TouchableOpacity>
  );
}

export function InfoOutline({color = '#fff'}) {
  return (
    <TouchableOpacity>
      <MaterialIcons
        name="info-outline"
        size={30}
        color={color}
        style={style.headerRightMargin}
      />
    </TouchableOpacity>
  );
}

export function DetailsBookmark({
  color = '#fff',
  name = 'bookmark-outline',
  data,
}) {
  const [item, setItem] = useState([]);
  const [marked, setMarked] = useState(false);

  const watchList = useAsyncStorage('Watch List');

  useEffect(() => {
    const [filterWatchList] = watchList.filter(m => m.id === data.id);
    if (filterWatchList) {
      setItem(filterWatchList);
      setMarked(true);
    }
  }, [data.id, watchList]);

  const updateWatchList = useCallback(() => {
    updateStorage({key: 'Watch List', value: data});
    setMarked(true);
  }, [data]);

  const deleteWatchListItem = useCallback(() => {
    deleteStorageItem({key: 'Watch List', value: item});
    setMarked(false);
  }, [item]);

  return (
    <TouchableOpacity
      onPress={() => (marked ? deleteWatchListItem() : updateWatchList())}>
      <MaterialIcons
        name={marked ? 'bookmark' : name}
        size={30}
        color={color}
        style={style.headerRightMargin}
      />
    </TouchableOpacity>
  );
}

export function HomeTabBar({color = '#fff'}) {
  return <Ionicons name="ios-home" size={24} color={color} />;
}

export function SearchTabBar({color = '#fff'}) {
  return <Ionicons name="ios-search-outline" size={24} color={color} />;
}

export function WatchListTabBar({color = '#fff'}) {
  return <MaterialIcons name="bookmark-outline" size={24} color={color} />;
}

const style = StyleSheet.create({
  headerRightMargin: {marginRight: 24},
  headerLeftMargin: {marginLeft: 14},
});
