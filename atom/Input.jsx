import React, { useEffect, useRef } from 'react'
import { StyleSheet, } from 'react-native';

import styledComponentsNative from 'styled-components/native'

const InputStyle = styledComponentsNative.TextInput`
width:${props => props.width || "100%"};
height:${props => props.height || "100%"};
font-size:16px;

`
const style = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#E2E8F0"

    }
})
export default function Input({ width, height, color, fontSize, state, setState, returnKeyType, placeHolder }) {



    return (
        <InputStyle
            style={style.input}
            value={state}
            onChangeText={setState}
            placeholder={placeHolder}
            height={height}
            width={width}
            color={color}
            fontSize={fontSize}

        // autoCorrect
        // returnKeyType={returnKeyType ? returnKeyType : "next"}
        // onEndEditing={() => console.log("onEndEditing")}
        // onSubmitEditing={() => console.log("onSubmitEditing")} 
        />
    )
}
