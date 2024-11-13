type roslina = {
    id: number;
    nazwa: string;
    okres_podlewania_latem: number;
    okres_podlewania_zima: number;
};

const rosliny: roslina[] = [
    { id: 1, nazwa: "Aglaonema", okres_podlewania_zima: 10, okres_podlewania_latem: 12, },
    { id: 2, nazwa: "Albuca Spiralis", okres_podlewania_zima: 20, okres_podlewania_latem: 20 },
    { id: 3, nazwa: "Aloes", okres_podlewania_zima: 20, okres_podlewania_latem: 20 },
];

export default rosliny;