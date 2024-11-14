import AsyncStorage from '@react-native-async-storage/async-storage';

type mojaRoslina = {
    id: number;
    nazwa: string;
    okres_podlewania_latem: number;
    okres_podlewania_zima: number;
};

//let mojeRosliny: mojaRoslina[] = [];

const storeData = async (mojeRosliny: mojaRoslina[]) => {
    try {
        const jsonValue = JSON.stringify(mojeRosliny);
        await AsyncStorage.setItem('rosliny', jsonValue);
    } catch (e) {
        console.error("Error saving data: ", e);
    }
};

const savePlants = async (mojeRosliny: mojaRoslina[]) => {
    await storeData(mojeRosliny);
};

const getPlants = async (): Promise<mojaRoslina[] | null> => {
    try {
        const jsonValue = await AsyncStorage.getItem('rosliny');
        if (jsonValue != null) {
            return JSON.parse(jsonValue);
        }
    } catch (e) {
        console.error("Error reading value: ", e);
    }
    return null;
};



export { savePlants, getPlants, mojaRoslina };