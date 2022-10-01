import React, { useEffect, useRef } from 'react'
import styledComponentsNative from 'styled-components/native'

const InputStyle = styledComponentsNative.TextInput`
width:${props => props.width || "100%"};
height:${props => props.height || "100%"};
border-bottom:solid 1px #E2E8F0;
`
export default function Input({ width, height, color, fontSize, state, setState, returnKeyType, placeHolder }) {



    return (
        <InputStyle
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
