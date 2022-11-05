import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import styledComponentsNative from 'styled-components/native'
const StyledButtonStyle = styledComponentsNative.Button`
// width:${props => props.width || "100%"};
border:solid black 1px;

// height:${props => props.height || "20px"};
// border-radius:10px;
// font-size: 14px;
// background-color:#319795;
// color:${props => props.color === "dark" ? "white" : "#000"}
// opacity:${props => props.color === "dark" ? 1 : 1}
`
const styles = StyleSheet.create({
    button: {
        borderColor: "red",
        backgroundColor: "red"
    }
})
export default function StyledButton({ width, height, color, onPress, children }) {
    return (
        <StyledButtonStyle
            style={styles.button}
            width={width}
            height={height}
            color={color}
            onPress={onPress}
            title={children}
        ></StyledButtonStyle>
    )
}
