import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  Pressable
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {color} from '../constants/color';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
const {height, width} = Dimensions.get('window');
import {ChevronLeftIcon as BackIcon} from "react-native-heroicons/solid";
import {HandThumbUpIcon as HandThumb} from "react-native-heroicons/solid";
import LinearGradient from 'react-native-linear-gradient';
import { FlatList } from 'react-native-gesture-handler';
import MovieCard from '../components/MovieCard';
import ActorCard from '../components/ActorCard';
import { fetchMovieCredits, getsimilarMovie } from '../constants/api';
import ActorShimmer from '../components/ActorShimmer';
import Skeleton from '../components/Skeleton';
const MovieInfo = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [actor,setActor] = useState([]);
  const [similarMovie,setSimilarMovie] = useState([]);
  const data = route?.params?.data;
  const {
    adult,
    backdrop_path,
    genre_ids,
    media_type,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    id,
    title,
    video,
    vote_average,
    vote_count,
  } = data;

  useEffect(() => {
    fetchCast();
    fetchSimlarMovie();
  },[]);
  const fetchCast = async () => {
    const response = await fetchMovieCredits(id);
    // console.log(response,"this is cast")
    if(response?.iserror){

    }else{
        setActor(response?.data?.cast);
    }
  }

  const fetchSimlarMovie = async() => {
    console.log("this is similar",id)
    const response = await getsimilarMovie(id);
    console.log("similar",response)
    if(response.iserror){
    
    }else{
      console.log(response,"this is similar movies")
      setSimilarMovie(response?.data?.results);
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imgContainer}>     
        <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
            <BackIcon color={color.PRIMARY}/>
        </Pressable>
        <Image
          source={{
              uri: `https://image.tmdb.org/t/p/w500${
                  backdrop_path || poster_path
                }`,
            }}
            style={styles.imgHolder}
            />
            <LinearGradient colors={['transparent','rgba(23, 23, 23,0.8)', 'rgba(23, 23, 23,1)']} style={{position:'absolute',bottom:0,width:width,height:height*0.4}}>
        </LinearGradient>
        <Text style={styles.title}>{original_title}</Text>
        </View>
        <View style={styles.movieText}>
            <Text style={styles.overview}>{overview}</Text>
            <Text style={styles.overview}>{release_date}</Text>
            <Text style={styles.overview}><HandThumb color={color.TEXT_PRIMARY} size={responsiveFontSize(1.7)}/>{" "+vote_count}</Text>
        </View>
        <View style={styles.actorContainer}>
            <Text style={styles.movieCredits}>Movie Credits</Text>
            {
              actor?.length > 0 ?
              <FlatList
              data={actor}
              horizontal
              renderItem={({item}) => <ActorCard item={item}/>}
              keyExtractor={(item) => item?.id+""}
              showsHorizontalScrollIndicator={false}
              />
              : 
              <ActorShimmer/>
            }
        </View>
        <View style={styles.similarMovie}>
          <Text style={styles.similar}>Similar Movie</Text>
          {
            similarMovie.length > 0 ? 
          <FlatList
            data={similarMovie}
            horizontal
            renderItem={({item}) => <MovieCard item={item}/>}
            keyExtractor={(item) => item?.id}
            showsHorizontalScrollIndicator={false}
            />
          : 
            <Skeleton/>

          }
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.PRIMARY,
    position:'relative',
  },
  imgHolder: {
    width: width,
    height: height * 0.5,
  },
  imgContainer:{
   width: width,
    height: height * 0.5,
  },
  backBtn:{
    height:responsiveWidth(7),
    width:responsiveWidth(7),
    backgroundColor:color.FIRST_LETTER,
    position:'absolute',
    zIndex:2,
    marginLeft:responsiveWidth(3),
    marginTop:responsiveHeight(3),
    justifyContent:'center',
    alignItems:'center',
    borderRadius:responsiveWidth(8)
  },
  title:{
    position:'absolute',
    zIndex:4,
    fontSize:responsiveFontSize(4),
    color:color.TEXT_PRIMARY,
    textAlign:'center',
    fontWeight:'bold',
    bottom:0,
    alignSelf:'center'
  },
  movieText:{
    width:width,
    paddingHorizontal:responsiveWidth(3),
   marginTop:responsiveHeight(2)
  },
  overview:{
    color:color.TEXT_PRIMARY,
    marginBottom:responsiveHeight(1),
    fontSize:responsiveFontSize(1.7)
  },
  releaseDate:{
     color:color.TEXT_PRIMARY
  },
  movieCredits:{
    fontSize:responsiveFontSize(2),
    color:color.TEXT_PRIMARY,
    marginLeft:responsiveWidth(3)
  },
  similarMovie:{
    marginTop:responsiveHeight(2),
    paddingHorizontal:responsiveWidth(3),
    
  },
  similar:{
    fontSize:responsiveFontSize(2),
    color:color.TEXT_PRIMARY,
    fontWeight:'bold'
  }
});
