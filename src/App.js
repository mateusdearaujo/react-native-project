import React from 'react'
import { View, StyleSheet } from 'react-native'
// import Primeiro from './components/Primeiro'
// import { Comp, Comp1, Comp2 } from './components/Multi'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio'
// import Titulo from './components/Titulo'
// import Botao from './components/Botao'
// import Contador from './components/Contador'
// import Pai from './components/direta/Pai'
// import Pai from './components/indireta/Pai'
import ContadorV2 from './components/contador/ContadorV2'

export default () => (
    <View style={style.App}>
        <ContadorV2/>
        {/*<Pai/>*/}
        {/*<Pai/>*/}
        {/*<Contador inicial={100} passo={13}/>*/}
        {/*<Botao/>*/}
        {/*<Titulo principal="Cadastro Produto" secundario="Tela de Cadastro do Produto"/>*/}
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
