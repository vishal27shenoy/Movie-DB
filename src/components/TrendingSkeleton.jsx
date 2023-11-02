import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import React from 'react'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient';
import { responsiveWidth } from 'react-native-responsive-dimensions';
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)
const {width,height } = Dimensions.get('window');
const TrendingSkeleton = () => {
  return (
      <ShimmerPlaceHolder style={styles.container}>
  </ShimmerPlaceHolder>
  )
}

export default TrendingSkeleton

const styles = StyleSheet.create({
    container:{
        height:height*0.4,
        width:width*0.7,
        borderRadius:responsiveWidth(4),
        resizeMode:'contain'
    }
})