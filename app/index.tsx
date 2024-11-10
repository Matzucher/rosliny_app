import React from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Pressable, Alert } from 'react-native';

const styles = StyleSheet.create({
    top: {
        backgroundColor: '#0b6e18',
        width: "100%",
        height: 100,
        alignItems: "center",
        justifyContent: "space-around",
        display: "flex",
        flexDirection: "row",
        marginTop: -26,
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
        left: "5%",
        top: "75%",
        backgroundColor: "#CFCB00",
        width: 100,
        height: 100,
        zIndex: 2,
        borderRadius: 90,
        justifyContent: "center",
        display: "flex",
    }
});

export default function Index() {
    return (
        <View style={{
            flex: 1,
        }}>
            <View style={styles.top}>
                <View>
                    <Text>Mój dom</Text>
                </View>
                <View style={styles.searcher}>
                    <TextInput style={{
                        marginLeft: 15,
                    }}
						  		placeholder="wyszukaj"
                    />
                </View>

            </View>
            <ScrollView>

            </ScrollView>
            <Pressable style={styles.nowa_r}>
                <Image source={require('@/assets/images/Krzyz.png')} style={{ alignSelf: 'center' }} />
            </Pressable>
        </View>
    );
};