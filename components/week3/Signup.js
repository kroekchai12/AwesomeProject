import React from 'react';
import { Button, TextInput, View } from 'react-native';


export default function Signup() {
    return (
        <View style={{ padding : 20  }}>
            <TextInput placeholder='Imput id' />
            <TextInput placeholder='Imput emall' />
            <TextInput placeholder='Imput address' />
            <Button title='Sign up'color={"tomato"}/>
        </View>    
    );
}
