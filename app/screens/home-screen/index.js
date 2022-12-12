import React from 'react';
import {Text, SafeAreaView, ScrollView} from 'react-native';

import SearchBox from '../../components/SearchBox';
import TapBarSection from './components/TapBarSection';
import TopFiveSection from './components/TopFiveSection';

import {useAsyncStorage} from '../../store';
import {styles} from '../../styles/theme';
import style from './style';
function HomeScreen() {
  const data = useAsyncStorage('Movies');
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.PADDING_CONTAINER}>
        <Text style={style.title}>What do you want to watch?</Text>
        <SearchBox />
        <TopFiveSection />
        <TapBarSection
          list={['Now playing', 'Upcoming', 'Top rated', 'Popular']}
          data={data}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
