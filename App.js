import { View, StyleSheet, Text } from "react-native"
import Icon from "react-native-vector-icons/Entypo"
import Casa from "./Casa";
import { useState } from "react";
import { Button } from "react-native-web";

export default function App()
{

    const inicial = [0,0,0,0,0,0,0,0,0];

    const [jogador, setJogador] = useState(1);
    const [tabuleiro, setTabuleiro] = useState(inicial);
    const [vencedor, setVencedor] = useState(0)

    function ganhador()
    {
        let opcoes = [
            "0,1,2", 
            "3,4,5", 
            "6,7,8", 
            "0,3,6", 
            "1,4,7", 
            "2,5,8", 
            "0,4,8", 
            "2,4,6" 
        ];

        opcoes.forEach((item) => 
        {
            let posicao = item.split(",");
            const [pos1, pos2, pos3] = posicao;
            
            if (tabuleiro[pos1] == tabuleiro[pos2] 
                && tabuleiro[pos2] == tabuleiro[pos3])
            {
                if (tabuleiro[pos1] != 0)
                {
                    console.log(tabuleiro[pos1])
                    setVencedor( tabuleiro[pos1] )
                    return;
                }
            }
        })

        const prox = (jogador == 1)? 2 : 1;
        setJogador(prox);
    }

    function novoJogo()
    {
        setJogador(1);
        setTabuleiro(inicial);
        setVencedor(0);
    }


    if (vencedor != 0)
    {
        return (
            <View style={css.tela}>
                <Text>O Vencedor é { vencedor } </Text>
                <Button title="Novo Jogo" onPress={novoJogo} />
            </View>
        )
    } else 
    {

        return (
            <View style={css.tela}>
                <View style={css.tabuleiro}>
                    <Casa 
                        posicao={0}
                        tabuleiro={tabuleiro}
                        gravar={setTabuleiro}
                        turno={jogador} 
                        alternar={ganhador} 
                        
                        />
                    <Casa 
                        posicao={1}
                        tabuleiro={tabuleiro}
                        gravar={setTabuleiro}
                        turno={jogador} 
                        alternar={ganhador} />
                    <Casa 
                        posicao={2}
                        tabuleiro={tabuleiro}
                        gravar={setTabuleiro}
                        turno={jogador} 
                        alternar={ganhador} />
                    
                    <Casa 
                        posicao={3}
                        tabuleiro={tabuleiro}
                        gravar={setTabuleiro}
                        turno={jogador} 
                        alternar={ganhador} />
                    <Casa 
                        posicao={4}
                        tabuleiro={tabuleiro}
                        gravar={setTabuleiro}
                        turno={jogador} 
                        alternar={ganhador} />
                    <Casa 
                        posicao={5}
                        tabuleiro={tabuleiro}
                        gravar={setTabuleiro}
                        turno={jogador} 
                        alternar={ganhador} />
                    
                    <Casa 
                        posicao={6}
                        tabuleiro={tabuleiro}
                        gravar={setTabuleiro}
                        turno={jogador} 
                        alternar={ganhador} />
                    <Casa 
                        posicao={7}
                        tabuleiro={tabuleiro}
                        gravar={setTabuleiro}
                        turno={jogador} 
                        alternar={ganhador} />
                    <Casa 
                        posicao={8}
                        tabuleiro={tabuleiro}
                        gravar={setTabuleiro}
                        turno={jogador} 
                        alternar={ganhador} />

                </View>

                <Text>Agora é a vez do jogador {jogador} </Text>
                

            </View>
        )
    }
}

const css = StyleSheet.create({
    tela: {
        borderColor: "black",
        borderWidth: 1,
        borderStyle: "solid",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }, 
    tabuleiro: {
        width: 300,
        height: 300,
        flexWrap: "wrap",
        flexDirection: "row"
    },
    casa: {
        height: 100,
        width: 100,
        borderColor: "black",
        borderStyle: "solid",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        

    }
});