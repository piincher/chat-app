import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import colors from '../constants/colors'
import commonStyles from '../constants/commonStyles'
import { useDispatch } from 'react-redux'
import { setDidTryAutoLogin } from '../store/authSlice'
import { getUserData } from '../utils/actions/userAction'
import AsyncStorage from '@react-native-async-storage/async-storage'

const StartUpScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetch = async () => {

            const storeAuthStorage = await AsyncStorage.getItem('authData');
            if(!storeAuthStorage){
               dispatch(setDidTryAutoLogin());
                return;
            }

            const parsedData = JSON.parse(storeAuthStorage);
            const { token, userId, expiryDate:expiryDateString } = parsedData;
            const expiryDate = new Date(expiryDateString);
            if(expiryDate <= new Date() || !token || !userId){
                dispatch(setDidTryAutoLogin());
                return;
            }


          const userData = await  getUserData(userId)
          dispatch(authenticate({token, userData}));
        }
        fetch();
    }, [dispatch])
  return (
    <View style={commonStyles}>
      <ActivityIndicator size="large" color={colors.primary}/>
    </View>
  )
}

export default StartUpScreen

const styles = StyleSheet.create({})