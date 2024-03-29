import React from 'react';
import { Image, requireNativeComponent, Text, View } from 'react-native';


export default function Card() {
    return (
        <View style={{ padding: 20 }}> 
            {/* ก้อนที่ 1 */}
            <View style={{ flexDirection: 'row' }}>
                <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 }} source={require('../../assets/week3/profile-2.jpg')} />
                <View style={{ marginLeft: 10 }} >

                    <Text style={{ fontSize: 20 }}> Steve Garrett </Text>
                    <Text style={{ color: "grey" }}> 5 hours ago | 100k views </Text>
                </View>
            </View>
            {/* ก้อนที่ 2 */}
            <View style={{ flexDirection: 'row', marginTop: 20 }} >
                <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 3 / 2 }} source={require('../../assets/week3/trip-2.jpg')} />
            </View>
            {/* ก้อนที่ 3 */}
            <View>
                <Text> Overseas Adventure Travel In Nepal </Text>
                <Text> Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. Located in one of the uprising areas of Tokyo </Text>
            </View>
        </View>
    );
}