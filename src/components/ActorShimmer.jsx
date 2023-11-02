import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { responsiveWidth } from 'react-native-responsive-dimensions'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient';
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)
const ActorShimmer = () => {
    return(
        <FlatList
        data={[1,2,3,4,5]}
        renderItem={() => <ShimmerPlaceHolder style={styles.container}></ShimmerPlaceHolder>}
        keyExtractor={(item) => item+""}
         horizontal={true}
        showsHorizontalScrollIndicator={false}
        />
    )
}

export default ActorShimmer


const styles = StyleSheet.create({
    container:{
         height:responsiveWidth(20),
        width:responsiveWidth(20),
        borderRadius:responsiveWidth(10),
        marginHorizontal:responsiveWidth(2)
    }
})