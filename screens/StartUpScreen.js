import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import colors from '../constants/colors'
import commonStyles from '../constants/commonStyles'
import { useDispatch } from 'react-redux'
import { setDidTryAutoLogin } from '../store/authSlice'

const StartUpScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetch = async () => {

            const storeAuthStorage = await AsyncStorage.getItem('authData');
            if(!storeAuthStorage){
               dispatch(setDidTryAutoLogin());
                return;
            }
        }
        fetch();
    }, [])
  return (
    <View style={commonStyles}>
      <ActivityIndicator size="large" color={colors.primary}/>
    </View>
  )
}

export default StartUpScreen

const styles = StyleSheet.create({})