import { Pressable, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { color } from '../constants/color'

import { useNavigation } from '@react-navigation/native';
const ActorCard = (item) => {
  const navigation = useNavigation();
    const {name ,original_name,profile_path,id} = item?.item;
  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate("ActorInfo",{data:id})}>
       <Image style={styles.imgHolder} source={{uri:`https://image.tmdb.org/t/p/w500${profile_path ? profile_path : ''}`}}/> 
      <Text style={styles.name} numberOfLines={1}>{original_name?.length > 10 ? original_name?.slice(0,10) : original_name}</Text>
    </Pressable>
  )
}

export default ActorCard

const styles = StyleSheet.create({
    container:{
        height:responsiveWidth(23),
        width:responsiveWidth(23),
        margin:responsiveWidth(1),
        marginTop:responsiveHeight(2),
        justifyContent:'center',
        alignItems:'center'
    },
    imgHolder:{
        height:responsiveWidth(20),
        width:responsiveWidth(20),
        borderRadius:responsiveWidth(10),
        resizeMode:'contain'
    },
    name:{
        color:color.TEXT_PRIMARY,
    }
})