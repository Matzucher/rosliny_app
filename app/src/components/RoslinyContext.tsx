import React, { createContext, useState, useContext, useEffect } from 'react';
import { getPlants, mojaRoslina } from "../components/MojeRosliny";




export const PlantsContext = React.createContext<mojaRoslina[] | undefined>(undefined);

export const PlantsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {


    const [mojeRosliny, setmojeRosliny] = useState<mojaRoslina[]>([]);

    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
            const loadedTab = await getPlants();
            if (loadedTab != null) {
                setmojeRosliny(loadedTab);
            }
            console.log(mojeRosliny);
        };

        fetchData()
            // make sure to catch any error
            .catch(console.error);
    }, [])


    return (
        <PlantsContext.Provider
            value={mojeRosliny}>{children}</PlantsContext.Provider>
    )
}

export const usePlants = (): mojaRoslina[] => {
    const context = useContext(PlantsContext);
    if (!context) {
        throw new Error('usePlants must be used within a PlantsProvider');
    }
    return context;
};