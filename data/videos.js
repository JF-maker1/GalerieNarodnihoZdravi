// data/videos.js
const videos = [
    {
        id: '0FqlQG6Oe14', // YouTube Video ID
        title: 'Myšlenková mapa: Detoxikace mikroplastů a těžkých kovů',
        topics: [
            {
                header: 'Klíčový prostředek: Chitosan',
                points: [
                    { text: 'Vychází z chitinu (biopolymer z exoskeletu korýšů)', start: 42, end: 76 },
                    { text: 'Chitin je nestravitelný', start: 79, end: 93 },
                    { text: 'Chitosan je derivát chitinu, získaný chemickou modifikací, což zvyšuje jeho rozpustnost a aktivitu', start: 94, end: 124 },
                    { text: 'Ve videu zmíněn speciální chitosan z hlívy ústřičné (Pleurotus ostreatus) jako čistší alternativa bez kontaminace', start: 652, end: 675 }
                ]
            },
            {
                header: 'Mechanismus účinku',
                points: [
                    { text: 'Vazba škodlivin: Funguje jako bipolární vláknina, která váže jak hydrofilní, tak hydrofobní látky', start: 125, end: 141 },
                    { text: 'Vytváří nevstřebatelné komplexy se škodlivinami, které jsou následně vyloučeny z těla', start: 135, end: 141 },
                    { text: 'Primární detoxikace: Váže mikroplasty a těžké kovy, které se často spojují', start: 155, end: 167 },
                    { text: 'In vitro testy potvrzují schopnost vázat plasty', start: 357, end: 365 },
                    { text: 'Využití v čištění odpadních vod', start: 171, end: 192 }
                ]
            },
            {
                header: 'Účinky na organismus a léčebný potenciál',
                subsections: [
                    {
                        header: 'Trávicí systém:',
                        points: [
                            { text: 'Váže žlučové kyseliny, což podporuje jejich vyšší tvorbu a detoxikaci jater', start: 213, end: 236 },
                            { text: 'Působí jako prebiotikum, podporuje diverzitu a obnovu střevního mikrobiomu', start: 417, end: 451 },
                            { text: 'Zmírňuje zánětlivá střevní onemocnění (Crohnova choroba, ulcerózní kolitida)', start: 469, end: 476 },
                            { text: 'Zlepšuje stav při syndromu propustného střeva, posiluje střevní bariéru', start: 585, end: 604 }
                        ]
                    },
                    {
                        header: 'Další účinky:',
                        points: [
                            { text: 'Snížení cholesterolu: Nepřímo snižuje hladinu cholesterolu díky vazbě na žlučové kyseliny', start: 237, end: 304 },
                            { text: 'Protizánětlivé: Redukuje zánětlivé mediátory (cytokiny jako TNF-α)', start: 484, end: 516 },
                            { text: 'Hojení: Podporuje hojení zánětů u zubních implantátů, hojení nervových poškození a zrychluje regeneraci kostí', start: 367, end: 403 },
                            { text: 'Antibakteriální synergie: Zvyšuje účinnost antibiotik proti některým bakteriím (např. Pseudomonas aeruginosa, nemocniční kmen)', start: 537, end: 579 }
                        ]
                    }
                ]
            },
            {
                header: 'Dávkování, vedlejší účinky a rizika',
                subsections: [
                    {
                        header: 'Dávkování:',
                        points: [
                            { text: 'Důležitá je pravidelnost', start: 813, end: 816 },
                            { text: 'Doporučuje se užívání v rámci krátkodobé kúry (4-6 týdnů)', start: 758, end: 763 },
                            { text: 'Postupné navyšování dávky (3-6 kapslí denně)', start: 764, end: 783 },
                            { text: 'Doplnění vitamínů: Váže vitamíny rozpustné v tucích (A, D, E, K) a esenciální mastné kyseliny, proto je nutná jejich suplementace', start: 868, end: 888 }
                        ]
                    },
                    {
                        header: 'Možné vedlejší účinky:',
                        points: [
                            { text: 'Alergie na korýše', start: 917, end: 921 },
                            { text: 'Zácpa, průjem, plynatost (při nedostatečném pití nebo vysoké počáteční dávce)', start: 928, end: 946 },
                            { text: 'Lékové interakce: Může snižovat vstřebávání léků (např. antikonvulziva, antikoncepce), je nutný časový odstup 4 hodiny', start: 965, end: 996 }
                        ]
                    }
                ]
            },
            {
                header: 'Testování a širší souvislosti',
                subsections: [
                    {
                        header: 'Testování mikroplastů:',
                        points: [
                            { text: 'V současné době chybí standardizované a rutinní krevní testy pro mikroplasty, i když existují soukromé možnosti', start: 810, end: 851 }
                        ]
                    },
                    {
                        header: 'Celostní detoxikace:',
                        points: [
                            { text: 'Samotný chitosan nestačí. Důraz je kladen na celostní přístup, který zahrnuje:', start: null, end: null },
                            { text: 'Doplnění stravy (antioxidanty, minerály, vitamíny, kolagen)', start: 1026, end: 1035 },
                            { text: 'Zdravé oleje (omega-3 z lněného oleje)', start: 1035, end: 1069 },
                            { text: 'Fyzickou aktivitu (posilování, studené sprchy, sauna)', start: 1074, end: 1084 },
                            { text: 'Relaxaci a péči o psychiku, protože "léčení je možné jen v relaxaci"', start: 1085, end: 1090 }
                        ]
                    }
                ]
            }
        ]
    }
];
