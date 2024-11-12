import React from 'react';
import { View, Button, StyleSheet, Pressable, Text } from 'react-native';

const styles = StyleSheet.create({
    navbar: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        height: 100,
        borderWidth: 1,
        borderColor: 'black',
    },
    navbox: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    active: {
        backgroundColor: 'green',
        color: 'white',
    },
    notactive: {
        backgroundColor: 'gray',
        color: 'dark-gray',
    },
});

type HomeScreenProps = {
    navigation: any;
    active: any;
};


const NavBar: React.FC<HomeScreenProps> = ({ navigation, active }) => {
    if (active == 'Rosliny') {
        return (
            <View style={styles.navbar}>
                <Pressable onPress={() => navigation.navigate('Rosliny')} style={[styles.navbox, styles.active]}>
                    <Text>Rosliny</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Kalendarz')} style={styles.navbox}>
                    <Text>Kalendarz</Text>
                </Pressable>
            </View>
        );
    }
    else if (active == 'Kalendarz') {
        return (
            <View style={styles.navbar}>
                <Pressable onPress={() => navigation.navigate('Rosliny')} style={styles.navbox}>
                    <Text>Rosliny</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Kalendarz')} style={[styles.navbox, styles.active]}>
                    <Text>Kalendarz</Text>
                </Pressable>
            </View>
        );
    }

}

export default NavBar;