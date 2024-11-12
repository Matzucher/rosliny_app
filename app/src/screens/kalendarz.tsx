import { CalendarList, LocaleConfig } from 'react-native-calendars';
import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Pressable, Alert, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
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
    body: {
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'space-between',
    }
});

LocaleConfig.locales['pl'] = {
    monthNames: [
        'Styczeń',
        'Luty',
        'Marzec',
        'Kwiecień',
        'Maj',
        'Czerwiec',
        'Lipiec',
        'Sierpień',
        'Wrzesień',
        'Październik',
        'Listopad',
        'Grudzień'
    ],
    monthNamesShort: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
    dayNames: ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'],
    dayNamesShort: ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Nie'],
    today: "Dziś: "
};
LocaleConfig.defaultLocale = 'pl';

type HomeScreenProps = {
    navigation: any; // Typowanie nawigacji (można ulepszyć później)
};

const Kalendarz: React.FC<HomeScreenProps> = ({ navigation }) => {
    const [selected, setSelected] = useState('');


    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.top}>
                <View>
                    <Text>Mój dom</Text>
                </View>
                <View>

                </View>
            </View>
            <View>
                <Calendar
                    onDayPress={(day: { dateString: React.SetStateAction<string>; }) => {
                        setSelected(day.dateString);
                    }}
                    markedDates={{
                        [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                    }}
                />
            </View>
            <NavBar navigation={navigation} active='Kalendarz' />
        </SafeAreaView>



    );

};
export default Kalendarz;

