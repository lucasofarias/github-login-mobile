import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';

const colorGitHub = '#010409';
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';

const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/90432297?v=4';
const urlToMyGitHub = 'https://github.com/lucasofarias';

const App = () => {
    const handlePressGoToGitHub = async () => {
        const response = await Linking.canOpenURL(urlToMyGitHub);
        if(response) {
            await Linking.openURL(urlToMyGitHub);
        }
    }
    
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGitHub} barStyle='light-content'/>
            <View style={style.content}> 
                <Image style={style.avatar} source={{uri: imageProfileGitHub}} accessibilityLabel='Selfie do Lucas'/>
                <Text accessibilityLabel='Nome: Lucas Farias' style={[style.defaultText, style.name]}>Lucas Farias</Text>
                <Text accessibilityLabel='Nickname: lucasofarias' style={[style.defaultText, style.nickname]}>lucasofarias</Text>
                <Text accessibilityLabel='Descrição: 18 anos, cursando Ensino Superior em ADS' style={[style.defaultText, style.description]}>18 anos, cursando Ensino Superior em Análise e Desenvolvimento de Sistemas.</Text>
                
                <Pressable onPress={handlePressGoToGitHub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>Open in GitHub</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
    
};

export default App;

const style = StyleSheet.create({
    container: { 
        backgroundColor: colorGitHub,
        flex: 1, 
        justifyContent: 'center',
    },

    content: {
        alignItems: 'center',
        padding: 20,
    },

    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },

    defaultText: {
        color: colorFontGitHub,
    },

    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },

    nickname: {
        fontSize: 18,
        color: colorDarkFontGitHub,
    },

    description: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
    },

    button: {
        backgroundColor: colorDarkFontGitHub,
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
    },

    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});