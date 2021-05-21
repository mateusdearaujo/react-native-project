import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'
import If from './If'

export default ({ usuario = {} }) => {
    return (
        <>
            <If teste={!!usuario}>
                <Text style={Estilo.fontG}>Usuario Logado:</Text>
                <Text>{usuario.nome} - {usuario.email}</Text>
            </If>
        </>
    )
}
