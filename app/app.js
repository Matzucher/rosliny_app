import {CalendarList, LocaleConfig} from 'react-native-calendars';
import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';
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

const App = () => {
  const [selected, setSelected] = useState('');

  
  return (
    <CalendarList
  onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
  pastScrollRange={50}
  futureScrollRange={50}
  scrollEnabled={true}
  showScrollIndicator={false}
  showWeekNumbers={true}
  hideExtraDays={false}
  style={{
    borderWidth: 1,
    borderColor: 'gray',
    height: 350,
  }}
  theme={{
    backgroundColor: '#c2fcf9',
    calendarBackground: '#5f5f5f',
    textSectionTitleColor: '#c2fcf9',
    selectedDayBackgroundColor: '#c2fcf9',
    selectedDayTextColor: '#000000',
    todayTextColor: '#00adf5',
    dayTextColor: '#44ff00',
    textDisabledColor: '#b4e0bf',
    monthTextColor: 'white',
    textDayFontSize: 20,
    textMonthFontSize: 20,
    textDayHeaderFontSize: 16
    
  }}
  onDayPress={day => {
    setSelected(day.dateString);
  }}
  markedDates={{
    [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'},
  }}
/>

  );
  
};

export default App;