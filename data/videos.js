// data/videos.js
const videos = [
    {
        id: '0FqlQG6Oe14', // YouTube Video ID
        title: 'Detoxikace mikroplastů a těžkých kovů',
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
    },
    {
        id: 'MTKmY2R-js0',
        title: 'Nebezpečí mikroplastu',
        topics: [
            {
                header: 'Hlavní téma: Mikroplastik a jeho nebezpečí pro lidské zdraví',
                points: [
                    { text: 'Úvod do problematiky', start: 0, end: 59 }
                ]
            },
            {
                header: '1. Mikroplastik a jeho charakteristika',
                points: [
                    { text: 'Definice mikroplastu', start: 65, end: 73 },
                    { text: 'Nano-plast jako menší částice', start: 73, end: 77 },
                    { text: 'Množství plastu konzumovaného týdně', start: 2, end: 6 }
                ]
            },
            {
                header: '2. Zdroje mikroplastu a cesty jeho příjmu',
                subsections: [
                    {
                        header: 'Zdroje v přírodě a produktech',
                        points: [
                            { text: 'V moři, jezerech a řekách', start: 82, end: 86 },
                            { text: 'V potravinách a vodě', start: 86, end: 88 },
                            { text: 'V kosmetice a hračkách', start: 96, end: 101 },
                            { text: 'V pracích prostředcích, lécích a hnojivech', start: 101, end: 105 },
                            { text: 'V umělých trávnících a omezení EU', start: 106, end: 124 }
                        ]
                    },
                    {
                        header: 'Cesty příjmu do těla',
                        points: [
                            { text: 'Skrze jídlo a pití', start: 187, end: 190 },
                            { text: 'Vdechování', start: 128, end: 129 },
                            { text: 'Kontakt s kůží', start: 130, end: 131 }
                        ]
                    },
                    {
                        header: 'Potravinové zdroje',
                        points: [
                            { text: 'Klíčové potraviny s obsahem mikroplastu', start: 252, end: 288 },
                            { text: 'Sůl a ryby', start: 279, end: 288 },
                            { text: 'Teflonové pánve', start: 320, end: 327 },
                            { text: 'Mlýnky na sůl z plastu', start: 301, end: 309 }
                        ]
                    },
                    {
                        header: 'PFAS ("věčné chemikálie")',
                        points: [
                            { text: 'Definice, vlastnosti a použití', start: 210, end: 233 },
                            { text: 'Stabilita a nerozložitelnost', start: 234, end: 238 }
                        ]
                    },
                    {
                        header: 'Kosmetické zdroje',
                        points: [
                            { text: 'Přítomnost v kosmetice a zubních pastách', start: 328, end: 340 },
                            { text: 'Označení přírodní kosmetiky a aplikace "Codecheck"', start: 341, end: 351 },
                            { text: 'Peelingové přípravky', start: 356, end: 362 },
                            { text: 'Zákaz používání mikroplastů v EU a přechodné období', start: 372, end: 388 }
                        ]
                    }
                ]
            },
            {
                header: '3. Vliv mikroplastu na lidský organismus a vědecké důkazy',
                subsections: [
                    {
                        header: 'Italská šokující studie',
                        points: [
                            { text: 'Nález mikro a nano plastů v cévách (polyethylen a PVC)', start: 11, end: 36 },
                            { text: 'Zvýšené riziko úmrtí, infarktu a mrtvice', start: 40, end: 49 },
                            { text: 'Metodika a výsledky studie', start: 603, end: 709 }
                        ]
                    },
                    {
                        header: 'Studie z "Chemosphere"',
                        points: [
                            { text: 'Potvrzení průniku do buněk', start: 522, end: 534 },
                            { text: 'Přenos z mateřské buňky na dceřinou', start: 555, end: 588 },
                            { text: 'Změny v buňkách a možné usnadnění tvorby metastáz', start: 578, end: 586 }
                        ]
                    },
                    {
                        header: 'Přítomnost v těle',
                        points: [
                            { text: 'Nález v plicích, játrech, mateřském mléce a moči', start: 133, end: 152 }
                        ]
                    },
                    {
                        header: 'Oficiální postoj německých úřadů',
                        points: [
                            { text: 'Chybí dlouhodobé studie a standardní data', start: 408, end: 411 },
                            { text: 'Shromažďování dat a prozatímní stanovisko', start: 436, end: 486 }
                        ]
                    },
                    {
                        header: 'Problémy s nano-plasty',
                        points: [
                            { text: 'Schopnost vázat se na jiné znečišťující látky', start: 490, end: 509 }
                        ]
                    }
                ]
            },
            {
                header: '4. Prevence a ochrana',
                points: [
                    { text: 'Minimalizace plastových obalů', start: 718, end: 725 },
                    { text: 'Správné třídění odpadu', start: 728, end: 732 },
                    { text: 'Používání přírodní kosmetiky', start: 733, end: 742 },
                    { text: 'Vyhýbání se plastovým lahvím a filtrace vody', start: 755, end: 797 },
                    { text: 'Používání litinových pánví namísto teflonových', start: 816, end: 836 },
                    { text: 'Volba přírodních materiálů', start: 806, end: 877 },
                    { text: 'Výběr pracích prostředků', start: 837, end: 844 }
                ]
            },
            {
                header: '5. Detoxikace těla',
                points: [
                    { text: 'Většina částic je vyloučena, nano-plasty zůstávají', start: 903, end: 914 },
                    { text: 'Omezené možnosti (krevní dialýza)', start: 915, end: 934 },
                    { text: 'Shrnutí: Nejúčinnější je prevence', start: 936, end: 943 }
                ]
            }
        ]
    },
    {
        id: 'kenS3rnWR1I',
        title: 'Zdravé stárnutí a podpora mitochondrií',
        topics: [
            {
                header: 'Hlavní téma: Zdravé stárnutí a dlouhověkost',
                subsections: [
                    {
                        header: 'Pochopení mitochondrií',
                        points: [
                            { text: 'Malé, ale vysoce aktivní buněčné organely', start: 18, end: 24 },
                            { text: 'Hlavní funkce je tvorba energie ve formě molekuly ATP', start: 25, end: 48 },
                            { text: 'Zajišťují energii pro každou buňku, zejména ve tkáních s vysokým metabolismem, jako je mozek, svaly a srdce', start: 73, end: 89 }
                        ]
                    },
                    {
                        header: 'Problém s mitochondriemi ve stáří',
                        points: [
                            { text: 'S věkem klesá jejich počet a efektivita', start: 93, end: 99 },
                            { text: 'Důsledky: méně energie, více oxidativního stresu a vyšší riziko degenerativních onemocnění', start: 99, end: 113 }
                        ]
                    },
                    {
                        header: 'Mitochondriální dysfunkce urychluje stárnutí',
                        points: [
                            { text: 'Nesprávná funkce mitochondrií není jen důsledkem stárnutí, ale aktivně urychluje proces stárnutí', start: 128, end: 137 },
                            { text: 'Čím hůře fungují mitochondrie, tím rychleji stárne tělo na biologické úrovni', start: 138, end: 147 }
                        ]
                    }
                ]
            },
            {
                header: 'Řešení: Jak podpořit mitochondrie a zpomalit stárnutí',
                subsections: [
                    {
                        header: 'Vědecký průlom a NAD+',
                        points: [
                            { text: 'Nové studie ukazují, že prekurzory NAD+ mohou výrazně zlepšit funkci mitochondrií ve stárnoucích buňkách', start: 160, end: 168 },
                            { text: 'Aktivní podpora mitochondrií zpomaluje stárnutí', start: 176, end: 180 }
                        ]
                    },
                    {
                        header: '1. Pohyb jako lék',
                        points: [
                            { text: 'Intenzivní intervalový a silový trénink', start: 224, end: 229 },
                            { text: 'Patří k nejefektivnějším stimulům pro tvorbu nových mitochondrií (mitochondriální biogenezi)', start: 231, end: 237 },
                            { text: 'Studie ukazují, že stačí 2-3 cvičení týdně', start: 241, end: 252 }
                        ]
                    },
                    {
                        header: '2. Kälte a teplo',
                        points: [
                            { text: 'Studené sprchy a ledové koupele aktivují hnědou tukovou tkáň, která obsahuje mnoho mitochondrií', start: 260, end: 270 },
                            { text: 'Saunování uvolňuje proteiny tepelného šoku, které podporují opravu a stabilizaci mitochondrií', start: 275, end: 288 }
                        ]
                    },
                    {
                        header: '3. Půst',
                        points: [
                            { text: 'Půst spouští proces mitofágie, při kterém buňky odbourávají vadné mitochondrie a tvoří prostor pro nové', start: 301, end: 312 },
                            { text: 'Zmiňován je intervalový půst 16:8 a 24hodinový půst', start: 320, end: 326 }
                        ]
                    },
                    {
                        header: '4. Mikronutrienty a doplňky stravy',
                        points: [
                            { text: 'Důležité látky: hořčík, koenzym Q10, B-vitamíny, alfa-lipoová kyselina, taurin, acetyl-karnitin', start: 338, end: 352 },
                            { text: 'Koenzym Q10 prokazatelně zvyšuje buněčnou energii, snižuje únavu a oxidační stres', start: 365, end: 391 },
                            { text: 'NAD+ je klíčový koenzym pro produkci energie v mitochondriích', start: 403, end: 410 },
                            { text: 'Studie potvrzují, že prekurzory NAD+, jako je NMN (nikotinamid mononukleotid), výrazně zlepšují funkci mitochondrií', start: 412, end: 426 },
                            { text: 'Další slibné molekuly: resveratrol, PQQ, kreatin', start: 439, end: 468 }
                        ]
                    },
                    {
                        header: '5. Regenerace a nervový systém',
                        points: [
                            { text: 'Hluboký spánek je nezbytný pro buněčné reparační procesy', start: 473, end: 479 },
                            { text: 'Chronický stres zvyšuje kortizol a vede k poškozování mitochondrií', start: 491, end: 500 },
                            { text: 'Zvládání stresu je klíčové pro udržení autonomní rovnováhy', start: 501, end: 512 }
                        ]
                    }
                ]
            },
            {
                header: 'Závěr: Celostní přístup k dlouhověkosti',
                points: [
                    { text: 'Zdravé mitochondrie jsou základem pro dlouhý, aktivní a výkonný život', start: 517, end: 523 },
                    { text: 'Kombinace cíleného pohybu, teplotních podnětů, mikronutrientů, půstu a zvládání stresu aktivně podporuje funkci mitochondrií a chrání buňky', start: 533, end: 556 }
                ]
            }
        ]
    },
    {
        id: 'affqkxFtAbs',
        title: 'Svaly – Váš nejsilnější orgán pro samoléčbu a omlazení',
        topics: [
            {
                header: 'Hlavní myšlenka',
                points: [
                    { text: 'Svalový aparát je největší žláza v těle, která aktivně produkuje látky pro zdraví a dlouhověkost', start: 25, end: 46 }
                ]
            },
            {
                header: 'Základní objev a redefinice role svalů',
                points: [
                    { text: 'Východisko: Video začíná kvízem, který zpochybňuje běžné vnímání největší žlázy v těle (játra, slinivka)', start: 1, end: 25 },
                    { text: 'Vědecký průlom: Objev profesorky Bente Klarlund Pedersen, která zkoumala vliv sportu na imunitní systém', start: 53, end: 73 },
                    { text: 'Klíčové zjištění: Nejen imunitní buňky, ale i samotné svaly produkují imunitu posilující látky (cytokiny)', start: 73, end: 97 },
                    { text: 'Nová definice: Svaly nejsou jen pro pohyb, ale tvoří největší endokrinní (žlázový) a metabolický orgán v těle', start: 107, end: 118 }
                ]
            },
            {
                header: 'Myokiny: Poslové ze svalů',
                points: [
                    { text: 'Obecný koncept: Svaly produkují nejméně 600 hormonům podobných látek zvaných "myokiny"', start: 118, end: 132 },
                    { text: 'Mechanismus aktivace: Pohybem vysíláme tyto látky na cestu po celém těle', start: 132, end: 140 }
                ]
            },
            {
                header: 'Specifické účinky myokinů',
                subsections: [
                    {
                        header: 'Myokin pro mozek: BDNF – "Posilovač mozku"',
                        points: [
                            { text: 'Představení: BDNF je jako "hnojivo pro nervové buňky"', start: 146, end: 180 },
                            { text: 'Funkce: Podporuje učení, paměť, mentální jasnost a zvládání stresu', start: 180, end: 197 },
                            { text: 'Aktivace: Zvyšuje se především aerobní aktivitou, zejména v oblasti hipokampu (paměťové centrum)', start: 197, end: 212 },
                            { text: 'Časový efekt: Jednorázový trénink zvyšuje BDNF krátkodobě, pravidelný trénink dlouhodobě', start: 220, end: 231 }
                        ]
                    },
                    {
                        header: 'Myokin pro metabolismus: Irisin – "Kouzelný umělec"',
                        points: [
                            { text: 'Představení: Irisin je hormon pojmenovaný po řecké poselkyni Iris, protože zprostředkovává komunikaci mezi svaly a orgány', start: 249, end: 277 },
                            { text: 'Funkce 1: Podporuje spalování tuků', start: 277, end: 280 },
                            { text: 'Funkce 2: Chrání mozek (pomáhá zvyšovat BDNF)', start: 280, end: 284 },
                            { text: 'Funkce 3: Přeměňuje bílý (zásobní) tuk na hnědý (termogenní) tuk, což zvyšuje energetický výdej i v klidu', start: 284, end: 293 },
                            { text: 'Další funkce: Chrání před Alzheimerovou chorobou a zlepšuje náladu', start: 303, end: 308 },
                            { text: 'Aktivace: Zvláště účinný je pohyb v chladu a silový trénink', start: 312, end: 317 }
                        ]
                    },
                    {
                        header: 'Myokin pro zánět: Interleukin-6 – "Sportovní faktor"',
                        points: [
                            { text: 'Dvojí povaha: Má dvě tváře', start: 373, end: 376 },
                            { text: '"Špatná tvář": Při stresu a infekci je produkován imunitními buňkami a podporuje zánět (proto se nemá cvičit při nemoci)', start: 376, end: 399 },
                            { text: '"Dobrá tvář": Při sportu je produkován svaly a působí protizánětlivě proti tichým, chronickým zánětům', start: 399, end: 411 },
                            { text: 'Další funkce: Pomáhá nastartovat spalování tuků', start: 417, end: 419 }
                        ]
                    }
                ]
            },
            {
                header: 'Výzva: Problém úbytku svalové hmoty (Sarkopenie)',
                points: [
                    { text: 'Popis problému: Od 30. roku života svalová hmota ubývá', start: 473, end: 481 },
                    { text: 'Zrychlení procesu: Po 50. roce života ztrácíme ročně 1 % svalové hmoty', start: 481, end: 484 },
                    { text: 'Důsledek: V 80 letech můžeme mít o 40 % méně svalů, pokud aktivně nezasáhneme', start: 488, end: 498 }
                ]
            },
            {
                header: 'Praktická řešení a tipy pro každodenní život',
                points: [
                    { text: 'Zdůraznění nutnosti: Důležité je nejen vytrvalostní, ale i silové cvičení', start: 498, end: 503 },
                    { text: 'Podpůrná myšlenka: I lehká aktivita (30 min denně) výrazně snižuje riziko smrtelného infarktu', start: 431, end: 448 }
                ],
                subsections: [
                    {
                        header: 'Tip 1: Schody jako přítel',
                        points: [
                            { text: 'Jedno patro vyjité po schodech prodlužuje život o minutu', start: 566, end: 572 }
                        ]
                    },
                    {
                        header: 'Tip 2: 8000 kroků denně',
                        points: [
                            { text: 'Podle Harvardu snižuje riziko infarktu o 50 %', start: 577, end: 590 },
                            { text: 'Doporučení: Pořiďte si krokoměr a v případě potřeby večer doplňte chybějící kroky', start: 590, end: 597 }
                        ]
                    },
                    {
                        header: 'Tip 3: 3 minuty intenzivního tepu denně',
                        points: [
                            { text: 'Výmluva "není čas" neplatí; stačí krátké, intenzivní intervaly', start: 597, end: 606 },
                            { text: 'Příklady: Běh na místě nebo 10-20 dřepů, které lze provést kdekoli, i v kanceláři', start: 612, end: 624 }
                        ]
                    }
                ]
            },
            {
                header: 'Další souvislosti',
                points: [
                    { text: 'Účinek pohybu není izolovaný; záleží také na výživě, spánku a úrovni stresu', start: 317, end: 328 },
                    { text: 'Různé konstituční typy mohou na stejný podnět reagovat odlišně', start: 331, end: 340 },
                    { text: 'Nabídka testu konstitučního typu pro personalizaci životního stylu', start: 340, end: 367 }
                ]
            }
        ]
    },
    // NOVĚ PŘIDANÉ VIDEO ZAČÍNÁ ZDE
    {
        id: 'gAFDh_WTp_A',
        title: 'Problémy s průmyslovou mléčnou výrobou a jejich řešení',
        topics: [
            {
                header: 'Identifikace problému: Průmyslová mlékárenská výroba',
                subsections: [
                    {
                        header: 'Problém se zpracováním mléka',
                        points: [
                            { text: 'Pasterizace: Ničí enzymy, vitamíny a prospěšné bakterie', start: 50, end: 75 },
                            { text: 'Homogenizace: Rozkládá tukové molekuly, které se ukládají v tepnách', start: 77, end: 96 }
                        ]
                    },
                    {
                        header: 'Problém s chovem krav',
                        points: [
                            { text: 'Hormony: Používání růstových hormonů vede k vyššímu riziku rakoviny prostaty a prsu', start: 98, end: 145 },
                            { text: 'Mýtus o vápníku: Mléko paradoxně odvápňuje kosti, což vede k vyššímu výskytu osteoporózy', start: 145, end: 189 },
                            { text: 'Antibiotika: Používání antibiotik v chovu končí v mléce a ničí střevní mikroflóru', start: 190, end: 212 }
                        ]
                    },
                    {
                        header: 'Problém s ostatními mléčnými produkty',
                        points: [
                            { text: 'Jiné mléčné produkty: Jsou často ještě horší než samotné mléko', start: 235, end: 240 },
                            { text: 'Joghurt: Obsahuje nadbytek cukru a průmyslové probiotické kultury jsou často nefunkční', start: 242, end: 273 },
                            { text: 'Sýr: Koncentruje desetkrát více hormonů a antibiotik než mléko', start: 291, end: 308 },
                            { text: 'Mléčný prášek: Obsahuje oxidovaný cholesterol, který poškozuje tepny', start: 320, end: 340 },
                            { text: 'Laktóza-free produkty: Neřeší skutečné problémy mléka jako jsou hormony a antibiotika', start: 342, end: 362 }
                        ]
                    }
                ]
            },
            {
                header: 'Korupce mlékárenského průmyslu',
                points: [
                    { text: 'Průmysl financuje studie a ovlivňuje učebnice lékařů', start: 212, end: 232 },
                    { text: 'Vědecké studie prokazující škodlivost mléka jsou ignorovány', start: 365, end: 402 }
                ]
            },
            {
                header: 'Biologický argument: Mléko je pro telata, ne pro lidi',
                points: [
                    { text: 'Mléko je přirozeně navrženo k tomu, aby tele z 50 kg vyrostlo na 700 kg', start: 421, end: 436 },
                    { text: 'Laktózová intolerance není nemoc, ale přirozený stav pro většinu dospělých lidí', start: 440, end: 470 }
                ]
            },
            {
                header: 'Řešení: Opravdové mléčné produkty a alternativy',
                subsections: [
                    {
                        header: 'Opravdu zdravé "mléčné" produkty',
                        points: [
                            { text: 'Syrové mléko: Nepasterizované, neošetřené, s živými enzymy a bakteriemi', start: 478, end: 515 },
                            { text: 'Pravý Kefír: Vyráběný z živých kultur, opravuje střevní flóru a posiluje imunitu', start: 515, end: 553 },
                            { text: 'Ghee (ghí): Čistý tuk bez mléčných bílkovin a laktózy, podporuje trávení a spalování tuků', start: 556, end: 574 },
                            { text: 'Sýr ze syrového mléka: Obsahuje vitamín K2, který směřuje vápník do kostí místo do tepen', start: 576, end: 595 },
                            { text: 'Kolostrum (mlezivo): Nejsilnější přírodní lék plný protilátek a růstových faktorů', start: 600, end: 618 }
                        ]
                    },
                    {
                        header: 'Konkrétní akční plán pro diváka',
                        points: [
                            { text: 'Okamžitá akce: Vyhoďte všechny průmyslové mléčné výrobky z lednice', start: 619, end: 628 },
                            { text: 'Zdravá volba: Hledejte syrové mléko u farmáře', start: 628, end: 637 },
                            { text: 'Domácí výroba: Naučte se doma vyrábět Kefír a Ghee', start: 639, end: 655 },
                            { text: 'Alternativy: Pokud nemáte přístup k syrovému mléku, zvolte rostlinné mléko', start: 670, end: 677 },
                            { text: 'Vyhněte se rizikům: Rostlinné mléko si raději vyrobte sami, abyste se vyhnuli cukru a aditivům', start: 680, end: 690 }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 's1YKQkAdgOw',
        title: 'Cesta ke zdraví skrze stravu',
        topics: [
            {
                header: 'Ústřední myšlenka',
                points: [
                    { text: 'Jídlo je lék, ne jen palivo', start: 29, end: 43 }
                ]
            },
            {
                header: 'Vstupní teze',
                points: [
                    { text: 'Příběh pacienta s rizikem cukrovky a srdečních chorob demonstruje, jak může zanedbávání stravy vést k vážným zdravotním problémům navzdory vnějšímu zdání zdraví.', start: 0, end: 29 }
                ]
            },
            {
                header: 'Řešení a výsledek',
                points: [
                    { text: 'Jednoduchý plán založený na 10 základních potravinách vedl k úplnému zvrácení negativního zdravotního trendu a obnovení energie.', start: 43, end: 72 }
                ]
            },
            {
                header: 'Základní princip',
                points: [
                    { text: 'Co mají zdravé potraviny společného?', start: 920, end: 1251 }
                ],
                subsections: [
                    {
                        header: 'Vlastnosti zdravých potravin',
                        points: [
                            { text: 'Jsou nezpracované a celistvé – Existují v takové podobě, jak je příroda vytvořila, a zachovávají si tak všechny živiny.', start: 940, end: 978 },
                            { text: 'Mají nízký obsah sacharidů – Chrání před metabolickými onemocněními, jako je inzulínová rezistence.', start: 1034, end: 1063 },
                            { text: 'Obsahují zdravé, přírodní tuky – Tělo je potřebuje a miluje pro správnou funkci buněk.', start: 1063, end: 1113 },
                            { text: 'Mají nízký obsah prozánětlivých omega-6 tuků – Na rozdíl od průmyslových rostlinných olejů.', start: 1143, end: 1204 }
                        ]
                    },
                    {
                        header: 'Hlavní myšlenka',
                        points: [
                            { text: 'Jíst zdravé potraviny znamená automaticky nahradit a vyloučit ty škodlivé (zpracované, plné cukru a prozánětlivých olejů).', start: 1210, end: 1251 }
                        ]
                    }
                ]
            },
            {
                header: 'Praktická aplikace: 10 pilířů zdravého jídelníčku',
                subsections: [
                    {
                        header: 'Skupina 1: Zdravé tuky jako základ',
                        points: [
                            { text: 'Extra panenský olivový olej: Snižuje riziko srdečních chorob a zánětů.', start: 77, end: 207 },
                            { text: 'Avokádo: Zdroj mononenasycených tuků, draslíku a rozpustné vlákniny.', start: 1501, end: 1688 },
                            { text: 'Ořechy a semena: Stabilizují cukr v krvi, jsou bohaté na minerály a antioxidanty.', start: 516, end: 693 }
                        ]
                    },
                    {
                        header: 'Skupina 2: Koncentrované živiny z živočišných zdrojů',
                        points: [
                            { text: 'Hovězí játra (z pastevního chovu): "Přírodní multivitamin" plný železa, vitamínu A a vitamínů skupiny B.', start: 207, end: 313 },
                            { text: 'Vejce (z pastevního chovu): Zdroj cholinu, vitamínu K2 a vysoce vstřebatelných bílkovin.', start: 693, end: 920 },
                            { text: 'Divoký losos: Nejbohatší zdroj protizánětlivých omega-3 mastných kyselin (EPA a DHA).', start: 1357, end: 1501 }
                        ]
                    },
                    {
                        header: 'Skupina 3: Síla rostlinných mikronutrientů a vlákniny',
                        points: [
                            { text: 'Fermentovaná zelenina: Zdroj probiotik pro zdravý střevní mikrobiom a silnou střevní bariéru.', start: 313, end: 395 },
                            { text: 'Česnek: Podporuje krevní oběh (díky alicinu) a působí antibakteriálně.', start: 395, end: 516 },
                            { text: 'Bobule (ostružiny, maliny, borůvky): "Bonbónky přírody" plné antioxidantů s nízkým obsahem cukru.', start: 1251, end: 1357 },
                            { text: 'Neškrobová a listová zelenina: "Přírodní multivitamin" s vysokým obsahem vlákniny, podporující detoxikaci.', start: 1688, end: 1881 }
                        ]
                    }
                ]
            }
        ]
    }
];

