import { ScrollView, StyleSheet, Text, View,Image, FlatList,Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useNavigation, useRoute} from '@react-navigation/native';
import { getPersonInfo, getPersonMovie } from '../constants/api';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { color } from '../constants/color';
import MovieCard from './MovieCard';
import {ChevronLeftIcon as BackIcon} from "react-native-heroicons/solid";
const ActorInfo = () => {
    const navigation = useNavigation();
    const [ActorInfo,SetActorInfo] = useState();
    const [ActorMovieInfo,SetActorMovieInfo] = useState();
    const route = useRoute();
    const id = route?.params?.data;
    // console.log(id);

    useEffect(() => {
        fetchPersonInfo();
        fetchPersonMovie()
    },[]);
    const fetchPersonInfo = async() => {
        const response = await getPersonInfo(id);
        if(response?.iserror){

        }else{
            SetActorInfo(response?.data);
            console.log(ActorInfo);
        }
    };

    const fetchPersonMovie = async() => {
        const response = await getPersonMovie(id);
        if(response?.iserror){

        }else{  
            console.log(response);
            SetActorMovieInfo(response?.data?.cast);
        }
    }

  return (
    <View style={styles.container}>
      <ScrollView>
          <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
            <BackIcon color={color.PRIMARY}/>
        </Pressable>
        <View style={styles.imgContainer}>
            <Image source={{uri:`https://image.tmdb.org/t/p/w500${ActorInfo?.profile_path}`}} style={styles.imgHolder}/>
        </View>
        <View style={styles.infoContainer}>
        <Text style={styles.name}>{ActorInfo?.name}</Text>
        <Text style={styles.biography}>{ActorInfo?.biography}</Text>
        <Text style={styles.biography}>{ActorInfo?.birthday}{"   "+ActorInfo?.place_of_birth}</Text>
        <View>
            <FlatList data={ActorMovieInfo}
            horizontal
            renderItem={({item}) => <MovieCard item={item}/>}
            keyExtractor={(item) => item?.id+""}
            showsHorizontalScrollIndicator={false}
            />
        </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default ActorInfo

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.PRIMARY,
        position:'relative',
    },
    imgHolder:{
        height:responsiveWidth(50),
        width:responsiveWidth(50),
        borderRadius:responsiveWidth(25),
        alignSelf:'center'
    },
    imgContainer:{
        justifyContent:'center',
        alignItems:'center',
        height:responsiveHeight(30),
    },
    infoContainer:{
        paddingHorizontal:responsiveWidth(3),
    },
    name:{
        fontSize:responsiveFontSize(2),
        color:color.TEXT_PRIMARY,
        textAlign:'center',
        marginBottom:responsiveHeight(1),
    },
    biography:{
        marginBottom:responsiveHeight(1),
        color:color.TEXT_PRIMARY,
        fontSize:responsiveFontSize(1.7)
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
})