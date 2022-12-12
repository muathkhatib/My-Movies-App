import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useMemo, useState} from 'react';
import style from '../../style';
import tabHandler from '../tabHandler';

const TapBarSection = ({defaultTab = 'Now playing', list, details}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const tabContent = useMemo(
    () => details[activeTab.toLowerCase().replace(' ', '_')],
    [activeTab, details],
  );

  return (
    <>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={style.headerContainer}>
        {list.map(item => {
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
      <View style={style.tabBarContainer}>
        {tabHandler({
          tabKey: activeTab.toLowerCase().replace(' ', '_'),
          content: tabContent,
        })}
      </View>
    </>
  );
};

export default TapBarSection;
