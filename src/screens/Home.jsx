import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import React,{useContext,useEffect, useState} from 'react';
import { MovieContext } from '../context/context';
import {TRENDING_MOVIE, UPCOMING_MOVIE, getTrendingMovies,getUpCommingMovies,getTopRatedMovies, TOP_RATED_MOVIE} from '../constants/api';
import HomeHeader from '../components/HomeHeader';
import { color } from '../constants/color';
import Trending from '../components/Trending';
import MovieList from '../components/MovieList';
import Skeleton from '../components/Skeleton';
import SplashScreen from 'react-native-splash-screen'
const Home = () => {
    const {trendingMovies, setTrendingMovies,upCommingMovies, setUpCommingMovies,topRatedMovies, setTopRatedMovies} = useContext(MovieContext);
        useEffect(() => {
        fetchTrendingsMovies();
        fetchUpCommingMovies();
        fetchTopRatedMovies();
        setTimeout(() => {
            SplashScreen.hide();
        },3000)
    }, []);
    const [trendLoading,setTreandingLoading] = useState(true);
    const [upComingLoading,setupComingLoading] = useState(true);
    const [topRatedLoading,settopRatedLoading] = useState(true);
    const fetchTrendingsMovies = async () => {
        const response = await getTrendingMovies(TRENDING_MOVIE);
        if(response?.iserror){

        }else{
            setTrendingMovies(response?.data?.results);
            setTreandingLoading(() => false);
        }
    };
    const fetchUpCommingMovies = async () => {
        const response = await getUpCommingMovies(UPCOMING_MOVIE);
        if(response?.iserror){

        }else{
            setUpCommingMovies(response?.data?.results);
            setupComingLoading(() => false);
        }
    };

    const fetchTopRatedMovies = async () => {
        const response = await getUpCommingMovies(TOP_RATED_MOVIE);
        if(response?.iserror){

        }else{
            setTopRatedMovies(response?.data?.results);
            settopRatedLoading(() => false);
        }
    };


  return (
    <View style={styles.container}>
        <ScrollView>
            <Trending data={trendingMovies}/>
           <MovieList title={"Up coming"} data={upCommingMovies}/>
            <MovieList title={"Top Rated"} data={topRatedMovies}/>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.PRIMARY,
    }
})