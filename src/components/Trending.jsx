import {StyleSheet, Text, View,Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import React from 'react';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { color } from '../constants/color';
import TrendingCard from './TrendingCard';
import Skeleton from './Skeleton';
import TrendingSkeleton from './TrendingSkeleton';
const {width,height } = Dimensions.get('window');
const Trending = ({data}) => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.firstLetter}>T<Text style={styles.title}>rending</Text></Text>
      </View>
      <Carousel 
      data={data.length > 0 ? data : [1,2,3,4,5]}
      renderItem={({item}) => data.length > 0 ? <TrendingCard item={item}/> : <TrendingSkeleton/>}
      firstItem={1}
      inactiveSlideOpacity={0.6}
      sliderWidth={width}
      itemWidth={width*0.7}
      slideStyle={{display:'flex',alignItems:'center'}}
      />
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({
    title:{
        fontSize:responsiveFontSize(2),
        color:color.FIRST_LETTER
    },
    firstLetter:{
        fontSize:responsiveFontSize(2),
        color:color.FIRST_LETTER,
        fontWeight:'bold'
    },
    title:{
        color:color.TEXT_PRIMARY,
        fontSize:responsiveFontSize(2)
    },
    titleContainer:{
        paddingHorizontal:responsiveWidth(3),
        fontWeight:'bold',
        marginBottom:responsiveHeight(2)
    }
});
