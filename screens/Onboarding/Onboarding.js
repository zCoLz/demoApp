import { View, Text, ScrollView, Image, ImageBackground, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Onboarding() {
    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <StatusBar hidden />
            <ImageBackground style={{
                flex: 1, justifyContent: 'center',
            }} resizeMode='cover' source={require('../../assets/bg.jpg')} >
                <View style={{ backgroundColor: '#68686860', width: "100%", height: "100%" }}>
                    <View style={{ height: "25%", width: "100%", alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 10 }}>
                        <Image style={{ width: "50%", height: "25%" }} source={require('../../assets/logo.png')} />
                        <Text style={{ fontSize: 20, fontWeight: 700, color: "#ffffff" }}>WELCOME</Text>
                    </View>
                    <View style={{ flex: 1, width: "100%", alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ width: "90%", height: "100%" }} source={require('../../assets/imgTheme.png')} />
                    </View>
                    <View style={{ height: "20%", alignItems: 'center', paddingTop: 10 }}>
                        <Text style={{ fontSize: 14, fontWeight: 500, color: "#ffffff", paddingBottom: 20 }}>SHARE - INSPIRE - CONNECT</Text>
                        <TouchableOpacity style={{ backgroundColor: "rgba(208, 208, 208,0.3)", width: 120, height: 50, alignItems: 'center', justifyContent: "center", borderRadius: 50 }}>
                            <Text style={{ fontSize: 16, fontWeight: 700, color: "#ffffff" }}>Bắt đầu</Text></TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}