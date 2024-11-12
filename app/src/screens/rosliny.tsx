import React from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Pressable, Alert, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../components/NavBar';

const styles = StyleSheet.create({
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
    nowa_r: {
        position: 'absolute',
        left: "15%",
        top: "70%",
        backgroundColor: "#CFCB00",
        width: 50,
        height: 50,
        zIndex: 2,
        borderRadius: 90,
        justifyContent: "center",
        display: "flex",
    },
    body: {
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'space-between',
    }
});

type HomeScreenProps = {
    navigation: any;
};


const Rosliny: React.FC<HomeScreenProps> = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.top}>
                <View>
                    <Text>Mój dom</Text>
                </View>
                <View style={styles.searcher}>
                    <TextInput style={{
                        marginLeft: 15,
                    }}
                        defaultValue="You can type in me"
                    />
                </View>
            </View>
            <ScrollView style={{
                flexGrow: 1,
            }}>
            </ScrollView>
            <Pressable style={styles.nowa_r} onPress={() => navigation.navigate('Choise')} >
                <Image source={require('@/assets/images/Krzyz.png')} style={{ alignSelf: 'center', }} />
            </Pressable>
            <NavBar navigation={navigation} active='Rosliny' />
        </SafeAreaView>
    );
};

export default Rosliny;