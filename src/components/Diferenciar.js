import React from 'react'
import { Text, Platform } from 'react-native'
import Estilo from './estilo'

export default (props) => {
    if (Platform.OS === 'android') {
        return <Text style={Estilo.fontG}>Android</Text>
    } else if (Platform.OS === 'android') {
        return <Text style={Estilo.fontG}>iOS</Text>
    } else {
        return <Text style={Estilo.fontG}>Eita!!</Text>
    }
}
