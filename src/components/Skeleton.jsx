import { StyleSheet, Text, View ,Dimensions, FlatList} from 'react-native'
import React from 'react'
import { responsiveWidth } from 'react-native-responsive-dimensions';
const {width,height } = Dimensions.get('window');
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient';
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)
const Skeleton = () => {
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

export default Skeleton

const styles = StyleSheet.create({
      container:{
        height:height*0.2,
        width:width*0.3,
        borderRadius:responsiveWidth(2),
        marginHorizontal:responsiveWidth(1),
    }
})