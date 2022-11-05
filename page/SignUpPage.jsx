import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import styledComponentsNative from 'styled-components/native';
import Input from '../atom/Input';
import StyledButton from '../atom/StyledButton';
import { tokenAxios } from '../utility';

const SignUpPageStyle = styledComponentsNative.View`
height: 100%;
    display:flex;
    // align-items: center;
    padding:20%
    padding-top:20%;
    background-color: white;
`
const styles = StyleSheet.create({

    gap: {
        marginBottom: 20
    },
    scriptContainer: {
        marginBottom: 80,
    },
    title: {
        fontSize: 30
    },
    label: {
        fontSize: 12
    }
});
export default function SignUpPage() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [nickName, setnickName] = useState("")
    const sendSignup = () => {
        const formdata = new FormData();
        formdata.append("email", email);
        formdata.append("password", password);
        formdata.append("nickName", nickName)
        tokenAxios.post("https://motchamji3.herokuapp.com/register/", formdata)
    }
    return (
        <SignUpPageStyle>
            <View style={styles.scriptContainer}>
                <Text style={styles.title}>회원가입</Text>
            </View>
            <Text style={styles.label}>이메일</Text>
            <Input state={email} setState={setemail}
                width="200px"
                height="40px"
                placeHolder="Email" />
            <View style={styles.gap}></View>
            <Text style={styles.label}>비밀번호</Text>

            <Input state={password} setState={setpassword}
                width="200px"
                height="40px"
                placeHolder="password" />
            <View style={styles.gap}></View>
            <Text style={styles.label}>닉네임</Text>

            <Input state={nickName} setState={setnickName}
                width="200px"
                height="40px"
                placeHolder="nickName" />
            <View style={styles.gap}></View>
            <StyledButton onPress={sendSignup}  >
                회원가입
            </StyledButton>
        </SignUpPageStyle>

    )
}
