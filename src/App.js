import React from 'react'
import { View } from 'react-native'
import Primeiro from './components/Primeiro'
import { Comp, Comp1, Comp2 } from './components/Multi'

export default () => (
    <View>
        <Primeiro/>
        <Comp/>
        <Comp1/>
        <Comp2/>
    </View>
)
