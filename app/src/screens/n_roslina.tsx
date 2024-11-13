import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, TextInput, ImageBackground, Pressable, Image, ScrollView, GestureResponderEvent } from 'react-native';
import rosliny from "../components/Database";
import mojeRosliny from "../components/MojeRosliny";

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


const Choise: React.FC<HomeScreenProps> = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');

    const DodajDoMojichRoslin = (id: number, event: GestureResponderEvent): void => {
        const newPlant = { ...rosliny[id - 1] };
        newPlant.id = mojeRosliny.length + 1;
        mojeRosliny.push(newPlant);
        navigation.navigate('Rosliny');
    }

    const Rosliny = rosliny.filter((roslina) => roslina.nazwa.toLowerCase().includes(searchText.toLowerCase())).map((roslina, index) => (
        <Pressable key={index} style={styles.roslina_tab} onPress={(event) => DodajDoMojichRoslin(roslina.id, event)}>
            <Text>{roslina.nazwa}</Text>
            <Text><Okres okres_lato={roslina.okres_podlewania_latem} okres_zima={roslina.okres_podlewania_zima}></Okres></Text>
        </Pressable>
    ));

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
                        value={searchText}
                        onChangeText={(text) => setSearchText(text)}
                        placeholder="Wyszukaj"
                    />
                </View>
            </View>
            <View style={{ maxHeight: 654, minHeight: 100, flexGrow: 1 }}>
                <ScrollView>
                    {Rosliny}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default Choise;