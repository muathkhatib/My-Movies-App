import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Reviews from './Reviews';
import CastMember from './CastMember';
import style from './style';

export default function tabHandler({tabKey, content}) {
  switch (tabKey) {
    case 'about_movie':
      return <Text style={style.tabHandler.reviewText}>{content}</Text>;
    case 'reviews':
      return (
        <ScrollView>
          {content.map(c => (
            <Reviews
              name={c.reviewer_name}
              rate={c.review_rate}
              image={c.reviewer_image}
              content={c.review_content}
            />
          ))}
        </ScrollView>
      );
    case 'cast_team':
      return (
        <View style={style.tabHandler.castMemberContainer}>
          {content.map((c, i) => (
            <CastMember
              key={`${i} - ${c.team_player_name}`}
              name={c.team_player_name}
              image={c.team_player_image_url}
            />
          ))}
        </View>
      );
  }
}
