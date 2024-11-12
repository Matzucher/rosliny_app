import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, TextInput, ImageBackground, Pressable, Image } from 'react-native';

const styles = StyleSheet.create({
    body: {
        flexGrow: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    top: {
        backgroundColor: '#0b6e18',
        width: "100%",
        height: 100,
        alignItems: "center",
        justifyContent: "space-around",
        display: "flex",
        flexDirection: "row",
        marginTop: -20,
    },
    searcher: {
        borderRadius: 90,
        height: 40,
        width: "40%",
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "white",
        justifyContent: "space-around",
    },
    back: {
        width: 50,
        height: 50,
    },
});

type HomeScreenProps = {
    navigation: any;
};

const Choise: React.FC<HomeScreenProps> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.top}>
                <Pressable style={styles.back} onPress={() => navigation.navigate('Rosliny')} >
                    <Image source={require('@/assets/images/Back.png')} />
                </Pressable>
                <View style={styles.searcher}>
                    <TextInput style={{
                        marginLeft: 15,
                    }}
                        defaultValue="You can type in me"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Choise;