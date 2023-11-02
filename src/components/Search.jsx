import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  SafeAreaView,
  ActivityIndicator,
  FlatList
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {color} from '../constants/color';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {XMarkIcon as CLOSEICON} from 'react-native-heroicons/solid';
import {ChevronLeftIcon as BackIcon} from 'react-native-heroicons/solid';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getSearchMovie} from '../constants/api';
import MovieCard from './MovieCard';
import { ScrollView } from 'react-native';
const Search = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [searchLoading,setSearchLoading] = useState(false);
  const fetchSearchMovie = async () => {
    if(search.trim().length == 0)return;
    const options = {
                query: search.trim(),
                include_adult: false,
                language: 'en-US',
                page: '1'
    }
    const response = await getSearchMovie(options);
    console.log(response,"from search");
    setSearchLoading(true);
    if (response.iserror) {
    } else {
      setSearchLoading(false);
      
      setSearchList(response?.data?.results);
    }
  };
  return (
      <View style={styles.container}>
           <FlatList
           ListHeaderComponent={
             <View style={styles.searchBarContainer}>
          <Pressable onPress={() => navigation.goBack()}>
            <BackIcon color={color.TEXT_PRIMARY} />
          </Pressable>
          <TextInput
            style={styles.inputHolder}
            placeholder="search movie"
            placeholderTextColor={color.TEXT_PRIMARY}
            onChangeText={text => setSearch(text)}
            value={search}
            returnKeyType="search"
            onSubmitEditing={fetchSearchMovie}
          />
          <Pressable onPress={() => setSearch('')}>
            {searchLoading ? <ActivityIndicator/> : <CLOSEICON color={color.TEXT_PRIMARY} />}
          </Pressable>
        </View>
           }
           ListHeaderComponentStyle={{marginBottom:responsiveHeight(2)}}
            data={searchList}
            horizontal={false}
            numColumns={3}
            renderItem={({item}) => <View style={styles.cardContainer}><MovieCard item={item}/></View>}
            keyExtractor={({item}) => item+""}
            showsVerticalScrollIndicator={true}
            style={styles.flatList}
            />
            </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchBarContainer: {
    height: responsiveHeight(7),
    width: responsiveWidth(90),
    backgroundColor: color.SEARCH_BAR,
    borderRadius: responsiveWidth(7),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    paddingHorizontal: responsiveWidth(4),
  },
  inputHolder: {
    flex: 1,
    backgroundColor: 'transparent',
    color: color.TEXT_PRIMARY,
    marginLeft: responsiveWidth(2),
  },
  searchContainer:{
    alignItems:'center',
    flexDirection:'row',
    flex:1,
    justifyContent:'center',
  },
  flatList:{
    flex:1,
    paddingTop:responsiveHeight(2),
    backgroundColor:color.PRIMARY,

  },
  container:{
    backgroundColor:color.PRIMARY,
    flex:1,
    alignItems:'center',
  }
});
