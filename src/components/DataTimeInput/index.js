import React, {useState} from 'react'
import { Platform } from 'react-native'

import dateTimeInputAndroid from './index.android'
import dateTimeInputIos from './index.ios'

export default function Index(){
    return(
        Platform.OS === 'android' 
        ?
        <dateTimeInputAndroid/>
        :
        <dateTimeInputIos/>
    )
}
