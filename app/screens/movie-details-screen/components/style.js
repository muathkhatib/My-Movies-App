import {StyleSheet} from 'react-native';

const tabHandler = {
  reviewText: {color: '#fff', fontSize: 14},
  castMemberContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
};

const reviews = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 110,
  },
  rateContainer: {
    height: '100%',
    marginHorizontal: 12,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  reviewerImage: {width: 44, height: 44},
  reviewRateText: {
    color: '#0296E5',
  },
  reviewNameContainer: {
    height: '100%',
    justifyContent: 'space-evenly',
    width: 260,
  },
  reviewNameText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
  reviewContentText: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Poppins',
  },
};

const castMember = {
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 123,
    margin: 8,
  },
  memberImage: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  nameText: {color: 'white', fontWeight: '500'},
};

export default StyleSheet.create({
  tabHandler,
  reviews,
  castMember,
});
