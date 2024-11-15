import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Pressable, Alert, Button, RefreshControlBase } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../components/NavBar';
import mojeRosliny from "../components/MojeRosliny";
import rosliny from '../components/Database';

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
    nowa_l: { //pozycja przycisku do usuwania roslin 
        position: 'absolute',
        left: '25%',
        top: '70%',
        //backgroundColor: 'white',
        width: 50,
        height: 50,
        zIndex: 2,
        borderRadius: 90,
        justifyContent: 'center',
        display: 'flex',
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
            <Text> od {props.okres_lato} - {props.okres_zima} dni</Text>
        );
    }
}

const Rosliny: React.FC<HomeScreenProps> = ({ navigation }) => {

    const [searchText, setSearchText] = useState('');


    const Rosliny = mojeRosliny.filter((mojaRoslina) => mojaRoslina.nazwa.toLowerCase().includes(searchText.toLowerCase())).map((mojaRoslina, index) => (
        <Pressable key={index} style={styles.roslina_tab}>
            <Text>{mojaRoslina.nazwa}</Text>
            <Text><Okres okres_lato={mojaRoslina.okres_podlewania_latem} okres_zima={mojaRoslina.okres_podlewania_zima}></Okres></Text>
            <Pressable onPress={() => { // IT WORKS PLES DONT TOUCH IT ----> Tlumaczenie dla mateusza - NIE DOTYKAJ TO DIALA
                console.log(mojeRosliny.indexOf(mojaRoslina));
                let index = mojeRosliny.indexOf(mojaRoslina);
                mojeRosliny.splice(index,1);


                navigation.navigate('Kalendarz');
                navigation.navigate('Rosliny');
                console.log(mojeRosliny);
                console.log(mojaRoslina);

            }}>
                    <Image source={require('@/assets/images/minus.png')} style={{alignSelf: 'center',}}></Image>
            </Pressable>
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