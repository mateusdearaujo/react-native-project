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
// import ParImpar from './components/ParImpar'
// import Familia from './components/relacao/Familia'
// import Membro from './components/relacao/Membro'
import UsuarioLogado from './components/UsuarioLogado'

export default () => (
    <SafeAreaView style={style.App}>
        <UsuarioLogado usuario={{nome: 'Mateus', email: 'mateus@gmail.com'}}/>
        {/*<Familia>*/}
        {/*    <Membro nome="Carlos" sobrenome="Arruda"/>*/}
        {/*    <Membro nome="Joao" sobrenome="Arruda"/>*/}
        {/*</Familia>*/}
        {/*<Familia>*/}
        {/*    <Membro nome="Ana" sobrenome="Silva"/>*/}
        {/*    <Membro nome="Julia" sobrenome="Silva"/>*/}
        {/*</Familia>*/}
        {/*<ParImpar num={3}/>*/}
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
