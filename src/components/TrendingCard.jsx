import { StyleSheet, Text, View ,Image,Dimensions,Pressable} from 'react-native'
import React from 'react'
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
const {width,height } = Dimensions.get('window');
const TrendingCard = ({item}) => {
  const navigation = useNavigation();
  // console.log(item.backdrop_path,item.poster_path)
  return (
    <Pressable onPress={() => navigation.navigate("MovieInfo",{data : item})}>
      <Image source={{uri:`https://image.tmdb.org/t/p/w500${item?.backdrop_path || item?.poster_path}`}} style={styles.imgHolder}/>
    </Pressable>
  )
}

export default TrendingCard;

const styles = StyleSheet.create({
    title:{
        color:'white'
    },
    imgHolder:{
        height:height*0.4,
        width:width*0.7,
        borderRadius:responsiveWidth(4),
        resizeMode:'contain'
    }
})