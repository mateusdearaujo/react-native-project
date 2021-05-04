import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
// import Primeiro from './components/Primeiro'
// import { Comp, Comp1, Comp2 } from './components/Multi'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio'
// import Titulo from './components/Titulo'
// import Botao from './components/Botao'
// import Contador from './components/Contador'
// import Pai from './components/direta/Pai'
// import Pai from './components/indireta/Pai'
// import ContadorV2 from './components/contador/ContadorV2'
// import Diferenciar from './components/Diferenciar'
import ParImpar from './components/ParImpar'

export default () => (
    <SafeAreaView style={style.App}>
        <ParImpar num={3}/>
        {/*<Diferenciar/>*/}
        {/*<ContadorV2/>*/}
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
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})
