import {
    StyleSheet,
    Text,
    View,
    Pressable,
    TouchableOpacity
} from 'react-native';
import React, {useEffect, useContext} from 'react';
import {MovieContextProvider} from './src/context/context';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Search from './src/components/Search';
import HomeHeader from './src/components/HomeHeader';
import MovieInfo from './src/screens/MovieInfo';
import ActorInfo from './src/components/ActorInfo';
const Stack = createStackNavigator();
const App = () => {
    return (
        <MovieContextProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{animationEnabled:false}}>
                    <Stack.Screen name="Home"
                        component={Home} options={{header : () => <HomeHeader/>}}/>
                    <Stack.Screen name="Search"
                        component={Search} options={{headerShown:false}}/>
                        <Stack.Screen name="MovieInfo"
                        component={MovieInfo} options={{headerShown:false}}/>
                        <Stack.Screen name="ActorInfo"
                        component={ActorInfo} options={{headerShown:false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </MovieContextProvider>
    )
}

export default App;

const styles = StyleSheet.create({})

