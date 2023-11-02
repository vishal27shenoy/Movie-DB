import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { color } from '../constants/color'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import MovieCard from './MovieCard'
import Skeleton from './Skeleton'

const MovieList = ({title,data}) => {
  console.log(data)
  return (
    <View>
     <View style={styles.titleContainer}>
        <Text style={styles.firstLetter}>{title.slice(0,1)}<Text style={styles.title}>{title.slice(1,title.length)}</Text></Text>
      </View>
      <View style={styles.moviesContainer}>
            <FlatList
            data={data?.length > 0 ? data : [1,2,3,4]}
            horizontal
            renderItem={({item}) => data?.length > 0 ? <MovieCard item={item}/> : <Skeleton/>}
            key={(item) => item+""}
            />
      </View>
    </View>
  )
}

export default MovieList

const styles = StyleSheet.create({
    firstLetter:{
        color:color.FIRST_LETTER,
        fontSize:responsiveFontSize(2),
        fontWeight:'bold',
    },
    title:{
        color:color.TEXT_PRIMARY,
        fontSize:responsiveFontSize(2),
        fontWeight:'bold',
    },
    titleContainer:{
        paddingHorizontal:responsiveWidth(3),
        marginTop:responsiveHeight(3),
    },
    moviesContainer:{
        marginTop:responsiveHeight(2),
    
    }
})