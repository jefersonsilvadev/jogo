import { useState } from "react"
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native"
import Icon from "react-native-vector-icons/Entypo"

export default function Casa(props)
{

    const [jogador, setJogador] = useState(null);

    function jogada()
    {
        setJogador(props.turno);

        let novo = props.tabuleiro;
        novo[props.posicao] = props.turno;

        props.gravar(novo);

        props.alternar();
    }

    let icone = null;

    if (jogador == 1)
    {
        icone = <Icon name="cross" size={90} />
    } else if(jogador == 2)
    {
        icone = <Icon name="circle" size={60} />
    }

    return (
        <TouchableWithoutFeedback onPress={ jogada }>
            <View style={css.casa} >
                { icone }
            </View>
        </TouchableWithoutFeedback>
    )
}

const css = StyleSheet.create({
    casa: {
        height: 100,
        width: 100,
        borderColor: "black",
        borderStyle: "solid",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        

    }
})