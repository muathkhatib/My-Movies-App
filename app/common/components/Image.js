import React, {useState} from 'react';
import {Image as RNImage, View, ActivityIndicator} from 'react-native';
import {BASE_IMAGE_URI} from '../../utils/constants';
import stylesList from './style';

const Image = ({height = 50, uri = BASE_IMAGE_URI, width = 50, style = {}}) => {
  const [loading, setLoding] = useState(true);
  const [isError, setIsError] = useState(false);
  const styles = {width, height, ...style};
  return (
    <View style={styles}>
      {loading && !isError && (
        <ActivityIndicator
          color="#0296E5"
          size="small"
          style={stylesList.activityIndicator}
        />
      )}
      <RNImage
        onLoadStart={() => setLoding(true)}
        onLoadEnd={() => setLoding(false)}
        onError={() => setIsError(true)}
        source={{uri: isError ? BASE_IMAGE_URI : uri}}
        style={styles}
      />
    </View>
  );
};

export default Image;
