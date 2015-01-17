***
{
    "title": "Kostka 5x5x5 - kurs układania"    
}
***
# Kurs układania kostki 5x5x5

Aby układanie kostki 5x5x5 zakończyło się sukcesem niezbędna będzie umiejętność ułożenia kostki 3x3x3.

## Wprowadzenie {#wprowadzenie}

Proces układania możemy podzielić na trzy etapy:

 - [Układanie środkow](#srodki) - układamy środki składające się z dziewięciu elementów,
 - [Trójkowanie krawędzi](#trojkowanie) - łączymy w trójki krawędzie o jednakowych kolorach co pozwoli nam później traktować całą kostkę 5x5x5 jak zwykłą 3x3x3,
 - Układanie jak zwykłą 3x3x3 - sparowane krawędzie traktujemy jako jedną całość, czyli całą kostke jako 3x3x3. Możemy układać dowolną znaną nam metodą z kostki 3x3x3. Przed rozpoczęciem układania ostatniej warstwy (OLL i PLL w Metodzie Fridrich) warto zwrócić uwagę czy nie występuje błąd parzystości (algorytmy z tego etapu burzą ostanią warstwę),
 - [Błąd parzystości (parity error)](#parity) - etap ten nie zawsze pojawi się podczas układania - a jeżeli już to zrobi to jest najprzykrzejszą cześcią ponieważ przydługaśne algorytmy potrafią popsuć ułożenie, które wydawało się, że będzie świetne.

## Układanie środków {#srodki}

Cały przebig układania kostki 5x5x5 zaczynamy od własciwego ułożenia wszystkich środków. Jeżeli miałeś wcześniej kontakt z kostką 4x4x4 to nie powinieneś mieć z typ etapem większych problemów. Środki w zasadzie można układać bez żadnych algorytmów metodą połączenia krawędzi i narożnika środka i wstawienia go w odpowiednie miejsce. 

Dobrze jest aby dwa pierwsze ułożone środki były na przeciwległych ściankach (znacznie ułatwia pracę pozostałymi czterema).

Obrazki poniżej pokazują przykładową kolejność tworzenia środka:

<p markdown=1 class="centered">
![Środki 1](%site.assets%/images/5x5x5/s1.png)
![Środki 2](%site.assets%/images/5x5x5/s2.png)
![Środki 3](%site.assets%/images/5x5x5/s3.png)
![Środki 4](%site.assets%/images/5x5x5/s4.png)
![Środki 5](%site.assets%/images/5x5x5/s5.png)
</p>

Oraz kilka algorytmów, które pomogą przy tych bardziej wymagacjących sytuacjach:

| Ilustracja                                     | Algorytm                                 |
|------------------------------------------------|------------------------------------------|
| ![Środki 6](%site.assets%/images/5x5x5/s6.png) | (Rr) U2 (Rr)'                            |
| ![Środki 7](%site.assets%/images/5x5x5/s7.png) | (Rr) U' (Rr)'                            |
| ![Środki 8](%site.assets%/images/5x5x5/s8.png) | (Rr)' F' (Ll)' (Rr) U (Rr) U' (Ll) (Rr)' |
| ![Środki 9](%site.assets%/images/5x5x5/s9.png) | (Rr) U (Rr)' U (Rr) U2 (Rr)'             |

## Trójkowanie krawędzi {#trojkowanie}

Na tym etapie musimy potrójkować wszystkie krawędzie w tych samych kolorach aby można je było traktować jako jedną całość - a kostkę jak zwykłą 3x3x3.

Poniżej przedstawiony jest najprostszy sposób na połączenie ze sobą trzech krawędzi w dwóch krokach:

| Ilustracja                                               | Algorytm           |
|----------------------------------------------------------|--------------------|
| ![Krawędzie - krok 1](%site.assets%/images/5x5x5/k1.png) | (Rr) U L' U' (Rr)' |
| ![Krawędzie - krok 2](%site.assets%/images/5x5x5/k2.png) | (Rr) U L' U' (Rr)' |

Powyższe algorytmy to tylko najprostszy i zarazem najdłuższ sposób na łączenie krawędzie. Z czasem powinien zostać zastąpiony przez coś bardziej wyrafinowanego.

Łączenie dwóch ostatnich trójek wymaga czasem trochę gimnastyki. A to dlatego, że musimy uważać, aby nie zepsuć tego co wcześniej ułożyliśmy. Wprawa w układaniu kostki 5x5x5 pozwoli na wyeliminowanie większości z poniższych algorytmów.

| Ilustracja                                                                | Algorytm                                                      |
|---------------------------------------------------------------------------|---------------------------------------------------------------|
| ![Ostatnie dwie trójki - przypadek 1](%site.assets%/images/5x5x5/k3.png)  | (Dd) R U R' F R' F' R (Dd)'                                   |
| ![Ostatnie dwie trójki - przypadek 1](%site.assets%/images/5x5x5/k4.png)  | (Dd)' L' U' L F' L F L' (Dd)'                                 |
| ![Ostatnie dwie trójki - przypadek 1](%site.assets%/images/5x5x5/k5.png)  | F2 (Rr) D2 (Rr)' F2 U2 F2 (Ll) B2 (Ll)'                       |
| ![Ostatnie dwie trójki - przypadek 1](%site.assets%/images/5x5x5/k6.png)  | (Uu)2 (Rr)2 F2 u2 F2 (Rr)2 (Uu)2                              |
| ![Ostatnie dwie trójki - przypadek 1](%site.assets%/images/5x5x5/k7.png)  | (Uu)' (Dd) R U R' F R' F' R (Dd)' (Uu)                        |
| ![Ostatnie dwie trójki - przypadek 1](%site.assets%/images/5x5x5/k8.png)  | (Rr)2 B2 (Rr)' U2 (Rr)' U2 B2 (Rr)' B2 (Rr) B2 (Rr)' B2 (Rr)2 |
| ![Ostatnie dwie trójki - przypadek 1](%site.assets%/images/5x5x5/k9.png)  | (Ll)' U2 (Ll)' U2 F2 (Ll)' F2 (Rr) U2 (Rr)' U2 (Ll)2          |
| ![Ostatnie dwie trójki - przypadek 1](%site.assets%/images/5x5x5/k10.png) | (Rr)' U2 (Rr)2 U2 (Rr) U2 (Rr)' U2 (Rr) U2 (Rr)2 U2 (Rr)'     |
| ![Ostatnie dwie trójki - przypadek 1](%site.assets%/images/5x5x5/k11.png) | (Ll) U2 (Ll)2 U2 (Ll)' U2 (Ll) U2 (Ll)' U2 (Ll)2 U2 (Ll)      |

## Błąd parzystości {#parity}

W tym etapie nie ma żadnej filozofii. Musimy nauczyć się długaśnego algroytmu.

| Ilustracja                                                          | Algorytm                                                       |
|---------------------------------------------------------------------|----------------------------------------------------------------|
| ![Błąd parzystości (parity)](%site.assets%/images/5x5x5/parity.png) | (Rr)2 B2 U2 (Ll) U2 (Rr)' U2 (Rr) U2 F2 (Rr) F2 (Ll)' B2 (Rr)2 |