import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';
import SearchBox from '../../components/SearchBox';

import {noResult} from '../../../assets/images';
import ListHandler from '../../components/ListHandler';
import ErrorHandler from '../../common/components/ErrorHandler';
import style from './style';
import {useAsyncStorage} from '../../store';

export default function SearchScreen(props) {
  const data = useAsyncStorage('Movies');

  const [moviesList, setMoviesList] = useState([]);
  const searchKey = useMemo(
    () => props.route.params?.value?.toLowerCase(),
    [props.route.params?.value],
  );

  const filterHandler = useCallback(() => {
    const filterMovies = data.filter(
      m =>
        m.name?.toLowerCase().includes(searchKey) ||
        m.cast?.toLowerCase().includes(searchKey) ||
        m.genre?.toLowerCase().includes(searchKey),
    );
    setMoviesList(filterMovies);
  }, [data, searchKey]);

  useEffect(() => {
    filterHandler();
  }, [filterHandler]);

  return (
    <View style={style.container}>
      <SearchBox value={props.route.params?.value} />
      {moviesList.length > 0 ? (
        <ListHandler list={moviesList} onRefreshCallback={filterHandler} />
      ) : (
        <ErrorHandler
          imageSrc={noResult}
          title="We are sorry, we can not find the movie :("
          subTitle="Find your movie by Type title, categories, years, etc"
        />
      )}
    </View>
  );
}
