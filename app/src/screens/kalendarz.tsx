import { CalendarList, LocaleConfig } from 'react-native-calendars';
import React, { useState, useEffect } from 'react';
import { Calendar } from 'react-native-calendars';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Pressable, Alert, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../components/NavBar';
import rosliny from "../components/Database";
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
    body: {
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'space-between',
    }
});

LocaleConfig.locales['pl'] = {
    monthNames: [
        'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec',
        'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'
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

// Define a list of colors to cycle through based on plant ID
const colors = ['#FFA07A', '#20B2AA', '#9370DB', '#FFD700', '#FF4500', '#2E8B57', '#8B008B', '#4682B4', '#D2691E'];

const Kalendarz: React.FC<HomeScreenProps> = ({ navigation }) => {
    const [selected, setSelected] = useState('');
    const [markedDates, setMarkedDates] = useState<{ [key: string]: { dots: { key: string, color: string }[] } }>({});

    // Generate marked dates with unique dots per plant, adjusting for season
    const getMarkedDates = () => {
        const today = new Date();
        const markedDates: { [key: string]: { dots: { key: string, color: string }[] } } = {};

        mojeRosliny.forEach((plant) => {
            let currentDate = new Date(today);
            const plantColor = colors[plant.id % colors.length]; // Cycle through colors based on plant ID

            // Determine which interval to use based on the month
            let isWinter = (currentDate.getMonth() + 1 <= 3) || (currentDate.getMonth() + 1 >= 10); // October to March
            let wateringInterval = isWinter ? plant.okres_podlewania_zima : plant.okres_podlewania_latem;
            console.log(isWinter);
            // Loop through dates based on the interval for each plant
            while (currentDate.getFullYear() <= today.getFullYear() + 1) {
                const formattedDate = currentDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
                
                // Initialize the date if not already present in markedDates
                if (!markedDates[formattedDate]) {
                    markedDates[formattedDate] = { dots: [] };
                }
                
                // Add a dot for each plant
                markedDates[formattedDate].dots.push({
                    key: `plant_${plant.id}`,
                    color: plantColor
                });
                
                // Move to the next watering date, checking if we need to switch intervals based on season
                currentDate.setDate(currentDate.getDate() + wateringInterval);
                
                // Check if we need to switch watering interval (e.g., moving from March to April)
                const newMonth = currentDate.getMonth() + 1;
                if ((isWinter && newMonth >= 4 && newMonth <= 9) || (!isWinter && (newMonth <= 3 || newMonth >= 10))) {
                    // Toggle the season and update the interval accordingly
                    isWinter = !isWinter;
                    wateringInterval = isWinter ? plant.okres_podlewania_zima : plant.okres_podlewania_latem;
                }
            }
        });

        return markedDates;
    };

    useEffect(() => {
        setMarkedDates(getMarkedDates());
    }, []);

    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.top}>
                <View>
                    <Text>Mój dom</Text>
                </View>
            </View>
            <View>
                <Calendar
                    onDayPress={(day: { dateString: string }) => {
                        setSelected(day.dateString);
                    }}
                    markedDates={{
                        ...markedDates,
                        [selected]: { dots: [{ key: 'selected', color: 'blue' }] }
                    }}
                    markingType={'multi-dot'}
                />
            </View>
            <NavBar navigation={navigation} active='Kalendarz' />
        </SafeAreaView>
    );
};

export default Kalendarz;