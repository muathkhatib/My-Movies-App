import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import Image from '../../../../common/components/Image';

const TapBarSection = ({list, data}) => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Now playing');

  return (
    <>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={style.headerContainer}>
        {list.map((item, index) => {
          return (
            <TouchableOpacity
              key={item}
              style={[
                style.headerTab,
                activeTab === item ? style.headerActiveTab : null,
              ]}
              onPress={i => setActiveTab(item)}>
              <Text
                style={[
                  style.headerTabText,
                  activeTab === item ? style.headerActiveTabText : null,
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View style={style.tabBodyContainer}>
        {data
          .filter(e => e.cast.toLowerCase() === activeTab.toLowerCase())
          .map(item => (
            <TouchableOpacity
              onPress={() => navigation.navigate('MovieDetailsScreen', item)}
              key={`${item.id} ${item.cast}`}
              style={style.tabItemContainer}>
              <Image uri={item.image_url} style={style.tabItemImage} />
            </TouchableOpacity>
          ))}
      </View>
    </>
  );
};

export default TapBarSection;
