import { StyleSheet, Text, View ,Dimensions,Image, Pressable} from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { color } from '../constants/color';
import { useNavigation } from '@react-navigation/native';
const {width,height } = Dimensions.get('window');

const MovieCard = ({item}) => {
  console.log(item)
  const navigation = useNavigation();
  return (
    <Pressable style={styles.container} onPress={() => navigation.push("MovieInfo",{data:item})}>
        <Image source={{uri:`https://image.tmdb.org/t/p/w500${item?.backdrop_path || item?.poster_path}`}} style={styles.imgHolder}/>
        <Text style={styles.title} numberOfLines={1}>{item?.original_title.length > 14 ? item?.original_title.slice(0,12)+"..." : item?.original_title}</Text>
    </Pressable>
  )
}

export default MovieCard

const styles = StyleSheet.create({
    imgHolder:{
        height:height*0.2,
        width:width*0.3,
        borderRadius:responsiveWidth(2),
        marginHorizontal:responsiveWidth(1),
    },
    title:{
        fontSize:responsiveFontSize(1.7),
        color:color.TEXT_PRIMARY,
        width:width*0.3,
        paddingLeft:responsiveWidth(3)
    },
    container:{
    }
})