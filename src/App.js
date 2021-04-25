import React from 'react'
import { View, StyleSheet } from 'react-native'
// import Primeiro from './components/Primeiro'
// import { Comp, Comp1, Comp2 } from './components/Multi'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio'
import Titulo from './components/Titulo'

export default () => (
    <View style={style.App}>
        <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro do Produto"/>
        {/*<Aleatorio min={1} max={60}/>*/}
        {/*<MinMax min="3" max="20"/>*/}
        {/*<Primeiro/>*/}
        {/*<Comp/>*/}
        {/*<Comp1/>*/}
        {/*<Comp2/>*/}
    </View>
)

const style = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})
