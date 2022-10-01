import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import styled from 'styled-components/native';
import Input from '../atom/Input';
import { tokenAxios } from '../utility';

const LoginPageStyle = styled.View`
height: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
`
const styles = StyleSheet.create({
    title: {
        fontSize: 400
    }
});
export default function LoginPage({ navigation }) {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const sendLogin = async () => {
        const formdata = new FormData();
        formdata.append("email", email);
        formdata.append("password", password);
        try {
            await tokenAxios.post("aaa", formdata)

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <LoginPageStyle>
            <Text style={styles.title}>login</Text>
            <Input state={email} setState={setemail}
                width="200px"
                height="40px"
                placeHolder="Email" />
            <Input state={password} setState={setpassword}
                width="200px"
                height="40px"
                placeHolder="password" />
            <Button title='로그인' onPress={sendLogin} />
            <Button title='회원가입' onPress={() => { navigation.navigate("signup") }} />
        </LoginPageStyle>)
}
