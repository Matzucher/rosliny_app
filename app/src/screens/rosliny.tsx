import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Pressable, Alert, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../components/NavBar';
import mojeRosliny from "../components/MojeRosliny";

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
    },
    roslina_tab: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'space-around',
        display: 'flex',
        borderBottomWidth: 2,
        borderBlockColor: 'black',
        flexDirection: 'row',
    },
});

type HomeScreenProps = {
    navigation: any;
};

const Okres = (props: { okres_lato: number, okres_zima: number }) => {
    if (props.okres_zima == props.okres_lato) {
        return (
            <Text> co {props.okres_lato} dni</Text>
        );
    }
    else {
        return (
            <Text> od {props.okres_zima} - {props.okres_lato} dni</Text>
        );
    }
}

const Rosliny: React.FC<HomeScreenProps> = ({ navigation }) => {

    const [searchText, setSearchText] = useState('');

    const Rosliny = mojeRosliny.filter((mojaRoslina) => mojaRoslina.nazwa.toLowerCase().includes(searchText.toLowerCase())).map((mojaRoslina, index) => (
        <Pressable key={index} style={styles.roslina_tab}>
            <Text>{mojaRoslina.nazwa}</Text>
            <Text><Okres okres_lato={mojaRoslina.okres_podlewania_latem} okres_zima={mojaRoslina.okres_podlewania_zima}></Okres></Text>
        </Pressable>
    ));

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
                        value={searchText}
                        onChangeText={(text) => setSearchText(text)}
                        placeholder="Wyszukaj"
                    />
                </View>
            </View>
            <View style={{ maxHeight: 554, minHeight: 100, flexGrow: 1 }}>
                <ScrollView>
                    {Rosliny}
                </ScrollView>
            </View>
            <Pressable style={styles.nowa_r} onPress={() => navigation.navigate('Choise')} >
                <Image source={require('@/assets/images/Krzyz.png')} style={{ alignSelf: 'center', }} />
            </Pressable>
            <NavBar navigation={navigation} active='Rosliny' />
        </SafeAreaView>
    );
};

export default Rosliny;