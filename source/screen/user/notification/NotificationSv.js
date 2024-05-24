import { 
    StyleSheet, 
    Text, 
    View, 
    StatusBar,
    Image,
    ImageBackground,
    TextInput,
    FlatList,
    Keyboard,
  } from 'react-native';
import React, { useState, useEffect, createContext} from 'react';
import FontSize from '../../../component/FontSize';
import Color from '../../../component/Color';
import {screenWidth, screenHeight} from '../../../component/DimensionsScreen'
import { useDispatch, useSelector } from 'react-redux';
import {showKeyBoardAction, hideKeyBoardAction} from '../../../redux/action/KeyBoardAction'

export default NotificationSv = () => {
  return(
    <View>
      <Text>screen notification</Text>
    </View>
  )
} 