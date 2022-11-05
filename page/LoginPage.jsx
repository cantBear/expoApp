import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import styled from 'styled-components/native';
import Input from '../atom/Input';
import StyledButton from '../atom/StyledButton';
import { tokenAxios } from '../utility';

const LoginPageStyle = styled.View`
height: 100%;
    display:flex;
    align-items: center;
    padding-top:10%;
    background-color: white;
`
const styles = StyleSheet.create({
    title: {
        fontSize: 30
    },
    scriptContainer: {
        marginBottom: 80,
    },
    gap: {
        marginBottom: 20
    },
    flex: {
        flex: 1,
        flexDirection: 2,
        alignItems: "center",
        justifyContent: "flex-end"
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
            await tokenAxios.post("https://motchamji3.herokuapp.com/login/", formdata)

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <LoginPageStyle>
            <View style={styles.scriptContainer}>
                <Text style={styles.title}>올바른 모바일 습관.</Text>
                <Text style={styles.title}>함께 만들어가요</Text>
            </View>


            <Input state={email} setState={setemail}
                width="200px"
                height="40px"
                placeHolder="Email" />
            <View style={styles.gap}></View>

            <Input state={password} setState={setpassword}
                width="200px"
                height="40px"
                placeHolder="password" />
            <View style={styles.gap}></View>
            <StyledButton onPress={sendLogin}  >
                로그인
            </StyledButton>
            <View style={styles.flex}>
                <Text>처음이신가요?</Text>
                <Button title='회원가입' onPress={() => { navigation.navigate("signup") }} />
            </View>
        </LoginPageStyle>)
}
