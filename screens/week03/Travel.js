import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Card from '../../components/week3/card';
import Hotel from '../../components/week3/Hotel';
import Signup from '../../components/week3/Signup';



export default function Travel() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop : 50  }}>
                {/* <Text> Week 3 </Text> */}
                <Signup/>
                <Card />
                <Hotel/>
            </View>
        </ScrollView>
    );
}
