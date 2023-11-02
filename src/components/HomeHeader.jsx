import { StyleSheet, Text, View,StatusBar,Pressable } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { color } from '../constants/color'
import { useNavigation } from '@react-navigation/native'
import {MagnifyingGlassIcon as SearchIcon} from "react-native-heroicons/solid"
const HomeHeader = () => {
  const navigation = useNavigation();
    StatusBar.setBackgroundColor(color.PRIMARY)
  return (
    <View style={styles.container}>
      <View style={styles.headerLeft}>
        <Text style={styles.headerFirstLetter}>M<Text style={styles.headerTitle}>ovies</Text></Text>
      </View>
      <Pressable style={styles.headerRight} onPress={() => navigation.navigate("Search")}>
        <SearchIcon color={color.TEXT_PRIMARY} size={responsiveFontSize(3)}></SearchIcon>
      </Pressable>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    container:{
        height:responsiveHeight(8),
        width:responsiveWidth(100),
        backgroundColor:color.PRIMARY,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:responsiveWidth(3),
        justifyContent:'space-between',
    },
    headerTitle:{
        color:color.TEXT_PRIMARY,
        fontSize:responsiveFontSize(2.5),
        fontWeight:'bold'
    },
    headerFirstLetter:{
        color:color.FIRST_LETTER,
        fontSize:responsiveFontSize(3),
        fontWeight:'bold'
    }
})