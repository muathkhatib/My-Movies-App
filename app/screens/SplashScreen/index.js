import {View, Image} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {splashPopcorn} from '../../../assets/images';
import MOCK_DATA_FOR_STORE from '../../data/MOCK_DATA_FOR_STORE.json';
import {storeData} from '../../store';
import style from './style';

const SplashScreen = () => {
  const navigation = useNavigation();

  const stackNavigator = useCallback(() => {
    storeData('Movies', MOCK_DATA_FOR_STORE);

    setTimeout(() => {
      navigation.navigate('Root');
    }, 650);
  }, [navigation]);

  useEffect(() => {
    stackNavigator();
  }, [stackNavigator]);

  return (
    <View style={style.container}>
      <Image source={splashPopcorn} />
    </View>
  );
};

export default SplashScreen;
