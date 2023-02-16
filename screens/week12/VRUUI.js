import React from 'react';
import { View, Image, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default function VRUUI() {
    return (

        <View style={{ padding: 20 }}>
            <View style={{ flexDirection: 'row', borderBottomWidth: 1, padding: 10}}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style = {{fontSize: 30}}>Home</Text>
                </View>
            </View>

            {/* 1 */}
            <View style={{ padding: 10 , alignItems:'center'}}>
                <View style={{ flexDirection: 'row'}}>
                    <View style={{ height: 150, width: 150, borderRadius: 50 / 2, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 1 }} source={{ uri: 'https://pbs.twimg.com/profile_images/1088643729781489664/BzPd5lg4_400x400.jpg' }} />
                    </View>
                </View>
            </View>

            <View style={{ borderWidth: 1, borderColor: "gray", borderRadius: 10, margin: 10, padding: 10 }}>
                <TextInput placeholder="VRU App " />
            </View>



        </View>



    );
}