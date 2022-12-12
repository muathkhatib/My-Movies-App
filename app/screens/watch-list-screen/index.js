import React, {useState, useEffect, useCallback} from 'react';
import {View} from 'react-native';
import {useNavigationState} from '@react-navigation/native';

import ListHandler from '../../components/ListHandler';
import ErrorHandler from '../../common/components/ErrorHandler';
import {magicBox} from '../../../assets/images';
import {styles} from '../../styles/theme';
import {loadData} from '../../store';

export default function WatchListScreen({route, navigation}) {
  const [watchList, setWatchList] = useState([]);
  const index = useNavigationState(state => state.index);

  const updateWatchList = useCallback(async () => {
    const response = await loadData('Watch List');
    if (response) {
      setWatchList(response);
    }
  }, []);

  useEffect(() => {
    updateWatchList();
  }, [index, updateWatchList]);

  return (
    <View style={styles.FLEX_CONTAINER}>
      {watchList.length > 0 ? (
        <ListHandler list={watchList} onRefreshCallback={updateWatchList} />
      ) : (
        <ErrorHandler
          imageSrc={magicBox}
          title="There is no movie yet!"
          subTitle="Find your movie by Type title, categories, years, etc "
        />
      )}
    </View>
  );
}
