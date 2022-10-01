import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import Input from '../atom/Input';
import { tokenAxios } from '../utility';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
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
        tokenAxios.post("aaa", formdata)
    }
    return (
        <View style={styles.container}>
            <Text>signUp</Text>
            <Input state={email} setState={setemail}
                width="200px"
                height="40px"
                placeHolder="Email" />
            <Input state={password} setState={setpassword}
                width="200px"
                height="40px"
                placeHolder="password" />
            <Input state={nickName} setState={setnickName}
                width="200px"
                height="40px"
                placeHolder="nickName" />
            <Button title='회원가입' onPress={sendSignup} />

        </View>)
}
